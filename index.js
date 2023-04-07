const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const covid19 = require("./modules/covid19/api");

dotenv.config();

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

// set up Google Maps API
const gMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

//important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//public folder setup
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
//INDEX

//Allows user to select a country, which will then run getRegions()
app.get("/", async (req, res) => {
  let regions = await covid19.getRegions();
  let regionIso = req.query.regionIso;
  let areas = await covid19.getAreas(regionIso);
  // console.log(regions);
  res.render("index", {
    title: "Countries/Region",
    regions: regions.data,
    areas: areas.data,
    regionIso: regionIso,
  });
});

//Allows user to select a province, which will then run getProvinces()
app.post("/areas", async (req, res) => {
  let regionIso = req.query.regionIso;
  let areas = await covid19.getAreas(regionIso);
  // console.log(areas);
  // console.log(regionIso);
  res.render("index", {
    title: "Areas",
    regions: regions.data,
    areas: areas.data,
  });
});

//After the selected province, with the regionISO and province, report will be displayed fr that region with getReport()
app.get("/report", async (req, res) => {
  let regionIso = req.query.regionIso;
  let province = req.query.province;
  // console.log(province);
  let report = await covid19.getReport(regionIso, province);
  // console.log(report);
  //Pass Google Maps API to report view
  // console.log(res);
  res.render("report", {
    title: "COVID Report",
    report: report.data,
    // gMapsApiKey is for the Google Maps to be rendered to display the latitude/longitude of the selected area
    gMapsApiKey: gMapsApiKey,
  });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
