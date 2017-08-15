var BKNcur = 0
var BROcur = 0
var BPAcur = 0
var BQUcur = 0
var WKNcur = 0
var WROcur = 0
var WPAcur = 0
var WQUcur = 0
var store = document.cookie
var date = new Date()
function save() {
  date = new Date()
  date.setFullYear(date.getUTCFullYear + 1)
  for (var i = 1; i < 65; i++) {
    if (document.getElementById("_" + i + "_").innerHTML === "Black Pawn") {
      if (BPAcur === 0) {
        store("BPA1=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 1) {
        store("BPA2=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 2) {
        store("BPA3=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 3) {
        store("BPA4=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 4) {
        store("BPA5=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 5) {
        store("BPA6=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 6) {
        store("BPA7=" + "_" + i + "_; expires=" + (date.toUTCString))
      } else if (BPAcur === 7) {
        store("BPA8=" + "_" + i + "_; expires=" + (date.toUTCString))
      } BPAcur ++
    }
  }
}
function load() {
  
}
function clearsave() {
  
}
