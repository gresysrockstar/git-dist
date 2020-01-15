// $(document).ready(function() {
//   $("p")
//     .clone()
//     .appendTo("body");
// });

// Check browser support
if (typeof Storage !== "undefined") {
  // Store
  var p = document.getElementById("p2").innerHTML;
  localStorage.setItem("page", p);
} else {
  document.getElementById("p2").innerHTML =
    "Sorry, your browser does not support Web Storage...";
}

var printWindow = window.open("", "", "width=793.700px,height=1122.51px");
printWindow.document.write("<div>" + localStorage.getItem("page") + "</div>");
// document.getElementById("p3").innerHTML = localStorage.getItem("page");
