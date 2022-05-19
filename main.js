// About Current Millis See at https://currentmillis.com/

// GET MILLIS Date.now() // or: new Date().getTime()
var time = new Date().getTime();

// Function to Convert Curent Millis to date or date string
function millisToDate(currentMillis) {
  var date = new Date(currentMillis);
  // if you want return date type remove .toString()
  return date.toString()
}

// Log to console
console.log("Current Millis is: ", time)
console.log("Current Date Time is: ",millisToDate(time))

// Convert From Date time string to Millis()
// Source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
console.log(Date.parse("2019-01-01 10:11:15"))
