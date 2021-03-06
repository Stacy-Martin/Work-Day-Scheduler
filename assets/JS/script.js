

// this variable sets where the time is displayed in the HTML
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

// use init function to create a JS table FORM without having a click event??
// want to manipulate the DOM using jquery / JS loop
// 1. Create element = textarea
// 2. Set attribute for class = .timeBlock 
// 3. Set attribute for ID = #currentTime
// 4. Append child ???  


// Need to be able to add or remove a class from an element using JS depending on the time
// when compared to the current time - this is the color coding of the 3 classes (.past, .present .future)

// click in a timeblock to add user schedule (enter an event) in the textarea

// user event is saved to local storage, such that when page is refreshed the user's schedule persists 