var capture = 0
var blackcheck = 0
var N_blackcheck = 0
var E_blackcheck = 0
var S_blackcheck = 0
var W_blackcheck = 0
var NE_blackcheck = 0
var SE_blackcheck = 0
var SW_blackcheck  = 0
var NW_blackcheck = 0
var KN_N_blackcheck = 0
var KN_E_blackcheck = 0
var KN_S_blackcheck = 0
var KN_W_blackcheck = 0
var KN_NE_blackcheck = 0
var KN_SE_blackcheck = 0
var KN_SW_blackcheck  = 0
var KN_NW_blackcheck = 0
var EX_N_blackcheck = 0
var EX_E_blackcheck = 0
var EX_S_blackcheck = 0
var EX_W_blackcheck = 0
var EX_NE_blackcheck = 0
var EX_SE_blackcheck = 0
var EX_SW_blackcheck  = 0
var EX_NW_blackcheck = 0
var whitecheck = 0
var N_whitecheck = 0
var E_whitecheck = 0
var S_whitecheck = 0
var W_whitecheck = 0
var NE_whitecheck = 0
var SE_whitecheck = 0
var SW_whitecheck  = 0
var NW_whitecheck = 0
var KN_N_whitecheck = 0
var KN_E_whitecheck = 0
var KN_S_whitecheck = 0
var KN_W_whitecheck = 0
var KN_NE_whitecheck = 0
var KN_SE_whitecheck = 0
var KN_SW_whitecheck  = 0
var KN_NW_whitecheck = 0
var EX_N_whitecheck = 0
var EX_E_whitecheck = 0
var EX_S_whitecheck = 0
var EX_W_whitecheck = 0
var EX_NE_whitecheck = 0
var EX_SE_whitecheck = 0
var EX_SW_whitecheck  = 0
var EX_NW_whitecheck = 0
var newevent = 0
var wk = 1
var bk = 1
function phase_2() {
  if (phase === 2) {
    //Blank Square
    if (piece === "") {
      newevent = 1
    }
    //White Pieces
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "White Knight") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 10) % 8 != "7" && (parseInt(square.replace("_", "")) - 10) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 10) % 8 != "7" && (parseInt(square.replace("_", "")) - 10) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 10) % 8 != "1" && (parseInt(square.replace("_", "")) + 10) % 8 != "2") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 10) % 8 != "1" && (parseInt(square.replace("_", "")) + 10) % 8 != "2") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 6) % 8 != "1" && (parseInt(square.replace("_", "")) - 6) % 8 != "2") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 6) % 8 != "1" && (parseInt(square.replace("_", "")) - 6) % 8 != "2") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 6) % 8 != "7" && (parseInt(square.replace("_", "")) + 6) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 6) % 8 != "7" && (parseInt(square.replace("_", "")) + 6) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 17) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 17) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 17) % 8 != "1") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 17) % 8 != "1") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 15) % 8 != "1") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 15) % 8 != "1") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 15) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 15) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "White Rook") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Bishop") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Queen") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White King") {
      if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").innerHTML === "Black King"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").innerHTML === "Black King"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 1) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) - 1) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) - 1) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
//Black Pieces
    if (piece === "Black Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "Black Knight") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 10) % 8 != "7" && (parseInt(square.replace("_", "")) - 10) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 10) % 8 != "7" && (parseInt(square.replace("_", "")) - 10) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 10) % 8 != "1" && (parseInt(square.replace("_", "")) + 10) % 8 != "2") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 10) % 8 != "1" && (parseInt(square.replace("_", "")) + 10) % 8 != "2") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 6) % 8 != "1" && (parseInt(square.replace("_", "")) - 6) % 8 != "2") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 6) % 8 != "1" && (parseInt(square.replace("_", "")) - 6) % 8 != "2") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 6) % 8 != "7" && (parseInt(square.replace("_", "")) + 6) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 6) % 8 != "7" && (parseInt(square.replace("_", "")) + 6) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 17) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 17) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 17) % 8 != "1") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 17) % 8 != "1") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 15) % 8 != "1") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 15) % 8 != "1") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 15) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 15) % 8 != "0") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "Black Rook") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Bishop") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Queen") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black King") {
      if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").innerHTML === "White King"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").innerHTML === "White King"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) + 1) % 8 != "1"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) + 1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 1) % 8 != "0"){
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 1) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
if (capture === 1 || pawnmove === 1 || knightmove === 1 || bishopmove === 1 || rookmove === 1 || queenmove === 1 || kingmove === 1) {
      phase = 3
      prev_square = square
      move_piece()
} if (newevent = 1 && capture === 0 && pawnmove === 0 && knightmove === 0 && bishopmove === 0 && rookmove === 0 && queenmove === 0 && kingmove === 0) {
    resetTurn()
  }
    pawnmove = 0
    rookmove = 0
    knightmove = 0
    bishopmove = 0
    queenmove = 0
    kingmove = 0
    newevent = 0
    capture = 0
}
}
function king() {
  for (wk = 0; wk < 65; wk ++) {
    if (document.getElementById("_" + wk + "_").innerHTML === "White King") {
      break
    }
  }
  if (document.getElementById("_" + wk + "_").innerHTML === "White King") {
    //Immediate Threat
    for (mr1 = 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if ((document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen") && (wk + mr1 + 1) % 8 != "1") {
        E_whitecheck = 1
      } else {
        E_whitecheck = 0
      }} for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      W_whitecheck = 1
      } else {
        W_whitecheck = 0
      }} for (mr3 = 8; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      S_whitecheck = 1
      } else {
        S_whitecheck = 0
      }} for (mr4 = -8; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      N_whitecheck = 1
      } else {
        N_whitecheck = 0
      }} for (mb1 = 9; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SE_whitecheck = 1
      } else {
        SE_whitecheck = 0
      }} for (mb2 = -9; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NW_whitecheck = 1
      } else {
        NW_whitecheck = 0
      }} for (mb3 = 7; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SW_whitecheck = 1
      } else {
        SW_whitecheck = 0
      }} for (mb4 = -7; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NE_whitecheck = 1
      } else {
        NE_whitecheck = 0
      }}
    //Future Threat
    if ((document.getElementById("_" + (wk - 26) + "_").innerHTML === "Black Knight" && (wk - 26) % 8 != "7" && (wk - 26) % 8 != "0") || (document.getElementById("_" + (wk - 19) + "_").innerHTML === "Black Knight" && (wk - 19) % 8 != "7" && (wk - 19) % 8 != "0") || (document.getElementById("_" + (wk - 15) + "_").innerHTML === "Black Knight" && (wk - 15) % 8 != "1") || (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight" && (wk - 3) % 8 != "0" && (wk - 3) % 8 != "7" && (wk - 3) % 8 != "6") || (document.getElementById("_" + (wk + 6) + "_").innerHTML === "Black Knight" && (wk + 6) % 8 != "0" && (wk + 6) % 8 != "7") || (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight")) {
      KN_NW_whitecheck = 1
    } else {
      KN_NW_whitecheck = 0
    } if ((document.getElementById("_" + (wk - 25) + "_").innerHTML === "Black Knight" && (wk - 25) % 8 != "0") || (document.getElementById("_" + (wk - 23) + "_").innerHTML === "Black Knight" && (wk - 23) % 8 != "1") || (document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "0" && (wk - 18) % 8 != "7") || (document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "0" && (wk - 2) % 8 != "7") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2")) {
      KN_N_whitecheck = 1
    } else {
      KN_N_whitecheck = 0
    } if ((document.getElementById("_" + (wk - 22) + "_").innerHTML === "Black Knight" && (wk - 22) % 8 != "1" && (wk - 22) % 8 != "2") || (document.getElementById("_" + (wk - 13) + "_").innerHTML === "Black Knight" && (wk - 13) % 8 != "1" && (wk - 13) % 8 != "2" && (wk - 13) % 8 != "3") || (document.getElementById("_" + (wk - 17) + "_").innerHTML === "Black Knight" && (wk - 17) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk + 10) + "_").innerHTML === "Black Knight" && (wk + 10) % 8 != "1" && (wk + 10) % 8 != "2") || (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight")) {
      KN_NE_whitecheck = 1
    } else {
      KN_NE_whitecheck = 0
    } if ((document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "7" && (wk - 18) % 8 != "0") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 11) + "_").innerHTML === "Black Knight" && (wk - 11) % 8 != "6" && (wk - 11) % 8 != "7" && (wk - 11) % 8 != "0") || (document.getElementById("_" + (wk + 5) + "_").innerHTML === "Black Knight" && (wk + 5) % 8 != "6" && (wk + 5) % 8 != "7" && (wk + 5) % 8 != "0") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) {
      KN_W_whitecheck = 1
    } else {
      KN_W_whitecheck = 0
    } if ((document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 5) + "_").innerHTML === "Black Knight" && (wk - 5) % 8 != "1" && (wk - 5) % 8 != "2" && (wk - 5) % 8 != "3") || (document.getElementById("_" + (wk + 11) + "_").innerHTML === "Black Knight" && (wk + 11) % 8 != "1" && (wk + 11) % 8 != "2" && (wk + 11) % 8 != "3") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) {
      KN_E_whitecheck = 1
    } else {
      KN_E_whitecheck = 0
    } if ((document.getElementById("_" + (wk + 22) + "_").innerHTML === "Black Knight" && (wk + 22) % 8 != "7" && (wk - 22) % 8 != "0") || (document.getElementById("_" + (wk + 13) + "_").innerHTML === "Black Knight" && (wk + 13) % 8 != "6" && (wk + 13) % 8 != "7" && (wk + 13) % 8 != "0") || (document.getElementById("_" + (wk + 17) + "_").innerHTML === "Black Knight" && (wk + 17) % 8 != "1") || (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight" && (wk - 3) % 8 != "6" && (wk - 3) % 8 != "7" && (wk - 3) % 8 != "0") || (document.getElementById("_" + (wk - 10) + "_").innerHTML === "Black Knight" && (wk - 10) % 8 != "7" && (wk - 10) % 8 != "0") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) {
      KN_SW_whitecheck = 1
    } else {
      KN_SW_whitecheck = 0
    } if ((document.getElementById("_" + (wk + 25) + "_").innerHTML === "Black Knight" && (wk + 25) % 8 != "1") || (document.getElementById("_" + (wk + 23) + "_").innerHTML === "Black Knight" && (wk + 23) % 8 != "0") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "7" && (wk - 2) % 8 != "0")) {
      KN_S_whitecheck = 1
    } else {
      KN_S_whitecheck = 0
    } if ((document.getElementById("_" + (wk + 26) + "_").innerHTML === "Black Knight" && (wk + 26) % 8 != "1" && (wk + 26) % 8 != "2") || (document.getElementById("_" + (wk + 19) + "_").innerHTML === "Black Knight" && (wk + 19) % 8 != "1" && (wk + 19) % 8 != "2") || (document.getElementById("_" + (wk + 15) + "_").innerHTML === "Black Knight" && (wk + 15) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk - 6) + "_").innerHTML === "Black Knight" && (wk - 6) % 8 != "1" && (wk - 6) % 8 != "2") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) {
      KN_SE_whitecheck = 1
    } else {
      KN_SE_whitecheck = 0
    }
    for (mr1=-9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == "" && (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr1 += 1, mr2 += -1) {
      if ((document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") || (document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen" && (wk + mr2 - 1) % 8 != "0")) {
        EX_NW_whitecheck = 1 
      } else {
        EX_NW_whitecheck = 0
      }} 
    //Edit below
    for (mr2=-9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == "" && (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr1 += 1, mr2 += -1) {
      if ((document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") || (document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen" && (wk + mr2 - 1) % 8 != "0")) {
        EX_NW_whitecheck = 1 
      } else {
        EX_NW_whitecheck = 0
      }}
  } if (document.getElementById(square).innerHTML === "Black King") {
    console.log("BLACK KING")
  } 
}
