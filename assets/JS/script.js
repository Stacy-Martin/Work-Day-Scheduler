// this variable sets where the time is displayed in the HTML
const timeDisplayEl = $('#time-display');
const rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
// handle displaying the time
const container = $('.container')

function displayTime() {
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
// displayTime()

//this var span makes the time tick 
var span = document.getElementById('time-display');
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);



// a function to create one hour intervals (10) from 8am - 5pm
createRow(10); //numRow = 10
function createRow(numRow) {
    for(let i=0; i<numRow; i++) {
    //wrapper that is the row
    //create a row with textarea, hour, saveBtn
        let time = i+8;
        let wrapper = $("<div>") //$("div")this selects all divs
        wrapper.attr('id', time) //set id of wrapper to i + -hour (8-hour)
        wrapper.attr('class', 'row time-block')
        
        let hourBlock = $('<h5>');
        hourBlock.attr('class', 'hour col-md-1');
        hourBlock.text(time +":00");
        wrapper.append(hourBlock);

        let textArea = $("<textarea>");
        textArea.attr('class', 'description col-md-10');
        wrapper.append(textArea);

        let saveBtn = $("<button>");
        saveBtn.attr('class', 'saveBtn col-md-1');
        saveBtn.attr('id', time+'-btn')

        wrapper.append(saveBtn);
        // console.log(wrapper)
        container.append(wrapper)
    }
}

//this function adds the past/present/future class to the rows based on their
// comparison to the current time
const currentHour = parseInt(moment().hours());
checkTime();
function checkTime(){
    const rows = $(".time-block");
    
    for(let i = 0; i < rows.length; i++){
        var timeBlockID = $(rows[i]).attr("id");
        console.log(timeBlockID);

        if (timeBlockID < currentHour) {
            $(rows[i]).addClass("past");
        }
      
        else if (timeBlockID == currentHour) {
            $(rows[i]).addClass("present")
        }

        else {
            $(rows[i]).addClass("future")
        }
    }
}

// click in a timeblock to add user schedule (enter an event) in the textarea
// .saveBtn --> user event is saved to local storage, such that when page is refreshed the user's schedule persists 
$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".time-block").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, (userInput));
})

function storeForm(event){
    //accessing Local Storage whoooooooo
    //setItem("time-hour", valueFromForm)
    //textArea.val() -> gets the value from a textarea
    //look up how to parse id from element
    // console.log(event.target)
}

function getForm(){
    //gets stuff from LocalStorage on load up
    //get item also we need another for-loop thru timeblocks
}

$(document).ready(
    //JQuery's version of addEventListener('click', ...)
    //this is event delegation having one event listener looking for saveBtn clicks
        $(".saveBtn").on("click", storeForm)
    )
