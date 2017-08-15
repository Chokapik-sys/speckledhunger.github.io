var BKNcur = 0
var BROcur = 0
var BPAcur = 0
var BQUcur = 0
var WKNcur = 0
var WROcur = 0
var WPAcur = 0
var WQUcur = 0
var i = 1
var expire = new Date()
var changevar = 0
function save() {
  expire = new Date()
  expire.setUTCFullYear(expire.getUTCFullYear() + 1)
  for (i = 1; i < 65; i++) {
    //White Piece Cookies
    if (document.getElementById("_" + i + "_").innerHTML === "White Pawn") {
      if (WPAcur === 0) {
        document.cookie = ("WPA1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 1) {
        document.cookie = ("WPA2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 2) {
        document.cookie = ("WPA3=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 3) {
        document.cookie = ("WPA4=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 4) {
        document.cookie = ("WPA5=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 5) {
        document.cookie = ("WPA6=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 6) {
        document.cookie = ("WPA7=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 7) {
        document.cookie = ("WPA8=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "White Rook") {
      if (WROcur === 0) {
        document.cookie = ("WRO1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (WROcur === 1) {
        document.cookie = ("WRO2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WROcur ++
        changevar = 0
      }
    }
  }
  WPAcur = 0
  WROcur = 0
}
function load() {
  
}
function clearsave() {
  
}
