const covid19 = "https://covid-api.com/api";

/* Functions for COVID API Requests */

async function getRegions() {
  let reqUrl = `${covid19}/reports`; //URL for getting all regions API has data on
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

async function getAreas(regionIso) {
  let reqUrl = `${covid19}/reports?iso=${regionIso}`; // URL for getting all province of a specific region
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

async function getReport(regionIso, areas) {
  let reqUrl = `${covid19}/reports?iso=${regionIso}`;
  //if the province value is empty, which it can be, then it will return a report for the regionIso ONLY, i.e. this happens with South Korea with no other breakdown of data for any specific areas | also works for if the user wants a report for the whole region
  if (areas && areas !== "") {
    reqUrl += `&region_province=${areas}`;
  }
  let res = await fetch(reqUrl, {
    method: "GET",
  });
  return await res.json();
}

module.exports = {
  getRegions,
  getAreas,
  getReport,
};
