// grabbed items
    // clock in header
var dateTimeEl = $("#date-time");
console.log(dateTimeEl);

    // grabbing the p tags on the left that will hold the times.
var time8EL = $("#time-8");



// displaying clock

function displayTime() {
    var time = moment().format("MMMM Mo, YYYY[\n]hh:mm:ss a");
    dateTimeEl.text(time);
}
console.log(moment());
setInterval(displayTime,1000);

// setting the times that will be assigned to the boxes on the left so that we can compare for the CSS changes.

var hours = [
    moment("08:00 a", "hh:mm a").format("h a"),
    moment("09:00 a", "hh:mm a").format("h a"),
    moment("10:00 a", "hh:mm a").format("h a"),
    moment("11:00 a", "hh:mm a").format("h a"),
    moment("12:00 p", "hh:mm a").format("h a"),
    moment("01:00 p", "hh:mm a").format("h a"),
    moment("02:00 p", "hh:mm a").format("h a"),
    moment("03:00 p", "hh:mm a").format("h a"),
    moment("04:00 p", "hh:mm a").format("h a"),
    moment("05:00 p", "hh:mm a").format("h a"),
    moment("06:00 p", "hh:mm a").format("h a"),
]

console.log(hours[0]);
console.log(hours[8]);





// possible dynamic function that would set the times to each of the boxes on the left.


// possible dynamic event listener that would use the .target function in order to have one eventListener for all the buttons.

