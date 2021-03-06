// use init function to create a JS table FORM without having a click event??
// is this attached to the root of the document, as soon as the page loads the 
// form is created ...???

// this variable sets where the time is displayed in the HTML
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// need to create a variable and function to create one hour intervals (10) from 8am - 5pm


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
$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, (userInput));
})