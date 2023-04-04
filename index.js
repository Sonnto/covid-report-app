const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const covid19 = require("./modules/covid19/api");
const googleMaps = require("./modules/gmaps/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//public folder setup
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
//INDEX, Countries/Regions/Provinces List
app.get("/", async (req, res) => {
  let countryList = await covid19.getCountries();
  console.log(countryList);
  res.render("index", { title: "Countries/Regions", countries: countryList });
});

app.get("/provinces", async (req, res) => {
  let regionIso = req.query.regionIso;
  let provinceList = await covid19.getProvinces(regionIso);
  console.log(provinceList);
  console.log(regionIso);

  res.render("provinces", {
    title: "Provinces",
    provinces: provinceList,
    regionIso: regionIso,
  });
});

app.get("/report", async (req, res) => {
  let regionIso = req.query.regionIso;
  let province = req.query.province;
  console.log(province);
  let report = await covid19.getReport(regionIso, province);
  console.log(report);
  res.render("report", { title: "COVID Report", report: report });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
