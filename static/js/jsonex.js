
d3.json("static/data/samples.json").then(function (data) {
    console.log(data);
});

d3.json("static/data/samples.json").then(function (data) {
    firstPerson = data["metadata"][0];

    Object.entries(firstPerson).forEach(([key, value]) => {
        console.log(key + ": " + value);
    });
});
