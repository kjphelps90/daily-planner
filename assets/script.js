// grabbed items

var dateTimeEl = $("#date-time");
console.log(dateTimeEl);



// displaying clock

function displayTime() {
    var time = moment().format("MMMM Mo, YYYY[\n]hh:mm:ss a");
    dateTimeEl.text(time);
}
console.log(moment());
setInterval(displayTime,1000);