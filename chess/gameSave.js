var BKNcur = 0
var BROcur = 0
var BPAcur = 0
var BQUcur = 0
var WKNcur = 0
var WROcur = 0
var WPAcur = 0
var WQUcur = 0
function save() {
  for (var i = 1; i < 65; i++) {
    if (document.getElementById("_" + i + "_").innerHTML === "Black Pawn") {
      if (BPAcur === 0) {
        localStorage.setItem("BPA1", "_" + i + "_")
      } else if (BPAcur === 1) {
        localStorage.setItem("BPA2", "_" + i + "_")
      } else if (BPAcur === 2) {
        localStorage.setItem("BPA3", "_" + i + "_")
      } else if (BPAcur === 3) {
        localStorage.setItem("BPA4", "_" + i + "_")
      } else if (BPAcur === 4) {
        localStorage.setItem("BPA5", "_" + i + "_")
      } else if (BPAcur === 5) {
        localStorage.setItem("BPA6", "_" + i + "_")
      } else if (BPAcur === 6) {
        localStorage.setItem("BPA7", "_" + i + "_")
      } else if (BPAcur === 7) {
        localStorage.setItem("BPA8", "_" + i + "_")
      } BPAcur ++
    }
  }
}
function load() {
  
}
function clearsave() {
  
}
