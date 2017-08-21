var BKNcur = 0
var BROcur = 0
var BPAcur = 0
var BQUcur = 0
var BBIcur = 0
var BKIcur = 0
var WKNcur = 0
var WROcur = 0
var WPAcur = 0
var WQUcur = 0
var WBIcur = 0
var WKIcur = 0
var cl = 0
var cw = 0
var cn = 0
var expire = new Date()
var changevar = 0
var readc = ""
var cname = ""
var cacr = ""
var val3 = 0
var val4 = 0
function save() {
  clearsave()
  expire = new Date()
  expire.setUTCFullYear(expire.getUTCFullYear() + 1)
  for (cw = 1; cw < 65; cw++) {
    //White Piece Cookies
    if (document.getElementById("_" + cw + "_").innerHTML === "White Pawn") {
      if (WPAcur === 0) {
        document.cookie = ("WPA1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 1) {
        document.cookie = ("WPA2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 2) {
        document.cookie = ("WPA3=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 3) {
        document.cookie = ("WPA4=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 4) {
        document.cookie = ("WPA5=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 5) {
        document.cookie = ("WPA6=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 6) {
        document.cookie = ("WPA7=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 7) {
        document.cookie = ("WPA8=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Rook") {
      if (WROcur === 0) {
        document.cookie = ("WRO1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (WROcur === 1) {
        document.cookie = ("WRO2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WROcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Knight") {
      if (WKNcur === 0) {
        document.cookie = ("WKN1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WKNcur === 1) {
        document.cookie = ("WKN2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Bishop") {
      if (WBIcur === 0) {
        document.cookie = ("WBI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WBIcur === 1) {
        document.cookie = ("WBI2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Queen") {
      if (WQUcur === 0) {
        document.cookie = ("WQU1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WQUcur === 1) {
        document.cookie = ("WQU2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White King") {
      if (WKIcur === 0) {
        document.cookie = ("WKI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKIcur ++
        changevar = 0
      }
    }  //Black Piece Cookies
    if (document.getElementById("_" + cw + "_").innerHTML === "Black Pawn") {
      if (BPAcur === 0) {
        document.cookie = ("BPA1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 1) {
        document.cookie = ("BPA2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 2) {
        document.cookie = ("BPA3=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 3) {
        document.cookie = ("BPA4=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 4) {
        document.cookie = ("BPA5=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 5) {
        document.cookie = ("BPA6=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 6) {
        document.cookie = ("BPA7=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 7) {
        document.cookie = ("BPA8=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Rook") {
      if (BROcur === 0) {
        document.cookie = ("BRO1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (BROcur === 1) {
        document.cookie = ("BRO2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BROcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Knight") {
      if (BKNcur === 0) {
        document.cookie = ("BKN1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BKNcur === 1) {
        document.cookie = ("BKN2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Bishop") {
      if (BBIcur === 0) {
        document.cookie = ("BBI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BBIcur === 1) {
        document.cookie = ("BBI2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Queen") {
      if (BQUcur === 0) {
        document.cookie = ("BQU1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BQUcur === 1) {
        document.cookie = ("BQU2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black King") {
      if (BKIcur === 0) {
        document.cookie = ("BKI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BKIcur ++
        changevar = 0
      }
    }
  }
  WPAcur = 0
  WROcur = 0
  WKNcur = 0
  WBIcur = 0
  WQUcur = 0
  WKIcur = 0
  BPAcur = 0
  BROcur = 0
  BKNcur = 0
  BBIcur = 0
  BQUcur = 0
  BKIcur = 0
}
function load() {
  readc = document.cookie.split("; ")
  if (readc.toString() !== "") {
    clearboard()
    for (cl = 0; cl < readc.length; cl++) {
      cacr = readc[cl][0] + readc[cl][1] + readc[cl][2]
      val3 = readc[cl][5] + readc[cl][6] + readc[cl][7]
      val4 = readc[cl][5] + readc[cl][6] + readc[cl][7] + readc[cl][8]
      if (readc[cl][readc[cl].length - 3] !== "_") {
        if (cacr === "WRO") {
          document.getElementById(val4).innerHTML = "White Rook"
          } if (cacr === "WPA") {
          document.getElementById(val4).innerHTML = "White Pawn"
          } if (cacr === "WKN") {
          document.getElementById(val4).innerHTML = "White Knight"
          } if (cacr === "WBI") {
            document.getElementById(val4).innerHTML = "White Bishop"
          } if (cacr === "WQU") {
            document.getElementById(val4).innerHTML = "White Queen"
          } if (cacr === "WKI") {
            document.getElementById(val4).innerHTML = "White King"
          } if (cacr === "BRO") {
          document.getElementById(val4).innerHTML = "Black Rook"
          } if (cacr === "BPA") {
          document.getElementById(val4).innerHTML = "Black Pawn"
          } if (cacr === "BKN") {
          document.getElementById(val4).innerHTML = "Black Knight"
          } if (cacr === "BBI") {
            document.getElementById(val4).innerHTML = "Black Bishop"
          } if (cacr === "BQU") {
            document.getElementById(val4).innerHTML = "Black Queen"
          } if (cacr === "BKI") {
            document.getElementById(val4).innerHTML = "Black King"
          }
      } if (readc[cl][readc[cl].length - 3] === "_") {
        if (cacr === "WRO") {
          document.getElementById(val3).innerHTML = "White Rook"
          } if (cacr === "WPA") {
          document.getElementById(val3).innerHTML = "White Pawn"
          } if (cacr === "WKN") {
          document.getElementById(val3).innerHTML = "White Knight"
          } if (cacr === "WBI") {
            document.getElementById(val3).innerHTML = "White Bishop"
          } if (cacr === "WQU") {
            document.getElementById(val3).innerHTML = "White Queen"
          } if (cacr === "WKI") {
            document.getElementById(val3).innerHTML = "White King"
          } if (cacr === "BRO") {
          document.getElementById(val3).innerHTML = "Black Rook"
          } if (cacr === "BPA") {
          document.getElementById(val3).innerHTML = "Black Pawn"
          } if (cacr === "BKN") {
          document.getElementById(val3).innerHTML = "Black Knight"
          } if (cacr === "BBI") {
            document.getElementById(val3).innerHTML = "Black Bishop"
          } if (cacr === "BQU") {
            document.getElementById(val3).innerHTML = "Black Queen"
          } if (cacr === "BKI") {
            document.getElementById(val3).innerHTML = "Black King"
          }
      }
    }
  }
}
function clearsave() {
  //Clear White Cookies
  document.cookie = "WPA1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA3=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA4=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA5=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA6=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA7=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WPA8=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WRO1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WRO2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WKN1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WKN2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WBI1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WBI2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WQU1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WQU2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "WKI1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  //Clear Black Cookies
  document.cookie = "BPA1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA3=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA4=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA5=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA6=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA7=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BPA8=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BRO1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BRO2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BKN1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BKN2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BBI1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BBI2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BQU1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BQU2=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  document.cookie = "BKI1=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
}
function fullread() {
  readc = document.cookie.split("; ")
  if (readc.toString() !== "") {
    for (cl = 0; cl < readc.length; cl++) {
      cname = ""
      for (cn = 0; cn < readc[cl].indexOf("="); cn++) {
           cname += readc[cl][cn]
    } console.log("Cookie " + cname + " found")
    }
  }
}
