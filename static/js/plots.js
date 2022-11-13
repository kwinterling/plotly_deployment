Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("myPlot", [{x: [1, 2, 3, 4, 5], y: [2, 4, 6, 8, 10]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("plotAreaBar1", [trace]);
