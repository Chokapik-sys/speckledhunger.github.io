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
var i = 1
var expire = new Date()
var changevar = 0
var readc = ""
var cname = ""
var val3 = 0
var val4 = 0
function save() {
  clearsave()
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
    } if (document.getElementById("_" + i + "_").innerHTML === "White Knight") {
      if (WKNcur === 0) {
        document.cookie = ("WKN1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WKNcur === 1) {
        document.cookie = ("WKN2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "White Bishop") {
      if (WBIcur === 0) {
        document.cookie = ("WBI1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WBIcur === 1) {
        document.cookie = ("WBI2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "White Queen") {
      if (WQUcur === 0) {
        document.cookie = ("WQU1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (WQUcur === 1) {
        document.cookie = ("WQU2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "White King") {
      if (WKIcur === 0) {
        document.cookie = ("WKI1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKIcur ++
        changevar = 0
      }
    }  //Black Piece Cookies
    if (document.getElementById("_" + i + "_").innerHTML === "Black Pawn") {
      if (BPAcur === 0) {
        document.cookie = ("BPA1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 1) {
        document.cookie = ("BPA2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 2) {
        document.cookie = ("BPA3=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 3) {
        document.cookie = ("BPA4=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 4) {
        document.cookie = ("BPA5=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 5) {
        document.cookie = ("BPA6=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 6) {
        document.cookie = ("BPA7=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 7) {
        document.cookie = ("BPA8=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "Black Rook") {
      if (BROcur === 0) {
        document.cookie = ("BRO1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (BROcur === 1) {
        document.cookie = ("BRO2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BROcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "Black Knight") {
      if (BKNcur === 0) {
        document.cookie = ("BKN1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BKNcur === 1) {
        document.cookie = ("BKN2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "Black Bishop") {
      if (BBIcur === 0) {
        document.cookie = ("BBI1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BBIcur === 1) {
        document.cookie = ("BBI2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "Black Queen") {
      if (BQUcur === 0) {
        document.cookie = ("BQU1=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } else if (BQUcur === 1) {
        document.cookie = ("BQU2=" + "_" + i + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + i + "_").innerHTML === "Black King") {
      if (BKIcur === 0) {
        document.cookie = ("BKI1=" + "_" + i + "_; expires=" + expire)
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
    for (i = 0; i < readc.length; i++) {
      cname = readc[i][0] + readc[i][1] + readc[i][2]
      val3 = readc[i][5] + readc[i][6] + readc[i][7]
      val4 = readc[i][5] + readc[i][6] + readc[i][7] + readc[i][8]
      if (readc[i][readc[i].length - 3] !== "_") {
        if (cname === "WRO") {
          document.getElementById(val4).innerHTML = "White Rook"
          } if (cname === "WPA") {
          document.getElementById(val4).innerHTML = "White Pawn"
          } if (cname === "WKN") {
          document.getElementById(val4).innerHTML = "White Knight"
          } if (cname === "WBI") {
            document.getElementById(val4).innerHTML = "White Bishop"
          } if (cname === "WQU") {
            document.getElementById(val4).innerHTML = "White Queen"
          } if (cname === "WKI") {
            document.getElementById(val4).innerHTML = "White King"
          } if (cname === "BRO") {
          document.getElementById(val4).innerHTML = "Black Rook"
          } if (cname === "BPA") {
          document.getElementById(val4).innerHTML = "Black Pawn"
          } if (cname === "BKN") {
          document.getElementById(val4).innerHTML = "Black Knight"
          } if (cname === "BBI") {
            document.getElementById(val4).innerHTML = "Black Bishop"
          } if (cname === "BQU") {
            document.getElementById(val4).innerHTML = "Black Queen"
          } if (cname === "BKI") {
            document.getElementById(val4).innerHTML = "Black King"
          }
      } if (readc[i][readc[i].length - 3] === "_") {
        if (cname === "WRO") {
          document.getElementById(val3).innerHTML = "White Rook"
          } if (cname === "WPA") {
          document.getElementById(val3).innerHTML = "White Pawn"
          } if (cname === "WKN") {
          document.getElementById(val3).innerHTML = "White Knight"
          } if (cname === "WBI") {
            document.getElementById(val3).innerHTML = "White Bishop"
          } if (cname === "WQU") {
            document.getElementById(val3).innerHTML = "White Queen"
          } if (cname === "WKI") {
            document.getElementById(val3).innerHTML = "White King"
          } if (cname === "BRO") {
          document.getElementById(val3).innerHTML = "Black Rook"
          } if (cname === "BPA") {
          document.getElementById(val3).innerHTML = "Black Pawn"
          } if (cname === "BKN") {
          document.getElementById(val3).innerHTML = "Black Knight"
          } if (cname === "BBI") {
            document.getElementById(val3).innerHTML = "Black Bishop"
          } if (cname === "BQU") {
            document.getElementById(val3).innerHTML = "Black Queen"
          } if (cname === "BKI") {
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
