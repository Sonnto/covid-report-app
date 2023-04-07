# COVID Report App

# Details
This is a simple application that returns COVID-related data for a user-selected location accompanied with a map of that location. The user will have to select a region first. After selecting a region, the user will be prompted with another drop-down menu with territories within that region. Once a region is selected, a COVID Report of that location will be generated along with a map. Some regions do not have data that can be brokendown to the more specific territory entity. For those regions, the COVID Report generated will be of the region itself. For example, upon selecting "South Korea" in the region selector, the user will immedaitely receive a generated report for "South Korea" as there is no data for individual territories within South Korea available.

#Lanugages, Frameworks, Tools
- Node.js
- Express.js
- Pug
- JavaScript
- HTML
- CSS

# APIs
- COVID API (https://covid-api.com)
- Google Maps embedded API
