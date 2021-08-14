$(document).ready(function () {

    // clock in header
var dateTimeEl = $("#currentDay");
console.log(dateTimeEl.html());

    // grabbing all the text-areas in order to update the CSS based on the time of day

var am8 = $("#am8");
var am9 = $("#am9");
var am10 = $("#am10");
var am11 = $("#am11");
var pm12 = $("#pm12");
var pm1 = $("#pm1");
var pm2 = $("#pm2");
var pm3 = $("#pm3");
var pm4 = $("#pm4");
var pm5 = $("#pm5");
var pm6 = $("#pm6");

var savedMessage = $("#savedMessage");


    // setting the times that will be assigned to the boxes on the left so that we can compare for the CSS changes.

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
    
       


    // displaying clock

function displayTime() {
    var time = moment().format("MMMM Mo, YYYY[\n]hh:mm:ss a");
    dateTimeEl.text(time);
}
console.log(moment());
setInterval(displayTime,1000);





 
// if statement comparing the current time to the times associated with the different rows.

    for (let i=0; i < hours.length; i++) {
    var currentTime = moment().format("h a");
    console.log(currentTime);

    // going to use addClass and removeClass in the if statement to update the colors.


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


//  eventListener that would use the .target function in order to have one eventListener for all the buttons.

$(":button").on("click", function(event){
    console.log($(this).siblings());
    console.log($(this).siblings(".description"));
    console.log($(this).siblings(".description").val());
    console.log($(this).siblings(".description").attr("id"));

    var textValue = $(this).siblings(".description").val();
    var idValue = $(this).siblings(".description").attr("id");

    localStorage.setItem(idValue,textValue);

    // post message to the header that the task has been saved to local storage and then setTimeout to remove the message.

    savedMessage.text("Your message has been saved to local storage!");
    
    setTimeout(function(){
        savedMessage.text("");

    }, 3000);

});


function setTasks() {
    // getItem has to use strings to pull data back in so made a separate array to pull from.
    var pullBackEL = [
        "am8", 
        "am9", 
        "am10",
        "am11", 
        "pm12", 
        "pm1",
        "pm2", 
        "pm3", 
        "pm4",
        "pm5",
        "pm6"
        ];

    for (let i=0; i < pullBackEL.length; i++) {
        var savedItem = localStorage.getItem(pullBackEL[i]);

        if (pullBackEL[i]) {
          hours[i].lookup.text(savedItem);
        }
    }
}

setTasks();

})