// use init function to create a JS table FORM without having a click event??
// is this attached to the root of the document, as soon as the page loads the 
// form is created ...???

// this variable sets where the time is displayed in the HTML
const timeDisplayEl = $('#time-display');
const rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
// handle displaying the time
const container = $('.container')
function displayTime() {
    
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// need to create a variable and function to create one hour intervals (10) from 8am - 5pm
createRow(24); //numRow = 10
function createRow(numRow) {
    for(let i=0; i<numRow; i++) {
            //wrapper that is the row
    //create a row with textarea, hour, saveBtn
        let time = i + 8;
        let wrapper = $("<div>") //$("div")this selects all divs
        wrapper.attr('id', time +"-hour") //set id of wrapper to i + -hour (8-hour)
        wrapper.attr('class', 'row time-block')
        
        let hourBlock = $('<h5>');
        hourBlock.attr('class', 'hour col-md-1');
        hourBlock.text(time +":00");
        wrapper.append(hourBlock);

        let textArea = $("<textarea>");
        textArea.attr('class', 'description future col-md-10');
        wrapper.append(textArea);

        let saveBtn = $("<button>");
        saveBtn.attr('class', 'saveBtn col-md-1');
        saveBtn.attr('id', time+'-btn')

        wrapper.append(saveBtn);
        // console.log(wrapper)
        container.append(wrapper)
    }
}



checkTime();
function checkTime(){
    const rows = $('.time-block');
    const timeTest = $(parseInt(rightNow));
    console.log(parseInt(rightNow));
    // console.log(this);
    for(let i = 0; i < rows.length; i++){
        if (rows < timeTest) {
            $(this).addClass("past");
        }
      
        else if (rows == timeTest) {
            $(this).addClass("present")
        }

        else {
            $(this).addClass("future")
        }
    }
}
        //if(timeBlockID < rightNow){
            //past
        //}
        //else if(timeBlockID == rightNow){
            //present
        //}
        //else{
            //future
        //}


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



// want to manipulate the DOM using jquery / JS loop
// 1. Create element = textarea
// 2. Set attribute for class = .timeBlock 
// 3. Set attribute for ID = #currentTime
// 4. Append child ???  
// 5. Form has 3 columns --> time (in one hour time block), the text area (input event here),
// and the save button


// Need to be able to add or remove a class from an element using JS depending on the time
// when compared to the current time - this is the color coding of the 3 classes (.past, .present .future)
// each row of the form will need to continually loop or pass through some type of time test 
// to designate its class dynamically such that:
// if the time is less than the current time it is .past and will be styled gray
// else if the time is greater than the current time it is .future and will be styled green
// else the time is within the current hour it is .present and will be styled red
// time will need to be military time and parse the hour for this function to work
// ? use jquery or javascript for this ?

// click in a timeblock to add user schedule (enter an event) in the textarea

// .saveBtn --> user event is saved to local storage, such that when page is refreshed the user's schedule persists 



// $(this) takes thre current DOM element and turns it into a jQuery object
// thus exposing it to JQuery's methods 

// .saveBtn --> user event is saved to local storage, such that when page is refreshed the user's schedule persists 
// $(".saveBtn").on("click", function(){
//     userInput = $(this).siblings(".form").val().trim();
//     console.log(userInput);
//     hourSpan = $(this).siblings(".input").text().trim();
//     console.log(hourSpan);
//     localStorage.setItem(hourSpan, (userInput));
// })