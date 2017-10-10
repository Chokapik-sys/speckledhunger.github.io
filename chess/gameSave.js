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
var cnumset = "001"
var cnumget = "001"
var cnumfetch = ""
var curfile = ""
var expire = new Date()
var changevar = 0
var readc = ""
var cname = ""
var cacr = ""
var val3 = 0
var val4 = 0
var checksave = 0
function save() {
  clearsave()
  expire = new Date()
  expire.setUTCFullYear(expire.getUTCFullYear() + 1)
  for (cw = 1; cw < 65; cw++) {
    //White Piece Cookies
    if (document.getElementById("_" + cw + "_").innerHTML === "White Pawn") {
      if (WPAcur === 0) {
        document.cookie = (cnumset + "WPA1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 1) {
        document.cookie = (cnumset + "WPA2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 2) {
        document.cookie = (cnumset + "WPA3=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 3) {
        document.cookie = (cnumset + "WPA4=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 4) {
        document.cookie = (cnumset + "WPA5=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 5) {
        document.cookie = (cnumset + "WPA6=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 6) {
        document.cookie = (cnumset + "WPA7=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WPAcur === 7) {
        document.cookie = (cnumset + "WPA8=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Rook") {
      if (WROcur === 0) {
        document.cookie = (cnumset + "WRO1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (WROcur === 1) {
        document.cookie = (cnumset + "WRO2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WROcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Knight") {
      if (WKNcur === 0) {
        document.cookie = (cnumset + "WKN1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WKNcur === 1) {
        document.cookie = (cnumset + "WKN2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Bishop") {
      if (WBIcur === 0) {
        document.cookie = (cnumset + "WBI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WBIcur === 1) {
        document.cookie = (cnumset + "WBI2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White Queen") {
      if (WQUcur === 0) {
        document.cookie = (cnumset + "WQU1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (WQUcur === 1) {
        document.cookie = (cnumset + "WQU2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "White King") {
      if (WKIcur === 0) {
        document.cookie = (cnumset + "WKI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        WKIcur ++
        changevar = 0
      }
    }  //Black Piece Cookies
    if (document.getElementById("_" + cw + "_").innerHTML === "Black Pawn") {
      if (BPAcur === 0) {
        document.cookie = (cnumset + "BPA1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 1) {
        document.cookie = (cnumset + "BPA2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 2) {
        document.cookie = (cnumset + "BPA3=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 3) {
        document.cookie = (cnumset + "BPA4=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 4) {
        document.cookie = (cnumset + "BPA5=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 5) {
        document.cookie = (cnumset + "BPA6=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 6) {
        document.cookie = (cnumset + "BPA7=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BPAcur === 7) {
        document.cookie = (cnumset + "BPA8=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BPAcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Rook") {
      if (BROcur === 0) {
        document.cookie = (cnumset + "BRO1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (BROcur === 1) {
        document.cookie = (cnumset + "BRO2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BROcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Knight") {
      if (BKNcur === 0) {
        document.cookie = (cnumset + "BKN1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BKNcur === 1) {
        document.cookie = (cnumset + "BKN2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BKNcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Bishop") {
      if (BBIcur === 0) {
        document.cookie = (cnumset + "BBI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BBIcur === 1) {
        document.cookie = (cnumset + "BBI2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BBIcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black Queen") {
      if (BQUcur === 0) {
        document.cookie = (cnumset + "BQU1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } else if (BQUcur === 1) {
        document.cookie = (cnumset + "BQU2=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BQUcur ++
        changevar = 0
      }
    } if (document.getElementById("_" + cw + "_").innerHTML === "Black King") {
      if (BKIcur === 0) {
        document.cookie = (cnumset + "BKI1=" + "_" + cw + "_; expires=" + expire)
        changevar = 1
      } if (changevar === 1) {
        BKIcur ++
        changevar = 0
      }
    }
  }
  if (document.getElementById("report").innerHTML !== "<b>Attack Log</b>") {
    document.cookie = (cnumset + "log=" + document.getElementById("report").innerHTML + "; expires=" + expire)
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
    for (cl = 0; cl < readc.length; cl++) {
      cname = ""
      for (cn = 0; cn < readc[cl].indexOf("="); cn++) {
           cname += readc[cl][cn]
    } cacr = cname[3] + cname[4] + cname[5]
      cnumfetch = cname[0] + cname[1] + cname[2]
      if (cnumget === cnumfetch) {
        checksave = 1
      }
    }
  }
  if (checksave === 1) {
    clearboard()
    for (cl = 0; cl < readc.length; cl++) {
      cname = ""
      for (cn = 0; cn < readc[cl].indexOf("="); cn++) {
           cname += readc[cl][cn]
    } cacr = cname[3] + cname[4] + cname[5]
      cnumfetch = cname[0] + cname[1] + cname[2]
      readc[cl] = readc[cl].replace(cname + "=", "")
      val3 = readc[cl][0] + readc[cl][1] + readc[cl][2]
      val4 = readc[cl][0] + readc[cl][1] + readc[cl][2] + readc[cl][3]
      if (cnumget == cnumfetch) {
        if (cacr === "log") {
          document.getElementById("report").innerHTML = readc[cl]
        }
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
    checksave = 0
}
function clearsave() {
  //Clear All cookies in a file
  readc = document.cookie.split("; ")
  if (readc.toString() !== "") {
    for (cl = 0; cl < readc.length; cl++) {
      cname = ""
      for (cn = 0; cn < readc[cl].indexOf("="); cn++) {
           cname += readc[cl][cn]
    } cnumfetch = cname[0] + cname[1] + cname[2]
      if (cnumset === cnumfetch) {
      document.cookie = cname + ";expires=Thu, 01 Jan 1970 00:00:00 UTC"
      }
    }
  }
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
function enablebeta() {
  expire = new Date()
  expire.setUTCFullYear(expire.getUTCFullYear() + 1)
  document.cookie = ("beta=true; expires=" + expire)
  checkbeta()
}
function checkbeta() {
  readc = document.cookie.split("; ")
  if (readc.toString() !== "") {
    for (cl = 0; cl < readc.length; cl++) {
      cname = ""
      for (cn = 0; cn < readc[cl].indexOf("="); cn++) {
           cname += readc[cl][cn]
    } readc[cl] = readc[cl].replace(cname + "=", "")
      if (cname === "beta" && readc[cl] === "true") {
        console.log("Beta active")
      }
    }
  }
}
function default_layout() {
  cnumget = "000"
  load()
  cnumget = "001"
  checkbeta()
}
function customsave() {
  expire = new Date()
  expire.setUTCFullYear(expire.getUTCFullYear + 1)
  document.cookie = (cnumset + document.getElementById("colour").value + document.getElementById("piece").value + document.getElementById("num").value + "=" + document.getElementById("coord").value + "; expires=" + expire)
}
function customdelete() {
  document.cookie = (cnumset + document.getElementById("colour").value + document.getElementById("piece").value + document.getElementById("num").value + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC")
}
function savefilesave() {
  curfile = document.getElementById("savefile").value
  if (curfile.length === 1) {
    cnumset = "00" + curfile
  } if (curfile.length === 2) {
    cnumset = "0" + curfile
  } if (curfile.length === 3) {
    cnumset = curfile
  } save()
}
function savefileload() {
  curfile = document.getElementById("savefile").value
  if (curfile.length === 1) {
    cnumget = "00" + curfile
  } if (curfile.length === 2) {
    cnumget = "0" + curfile
  } if (curfile.length === 3) {
    cnumget = curfile
  } load()
}
function savefiledelete() {
  curfile = document.getElementById("savefile").value
  if (curfile.length === 1) {
    cnumset = "00" + curfile
  } if (curfile.length === 2) {
    cnumset = "0" + curfile
  } if (curfile.length === 3) {
    cnumset = curfile
  } clearsave()
}
function selectfile() {
  curfile = document.getElementById("savefile").value
  if (curfile.length === 1) {
    cnumset = "00" + curfile
    cnumget = "00" + curfile
  } if (curfile.length === 2) {
    cnumset = "0" + curfile
    cnumget = "0" + curfile
  } if (curfile.length === 3) {
    cnumset = curfile
    cnumget = curfile
  }
}
