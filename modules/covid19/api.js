const covid19 = "https://covid-api.com/api";

/* Functions for COVID API Requests */

async function getCountries() {
  let reqUrl = `${covid19}/regions`; //URL for getting all regions API has data on
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

async function getProvinces(regionISO) {
  let reqUrl = `${covid19}/provinces/${regionISO}`; // URL for getting all province of a specific region
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

async function getReport(regionIso, province) {
  let reqUrl = `${covid19}/reports?iso=${regionIso}&region_province=${province}`; // URL for getting the report for the specific province
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

module.exports = {
  getCountries,
  getProvinces,
  getReport,
};
