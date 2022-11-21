

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("static/data/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);

}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("static/data/samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("static/data/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data["samples"];
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var mySampleArray = samples.filter(function (sampleObject) {
      var result = (sampleObject["id"] === sample);
      return result;
    });
    //  5. Create a variable that holds the first sample in the array.
    var mySample = mySampleArray[0];
    console.log(sample);


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = mySample["otu_ids"];
    var otuLabels = mySample["otu_labels"];
    var sampleValues = mySample["sample_values"];


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    // sort paired data based on sampleValues
    var sortedData = otuIDs.map(function (el, i) {
      return [el, otuLabels[i], sampleValues[i]];
    }).sort(function (el1, el2) {
      var sampleVal1 = el1[2];
      var sampleVal2 = el2[2];

      return sampleVal2 - sampleVal1;
    });

  

    // extract top 10 values and put in descending order
    var yticks = sortedData.map((el) => el[0]).map((id) => `OTU ${id}`).slice(0, 10).reverse();
    var hoverText = sortedData.map((el) => el[1]).slice(0, 10).reverse();
    var sampleVals = sortedData.map((el) => el[2]).slice(0, 10).reverse();

    // 8. Create the trace for the bar chart. 

    var trace = {
      x: sampleVals,
      y: yticks,
      text: hoverText,
      type: "bar",
      orientation: "h"
    };

    var barData = [trace];

    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    // 10. Use Plotly to plot the data with the layout.

    Plotly.newPlot("bar", barData, barLayout);

  });
}
