// path to csv, data is from FOHM
const csvFile = "./data/Folkhalsomyndigheten_Covid19_Vaccinerade.csv";

// import node modules
const fs = require("fs");
const csv = require("csvtojson");

// variables to filter out regions
const regions = [];
const allRegions = [];

// to filter out the duplicate values with the same region in csv file we use a helper function to first set each unique value
const uniqueValue = (value, index, self) => {
  return self.indexOf(value) === index;
};

csv()
  // read fom file
  .fromFile(csvFile)

  // save result in var json
  .then((json) => {
    // for each item in json, add data from Region tab (in csv file) to array regions
    json.forEach((item) => {
      regions.push(item.Region);
    });
    // in array regions filter out the unique values and save to unique
    var unique = regions.filter(uniqueValue);
    // to save result in entire object
    unique.forEach((region) => {
      var result = {};
      var oneDose = [];
      var fullyVaccinated = [];
      var week = [];

      json.map((item) => {
        // if Region from json is the same as unique region from regions array
        if (item.Region === region) {
          // save as the current region
          var currentRegion = region;
          week.push(item.Vecka);
          // since AntalVaccinerade has two values in csv file, make sure we save the correct value to the correct array
          /*  from w 42, FOHM have changed the definition of "fully vaccinated" to "at least two doses", 
              in order to include the latter definition, the values will continue to represent fully vaccinated,
              and be pushed into the fullyVaccinated array. 
          */
          if (
            item.Vaccinationsstatus === "Färdigvaccinerade" ||
            item.Vaccinationsstatus === "Minst 2 doser"
          ) {
            // don't forget to parse result from string to int for easy access in map layer
            fullyVaccinated.push(parseInt(item.AntalVaccinerade));
          } else {
            oneDose.push(parseInt(item.AntalVaccinerade));
          }
          // construct key and data to save in new file
          result.region = currentRegion;
          result.fulltVaccinerade = fullyVaccinated;
          result.enDos = oneDose;
          result.vecka = week;
        }
      });
      // console.log(result);
      // save the result to an array
      allRegions.push(result);
    });

    console.log("Map done. Writing to file.");
    let data = JSON.stringify(allRegions);
    fs.writeFileSync(__dirname + "/data/vaccinated.json", data, "UTF-8", { flags: "a+" });
  });