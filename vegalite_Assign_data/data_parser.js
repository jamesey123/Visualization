const parser = require("csvtojson");
const file = require("fs");


parser({
    noheader: true,
    headers: ["symboling", "normalized-losses", "make", "fuel-type", "aspiration", "num-of-doors", "body-style", 
    "drive-wheels", "engine-location", "wheel-base", "length", "width", "height", "curb-weight", "engine-type", "num-of-cylinders",
    "engine-size", "fuel-system", "bore", "stroke", "compression-ratio", "horsepower", "peak-rpm", "city-mpg", "highway-mpg", "price"],
    delimiter: [","]
    })
    .fromFile("imports-85.data").then((json) => {
    console.log(json)

    file.writeFileSync("parsed_data.json", JSON.stringify(json), "utf-8", (err) => { 
        if(err) console.log(err)
    })
})
