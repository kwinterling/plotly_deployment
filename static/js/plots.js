
/* Line Plots */

Plotly.newPlot("plotArea", [{ x: [1, 2, 3], y: [10, 20, 30] }]);

Plotly.newPlot("myPlot", [{ x: [1, 2, 3, 4, 5], y: [2, 4, 6, 8, 10] }]);


/* Bar Plots */

var trace1 = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
Plotly.newPlot("plotAreaBar1", [trace1]);


function nonAlcoholicBarGraph(divID) {
    var trace = {
        x: ["nonalcoholic beer",
            "nonalcoholic wine",
            "nonalcoholic martini",
            "nonalcoholic margarita",
            "ice tea",
            "nonalcoholic rum & coke",
            "nonalcoholic mai tai",
            "nonalcoholic gin & tonic"],
        y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
        type: "bar"
    };
    var data = [trace];
    var layout = {
        title: "'Bar' Chart",
        xaxis: { title: "Drinks" },
        yaxis: { title: "% of Drinks Ordered" }
    };
    Plotly.newPlot(divID, data, layout);
}


function nonalcoholicPieChart(divID) {
    var trace = {
        labels: ["nonalcoholic beer",
            "nonalcoholic wine",
            "nonalcoholic martini",
            "nonalcoholic margarita",
            "ice tea",
            "nonalcoholic rum & coke",
            "nonalcoholic mai tai",
            "nonalcoholic gin & tonic"],
        values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
        type: 'pie'
    };
    var data = [trace];
    var layout = {
        title: "'Pie' Chart",
    };
    Plotly.newPlot(divID, data, layout);
}

function myScatter(divID) {
    var trace = {
        x: [1, 2, 3, 4, 5],
        y: [1, 4, 9, 16, 25],
        mode: "markers",
        type: "scatter"
    };
    var data = [trace];
    var layout = {
        title: "Scatter Plot",
        xaxis: { title: "x-axis" },
        yaxis: { title: "y-axis" }
    };
    Plotly.newPlot(divID, data, layout);
}



nonAlcoholicBarGraph("nonalcoholic");
nonalcoholicPieChart("pie-chart1");
myScatter("scatterplot1");

