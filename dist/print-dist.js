<script>
        

if (typeof Storage !== "undefined") {

  var p = document.getElementById("p2").innerHTML;
  localStorage.setItem("page", p);
// 
} else {
  document.getElementById("p2").innerHTML =
    "Sorry, your browser does not support Web Storage...";
 }

var printWindow = window.open();

printWindow.document.write('<html><head><title>Report Preview</title>');
printWindow.document.write('</head><body><div id="savePdf" style="width:793.700px;height:auto;margin: 0 auto;">');
printWindow.document.write(localStorage.getItem("page"));
printWindow.document.write('</div></body></html>');
printWindow.print();
var pdf = printWindow.document.getElementById("savePdf");











    </script>