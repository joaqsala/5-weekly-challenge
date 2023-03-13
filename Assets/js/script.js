// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function(){

  //displays the current date in the header of the page
  var today = dayjs().format("dddd, MMMM D")
  $("#currentDay").text(today);

  //gets dayjs info and sets currentTime to 24-hr format
  var currentTime = dayjs().format('H');
  console.log(currentTime)

  //sets the display of the hours column for the timeframe of 8am to 6pm
  for (var i = 8; i <= 18; i++) {
    var hourText;
    if (i < 12) {
      hourText = `${i}AM`
    } else if
      (i == 12) {
      hourText = "12PM"
    } else {
      hourText = `${i - 12}PM`
    }
    console.log(hourText)

  //gets the saved localStorage using the row id
  var planner = localStorage.getItem(i)
  
  //creates rows and columns with classes and attributees
  var row = $("<div>").attr("id", `${i}`).addClass("row time-block");
  var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hourText}`);
  row.append(hourCol);

  //creates text area and appends classes/attributes; sets value to planner value from localStorage
  var description = $("<textarea>").addClass("col-8 col-md-10 description")
  description.text(planner)
  row.append(description)

  //creates save and appends button and appends classes/attributes
  var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").append($("<i>").addClass("fas fa-save").attr("aria-hidden", true));
  row.append(saveButton)

  
  // compares the currentTime to and adds classes correspondingly
  if (i < currentTime){
    row.addClass("past")
  } else if (i == currentTime) {
    row.addClass("present")
  } else {
    row.addClass("future")
  }

  //appends the rows to the container
  $(".container-lg.px-5").append(row);
 

  // adds an click listener event on the save button
  $(".saveBtn").click(function () {
    //saves the id in the parent(containing time-block)as the key to be used in localStorage
    var id = $(this).parent().attr("id")
    //saves the value of the user generated text to be used in localStorage
    var planner = $(this).siblings("textarea").val()

    //saves the key and text area contentd(value) to local storage 
    localStorage.setItem(id, planner)
  })

  }
})