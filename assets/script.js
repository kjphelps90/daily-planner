$(document).ready(function () {

    // clock in header
var dateTimeEl = $("#currentDay");
console.log(dateTimeEl.html());

// displaying clock

function displayTime() {
    var time = moment().format("MMMM Mo, YYYY[\n]hh:mm:ss a");
    dateTimeEl.text(time);
}
console.log(moment());
setInterval(displayTime,1000);


var am8 = $("#am-8");
var am9 = $("#am-9");
var am10 = $("#am-10");
var am11 = $("#am-11");
var pm12 = $("#pm-12");
var pm1 = $("#pm-1");
var pm2 = $("#pm-2");
var pm3 = $("#pm-3");
var pm4 = $("#pm-4");
var pm5 = $("#pm-5");
var pm6 = $("#pm-6");



var hours = [
    {time: moment("8 am", "h a"), lookup: am8},
    {time: moment("9 am", "h a"), lookup: am9},
    {time: moment("10 am", "h a"), lookup: am10},
    {time: moment("11 am", "h a"), lookup: am11},
    {time: moment("12 pm", "h a"), lookup: pm12},
    {time: moment("1 pm", "h a"), lookup: pm1},
    {time: moment("2 pm", "h a"), lookup: pm2},
    {time: moment("3 pm", "h a"), lookup: pm3},
    {time: moment("4 pm", "h a"), lookup: pm4},
    {time: moment("5 pm", "h a"), lookup: pm5},
    {time: moment("6 pm", "h a"), lookup: pm6}
];

console.log(moment().startOf('hour').format("h a"));

for (let i=0; i < hours.length; i++) {
    var currentTime = moment().format("h a");
    console.log(currentTime);

    if (hours[i].time.isSame(moment(), "hour")) {
        hours[i].lookup.addClass("present");
    }
    else if (hours[i].time < moment()) {
        hours[i].lookup.addClass("past");
    }
    else if (hours[i].time > moment()) {
        hours[i].lookup.addClass("future");
    }
}





console.log(hours[0].lookup);

if (hours[0].time.isBefore(moment())) {
    hours[0].lookup.addClass("past");
}


// setting the times that will be assigned to the boxes on the left so that we can compare for the CSS changes.




// possible dynamic function that would set the times to each of the boxes on the left.


// possible dynamic event listener that would use the .target function in order to have one eventListener for all the buttons.

    // grab the saved event options
        // save user inputs to a variable and time.
    // then you want to save to local storage.
    // add alert to show that it saved to local storage when save button is hit.
    // create a timeout to remove the notificaiton.


    // going to use addClass and removeClass in the if statement to update the colors.










})