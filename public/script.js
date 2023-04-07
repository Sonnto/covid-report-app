/*** FUNCTIONS FOR index.pug ***/
//Ensures if user changes regionIso, it won't submit for a report by redefining submitForm() function
const submitForm = () => {
  const form = document.getElementById("region-form");
  form.submit();
};
//Ensures that the user cannot submit the default or empty options for the area-form
const areaSelect = document.getElementById("area-select");
areaSelect.addEventListener("change", () => {
  const submitBtn = document.querySelector('#area-form input[type="submit"]');
  submitBtn.disabled = areaSelect.value === "";
});
//Ensure if the region has less than or equal to 2 options for "provinces', it will auto submit since it likely only has data on the entire country/region itself.
//Initialize some elements
const form = document.getElementById("area-form"); //selects element with id "area-form"
const select = form.querySelector("select"); //selects select element in "form"
const options = select.querySelectorAll("option"); //selects option elements in "select"
//Checks & store for null options
const nullOptions = Array.from(options).filter(
  (option) => !option.value.trim()
).length; //convers options to array, filters array, stores only null options
//Check and store non-null options
const nonNullOptions = options.length - nullOptions; //calculates number of options that aren't null, empty, or undefined
//Check number of non-null options in area drop-down menu is less than or equal to 2, if so, auto submit form
if (nonNullOptions <= 2 && nullOptions > 0) {
  const submitBtn = document.querySelector('#area-form input[type="submit"]');
  submitBtn.disabled = false;
  form.submit();
}
