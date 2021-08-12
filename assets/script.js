// grabbed items

var dateTimeEl = $("#date-time");
console.log(dateTimeEl);

var test = moment()


// displaying clock

function displayTime() {
    var time = moment().format("MMMM Mo, YYYY[\n]hh:mm:ss a");
    dateTimeEl.text(time);
}

setInterval(displayTime,1000);