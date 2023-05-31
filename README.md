# COVID Report App

## Details
An application with a minimalist interface, it returns COVID-related data for a user-selected location accompanied with a map. The user will have to select a region first. After selecting a region, the user will be prompted with another drop-down menu with territories within that region. Once a region is selected, a COVID Report of that location will be generated along with a map. Some regions do not have data that can be broken down to the more specific territory entity. For those regions, the COVID Report generated will be of the region itself. For example, upon selecting "South Korea" in the region selector, the user will immedaitely receive a generated report for "South Korea" as there is no data for individual territories within South Korea available.

## Languages, Frameworks, Tools, Technologies
- Node.js
- Express.js
- Pug
- JavaScript
- HTML
- CSS

## APIs
- [COVID-19 Statistics](https://covid-api.com)
- [Google Mapbox](https://developers.google.com/maps/documentation/embed/get-started)

# Instructions

## Using npm

Run commands

1. `npm install`

2. `npm run dev`

## Or using yarn

Run commands

1. `npm install --global yarn`

2. `yarn install`

3. `yarn run dev`

## What to do?

Select the various types of jurisdictions for a COVID-19 report
