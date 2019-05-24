// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// closes button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function(ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You need to write something before you can add it to the list!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// ---------------------------------geolocation

var myLocation = document.getElementById("myloc");
console.log(myLocation);
function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
function displayPosition(position) {
  var myLocation = document.getElementById("myloc");
  myLocation.innerHTML =
    "<strong>Longitude: </strong>" +
    position.longitude +
    "<br> <strong>Latitude: </strong>" +
    position.latitude;
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  displayPosition(crd);

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  myLocation.innerText = "Location Tracking Not Possible.";
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
// -------------------------------------------------------------game

$(document).keydown(function(e) {
  var position = $("#player").position();

  switch (e.keyCode) {
    case 37:
      $("#player").css("left", position.left - 20 + "px");
      break;
    case 38:
      $("#player").css("top", position.top - 20 + "px");
      break;
    case 39:
      $("#player").css("left", position.left + 20 + "px");
      break;
    case 40:
      $("#player").css("top", position.top + 20 + "px");
      break;
  }
});
