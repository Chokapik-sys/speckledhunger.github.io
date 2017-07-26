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
var N_whitecheck = 0
var E_whitecheck = 0
var S_whitecheck = 0
var W_whitecheck = 0
var NE_whitecheck = 0
var SE_whitecheck = 0
var SW_whitecheck  = 0
var NW_whitecheck = 0
var newevent = 0
function phase_2() {
  if (phase === 2) {
    //Blank Square
    if (piece === "") {
      newevent = 1
    }
    //White Pieces
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      NW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 9) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 7) % 8 != "0"){
      NE_blackcheck = 1
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
      W_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      E_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
      N_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
      S_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Bishop") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      NW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      SE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      NE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      SW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Queen") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      W_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      E_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
      N_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
      S_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      NW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      SE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      NE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      SW_blackcheck = 1
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
      SE_whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").innerHTML[0] === "W" && (parseInt(square.replace("_", "")) - 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 7) + "_").innerHTML === "White King" && (parseInt(square.replace("_", "")) - 7) % 8 != "1"){
      SW_whitecheck = 1
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
    if (piece === "White Rook") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      W_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      E_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
      N_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
      S_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Bishop") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      NW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      SE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      NE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      SW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Queen") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      W_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      E_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mr2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML === "Black King"){
      N_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML === "Black King"){
      S_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      NW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb1) % 8 != "1"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      SE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb2) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      NE_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb3) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
      SW_blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + mb4) % 8 != "1"){
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
} if (event = 1 && capture === 0 && pawnmove === 0 && knightmove === 0 && bishopmove === 0 && rookmove === 0 && queenmove === 0 && kingmove === 0) {
    resetTurn()
  }
    pawnmove = 0
    rookmove = 0
    knightmove = 0
    bishopmove = 0
    queenmove = 0
    newevent = 0
    capture = 0
}
}
