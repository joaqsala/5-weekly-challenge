// $(document).ready(function(){
  
// })

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// $(function () {

  //displays the current date in the header of the page
  var today = dayjs().format("dddd, MMMM D")
  $("#currentDay").text(today);


  var currentTime = dayjs().format('H');
  console.log(currentTime)
  $(".container-lg.px-5").html("")

  for (var i = 6; i <= 18; i++) {
    var hourText;
    if (i < 12) {
      hourText = `${i}AM`
    } else if
      (i == 12) {
      hourText = "12PM"
    } else {
      hourText = `${i - 12}PM`
    }
    console.log(hourText);

  
  var row = $("<div>").attr("id", `${i}`).addClass("row time-block");
  var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hourText}`);
  row.append(hourCol);

  var description = $("<textarea>").addClass("col-8 col-md-10 description").val(planner)
  description.text(planner)
  row.append(description)

  
  var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").append($("<i>").addClass("fas fa-save").attr("aria-hidden", true));
  row.append(saveButton)

  
  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  if (i < currentTime){
    row.addClass("past")
  } else if (i == currentTime) {
    row.addClass("present")
  } else {
    row.addClass("future")
  }


  $(".container-lg.px-5").append(row);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $(".saveBtn").click(function () {
    var id = $(this).parent().attr("id")
    var planner = $(this).siblings("textarea").val()
    console.log(id,planner)
    localStorage.setItem(id,planner)
  })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  



// window.onload = function(){
//   //whatever first function is being used
  }