var piececolour = "White"
var colourchange = 0
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
var whitecheck = 0
var N_whitecheck = 0
var E_whitecheck = 0
var S_whitecheck = 0
var W_whitecheck = 0
var NE_whitecheck = 0
var SE_whitecheck = 0
var SW_whitecheck  = 0
var NW_whitecheck = 0
var newevent = 0
var wk = 1
var bk = 1
var autopromote = 0
var autocastle = 0
var blackcastle = ""
var whitecastle = ""
function phase_2() {
  if (phase === 2) {
    //Blank Square
    if (piece === "") {
      newevent = 1
    }
    //White Pieces
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (square + 9) + "_").innerHTML === "Black King" && (square + 9) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 9) + "_").innerHTML[0] === "B" && (square + 9) % 8 != "1"){
      document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "Black King" && (square + 7) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 7) + "_").innerHTML[0] === "B" && (square + 7) % 8 != "0"){
      document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "White Knight") {
    if (document.getElementById("_" + (square - 10) + "_").innerHTML === "Black King" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 10) + "_").innerHTML[0] === "B" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "Black King" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 10) + "_").innerHTML[0] === "B" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "Black King" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 6) + "_").innerHTML[0] === "B" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "Black King" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 6) + "_").innerHTML[0] === "B" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "Black King" && (square - 17) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 17) + "_").innerHTML[0] === "B" && (square - 17) % 8 != "0") {
      document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "Black King" && (square + 17) % 8 != "1") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 17) + "_").innerHTML[0] === "B" && (square + 17) % 8 != "1") {
      document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "Black King" && (square - 15) % 8 != "1") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 15) + "_").innerHTML[0] === "B" && (square - 15) % 8 != "1") {
      document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "Black King" && (square + 15) % 8 != "0") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 15) + "_").innerHTML[0] === "B" && (square + 15) % 8 != "0") {
      document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "White Rook") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "Black King" && (square + mr1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "B" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "Black King" && (square + mr2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "B" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "Black King"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "Black King"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Bishop") {
    if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "Black King" && (square + mb1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "B" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "Black King" && (square + mb2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "B" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "Black King" && (square + mb3) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "B" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "Black King" && (square + mb4) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "B" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Queen") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "Black King" && (square + mr1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "B" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "Black King" && (square + mr2) % 8 != "0"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "B" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "Black King"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "Black King"){
     blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "Black King" && (square + mb1) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "B" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "Black King" && (square + mb2) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "B" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "Black King" && (square + mb3) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "B" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "Black King" && (square + mb4) % 8 != "1"){
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "B" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White King") {
      if (document.getElementById("_" + (square + 8) + "_").innerHTML === "Black King"){
    } else if (document.getElementById("_" + (square + 8) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 8) + "_").innerHTML === "Black King"){
    } else if (document.getElementById("_" + (square - 8) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square - 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 9) + "_").innerHTML === "Black King" && (square + 9) % 8 != "1"){
    } else if (document.getElementById("_" + (square + 9) + "_").innerHTML[0] === "B" && (square + 9) % 8 != "1"){
      document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 9) + "_").innerHTML === "Black King" && (square - 9) % 8 != "0"){
    } else if (document.getElementById("_" + (square - 9) + "_").innerHTML[0] === "B" && (square - 9) % 8 != "0"){
      document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "Black King" && (square + 7) % 8 != "0"){
    } else if (document.getElementById("_" + (square + 7) + "_").innerHTML[0] === "B" && (square + 7) % 8 != "0"){
      document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "Black King" && (square - 7) % 8 != "1"){
    } else if (document.getElementById("_" + (square - 7) + "_").innerHTML[0] === "B" && (square - 7) % 8 != "1"){
      document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 1) + "_").innerHTML === "Black King" && (square + 1) % 8 != "1"){
    } else if (document.getElementById("_" + (square + 1) + "_").innerHTML[0] === "B" && (square + 1) % 8 != "1"){
      document.getElementById("_" + (square + 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 1) + "_").innerHTML === "Black King" && (square - 1) % 8 != "0"){
    } else if (document.getElementById("_" + (square - 1) + "_").innerHTML[0] === "B" && (square - 1) % 8 != "0"){
      document.getElementById("_" + (square - 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
//Black Pieces
    if (piece === "Black Pawn") {
    if  (document.getElementById("_" + (square - 9) + "_").innerHTML === "White King" && (square - 9) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 9) + "_").innerHTML[0] === "W" && (square - 9) % 8 != "0"){
      document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "White King" && (square - 7) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 7) + "_").innerHTML[0] === "W" && (square - 7) % 8 != "1"){
      document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "Black Knight") {
    if (document.getElementById("_" + (square - 10) + "_").innerHTML === "White King" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 10) + "_").innerHTML[0] === "W" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "White King" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 10) + "_").innerHTML[0] === "W" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "White King" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 6) + "_").innerHTML[0] === "W" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "White King" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 6) + "_").innerHTML[0] === "W" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "White King" && (square - 17) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 17) + "_").innerHTML[0] === "W" && (square - 17) % 8 != "0") {
      document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "White King" && (square + 17) % 8 != "1") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 17) + "_").innerHTML[0] === "W" && (square + 17) % 8 != "1") {
      document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "White King" && (square - 15) % 8 != "1") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 15) + "_").innerHTML[0] === "W" && (square - 15) % 8 != "1") {
      document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "White King" && (square + 15) % 8 != "0") {
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 15) + "_").innerHTML[0] === "W" && (square + 15) % 8 != "0") {
      document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "Black Rook") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "White King" && (square + mr1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "W" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "White King" && (square + mr2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "W" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Bishop") {
    if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "White King" && (square + mb1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "W" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "White King" && (square + mb2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "W" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "White King" && (square + mb3) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "W" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "White King" && (square + mb4) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "W" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Queen") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "White King" && (square + mr1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "W" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "White King" && (square + mr2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "W" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "White King"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "White King" && (square + mb1) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "W" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "White King" && (square + mb2) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "W" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "White King" && (square + mb3) % 8 != "0"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "W" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "White King" && (square + mb4) % 8 != "1"){
      whitecheck = 1
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "W" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black King") {
      if (document.getElementById("_" + (square + 8) + "_").innerHTML === "White King"){
    } else if (document.getElementById("_" + (square + 8) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 8) + "_").innerHTML === "White King"){
    } else if (document.getElementById("_" + (square - 8) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square - 8) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 9) + "_").innerHTML === "White King" && (square + 9) % 8 != "1"){
    } else if (document.getElementById("_" + (square + 9) + "_").innerHTML[0] === "W" && (square + 9) % 8 != "1"){
      document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 9) + "_").innerHTML === "White King" && (square - 9) % 8 != "0"){
    } else if (document.getElementById("_" + (square - 9) + "_").innerHTML[0] === "W" && (square - 9) % 8 != "0"){
      document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "White King" && (square + 7) % 8 != "0"){
    } else if (document.getElementById("_" + (square + 7) + "_").innerHTML[0] === "W" && (square + 7) % 8 != "0"){
      document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "White King" && (square - 7) % 8 != "1"){
    } else if (document.getElementById("_" + (square - 7) + "_").innerHTML[0] === "W" && (square - 7) % 8 != "1"){
      document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 1) + "_").innerHTML === "White King" && (square + 1) % 8 != "1"){
    } else if (document.getElementById("_" + (square + 1) + "_").innerHTML[0] === "W" && (square + 1) % 8 != "1"){
      document.getElementById("_" + (square + 1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 1) + "_").innerHTML === "White King" && (square - 1) % 8 != "0"){
    } else if (document.getElementById("_" + (square - 1) + "_").innerHTML[0] === "W" && (square - 1) % 8 != "0"){
      document.getElementById("_" + (square - 1) + "_").style.backgroundColor = "#FF8466"
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
  //White Check
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
      NW_whitecheck = 1
    }  if ((document.getElementById("_" + (wk - 25) + "_").innerHTML === "Black Knight" && (wk - 25) % 8 != "0") || (document.getElementById("_" + (wk - 23) + "_").innerHTML === "Black Knight" && (wk - 23) % 8 != "1") || (document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "0" && (wk - 18) % 8 != "7") || (document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "0" && (wk - 2) % 8 != "7") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2")) {
      N_whitecheck = 1
    } if ((document.getElementById("_" + (wk - 22) + "_").innerHTML === "Black Knight" && (wk - 22) % 8 != "1" && (wk - 22) % 8 != "2") || (document.getElementById("_" + (wk - 13) + "_").innerHTML === "Black Knight" && (wk - 13) % 8 != "1" && (wk - 13) % 8 != "2" && (wk - 13) % 8 != "3") || (document.getElementById("_" + (wk - 17) + "_").innerHTML === "Black Knight" && (wk - 17) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk + 10) + "_").innerHTML === "Black Knight" && (wk + 10) % 8 != "1" && (wk + 10) % 8 != "2") || (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight")) {
      NE_whitecheck = 1
    }  if ((document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "7" && (wk - 18) % 8 != "0") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 11) + "_").innerHTML === "Black Knight" && (wk - 11) % 8 != "6" && (wk - 11) % 8 != "7" && (wk - 11) % 8 != "0") || (document.getElementById("_" + (wk + 5) + "_").innerHTML === "Black Knight" && (wk + 5) % 8 != "6" && (wk + 5) % 8 != "7" && (wk + 5) % 8 != "0") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) {
      W_whitecheck = 1
    } if ((document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 5) + "_").innerHTML === "Black Knight" && (wk - 5) % 8 != "1" && (wk - 5) % 8 != "2" && (wk - 5) % 8 != "3") || (document.getElementById("_" + (wk + 11) + "_").innerHTML === "Black Knight" && (wk + 11) % 8 != "1" && (wk + 11) % 8 != "2" && (wk + 11) % 8 != "3") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) {
      E_whitecheck = 1
    } if ((document.getElementById("_" + (wk + 22) + "_").innerHTML === "Black Knight" && (wk + 22) % 8 != "7" && (wk - 22) % 8 != "0") || (document.getElementById("_" + (wk + 13) + "_").innerHTML === "Black Knight" && (wk + 13) % 8 != "6" && (wk + 13) % 8 != "7" && (wk + 13) % 8 != "0") || (document.getElementById("_" + (wk + 17) + "_").innerHTML === "Black Knight" && (wk + 17) % 8 != "1") || (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight" && (wk - 3) % 8 != "6" && (wk - 3) % 8 != "7" && (wk - 3) % 8 != "0") || (document.getElementById("_" + (wk - 10) + "_").innerHTML === "Black Knight" && (wk - 10) % 8 != "7" && (wk - 10) % 8 != "0") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) {
      SW_whitecheck = 1
    }  if ((document.getElementById("_" + (wk + 25) + "_").innerHTML === "Black Knight" && (wk + 25) % 8 != "1") || (document.getElementById("_" + (wk + 23) + "_").innerHTML === "Black Knight" && (wk + 23) % 8 != "0") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "7" && (wk - 2) % 8 != "0")) {
      S_whitecheck = 1
    } if ((document.getElementById("_" + (wk + 26) + "_").innerHTML === "Black Knight" && (wk + 26) % 8 != "1" && (wk + 26) % 8 != "2") || (document.getElementById("_" + (wk + 19) + "_").innerHTML === "Black Knight" && (wk + 19) % 8 != "1" && (wk + 19) % 8 != "2") || (document.getElementById("_" + (wk + 15) + "_").innerHTML === "Black Knight" && (wk + 15) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk - 6) + "_").innerHTML === "Black Knight" && (wk - 6) % 8 != "1" && (wk - 6) % 8 != "2") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) {
      SE_whitecheck = 1
    } 
    for (mr1= -9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        NW_whitecheck = 1 
      }} for (mr2 = -9; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      NW_whitecheck = 1
      }} for (mr3 = -9; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      NW_whitecheck = 1
      }} for (mr4 = -9; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      NW_whitecheck = 1
      }} for (mb2 = -9; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NW_whitecheck = 1
      }} for (mb3 = -9; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      NW_whitecheck = 1
      }} for (mb4 = -9; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NW_whitecheck = 1
      }} 
    for (mr1= -8; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        N_whitecheck = 1 
      }} for (mr2 = -8; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      N_whitecheck = 1
      }} for (mb1 = -8; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      N_whitecheck = 1
      }} for (mb2 = -8; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      N_whitecheck = 1
      }} for (mb3 = -8; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      N_whitecheck = 1
      }} for (mb4 = -8; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      N_whitecheck = 1
      }}
    for (mr1= -7; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        NE_whitecheck = 1 
      }} for (mr2 = -7; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      NE_whitecheck = 1
      }} for (mr3 = -7; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      NE_whitecheck = 1
      }} for (mr4 = -7; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      NE_whitecheck = 1
      }} for (mb1 = -7; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      NE_whitecheck = 1
      }} for (mb2 = -7; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NE_whitecheck = 1
      }} for (mb4 = -7; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NE_whitecheck = 1
      }} 
    for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      W_whitecheck = 1
      }} for (mr3 = -1; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      W_whitecheck = 1
      }} for (mr4 = -1; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      W_whitecheck = 1
      }} for (mb1 = -1; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      W_whitecheck = 1
      }} for (mb2 = -1; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      W_whitecheck = 1
      }} for (mb3 = -1; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      W_whitecheck = 1
      }} for (mb4 = -1; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      W_whitecheck = 1
      }}
    for (mr1= 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        E_whitecheck = 1 
      }} for (mr3 = 1; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      E_whitecheck = 1
      }} for (mr4 = 1; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      E_whitecheck = 1
      }} for (mb1 = 1; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      E_whitecheck = 1
      }} for (mb2 = 1; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      E_whitecheck = 1
      }} for (mb3 = 1; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      E_whitecheck = 1
      }} for (mb4 = 1; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      E_whitecheck = 1
      }}
    for (mr1= 7; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        SW_whitecheck = 1 
      }} for (mr2 = 7; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      SW_whitecheck = 1
      }} for (mr3 = 7; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      SW_whitecheck = 1
      }} for (mr4 = 7; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      SW_whitecheck = 1
      }} for (mb1 = 7; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SW_whitecheck = 1
      }} for (mb2 = 7; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      SW_whitecheck = 1
      }} for (mb3 = 7; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SW_whitecheck = 1
      }}
    for (mr1= 8; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        S_whitecheck = 1 
      }} for (mr2 = 8; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      S_whitecheck = 1
      }} for (mr3 = 8; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      S_whitecheck = 1
      }} for (mb1 = 8; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      S_whitecheck = 1
      }} for (mb2 = 8; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      S_whitecheck = 1
      }} for (mb3 = 8; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      S_whitecheck = 1
      }} for (mb4 = 8; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      S_whitecheck = 1
      }}
    for (mr1= 9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        SE_whitecheck = 1 
      }} for (mr2 = 9; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      SE_whitecheck = 1
      }} for (mr3 = 9; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      SE_whitecheck = 1
      }} for (mr4 = 9; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      SE_whitecheck = 1
      }} for (mb1 = 9; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SE_whitecheck = 1
      }} for (mb3 = 9; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SE_whitecheck = 1
      }} for (mb4 = 9; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      SE_whitecheck = 1
      }}
  } for (bk = 0; bk < 65; bk ++) {
    if (document.getElementById("_" + bk + "_").innerHTML === "Black King") {
      break
    }
  } //Black Check
  if (document.getElementById("_" + bk + "_").innerHTML === "Black King") {
    //Immediate Threat
    for (mr1 = 1; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if ((document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen") && (bk + mr1 + 1) % 8 != "1") {
        E_blackcheck = 1
      } else {
        E_blackcheck = 0
      }} for (mr2 = -1; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      W_blackcheck = 1
      } else {
        W_blackcheck = 0
      }} for (mr3 = 8; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      S_blackcheck = 1
      } else {
        S_blackcheck = 0
      }} for (mr4 = -8; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      N_blackcheck = 1
      } else {
        N_blackcheck = 0
      }} for (mb1 = 9; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SE_blackcheck = 1
      } else {
        SE_blackcheck = 0
      }} for (mb2 = -9; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NW_blackcheck = 1
      } else {
        NW_blackcheck = 0
      }} for (mb3 = 7; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SW_blackcheck = 1
      } else {
        SW_blackcheck = 0
      }} for (mb4 = -7; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NE_blackcheck = 1
      } else {
        NE_blackcheck = 0
      }}
    //Future Threat
    if ((document.getElementById("_" + (bk - 26) + "_").innerHTML === "White Knight" && (bk - 26) % 8 != "7" && (bk - 26) % 8 != "0") || (document.getElementById("_" + (bk - 19) + "_").innerHTML === "White Knight" && (bk - 19) % 8 != "7" && (bk - 19) % 8 != "0") || (document.getElementById("_" + (bk - 15) + "_").innerHTML === "White Knight" && (bk - 15) % 8 != "1") || (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight" && (bk - 3) % 8 != "0" && (bk - 3) % 8 != "7" && (bk - 3) % 8 != "6") || (document.getElementById("_" + (bk + 6) + "_").innerHTML === "White Knight" && (bk + 6) % 8 != "0" && (bk + 6) % 8 != "7") || (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight")) {
      NW_blackcheck = 1
    }  if ((document.getElementById("_" + (bk - 25) + "_").innerHTML === "White Knight" && (bk - 25) % 8 != "0") || (document.getElementById("_" + (bk - 23) + "_").innerHTML === "White Knight" && (bk - 23) % 8 != "1") || (document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight" && (bk - 18) % 8 != "0" && (bk - 18) % 8 != "7") || (document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight" && (bk - 14) % 8 != "1" && (bk - 14) % 8 != "2") || (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight" && (bk - 2) % 8 != "0" && (bk - 2) % 8 != "7") || (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight" && (bk + 2) % 8 != "1" && (bk + 2) % 8 != "2")) {
      N_blackcheck = 1
    } if ((document.getElementById("_" + (bk - 22) + "_").innerHTML === "White Knight" && (bk - 22) % 8 != "1" && (bk - 22) % 8 != "2") || (document.getElementById("_" + (bk - 13) + "_").innerHTML === "White Knight" && (bk - 13) % 8 != "1" && (bk - 13) % 8 != "2" && (bk - 13) % 8 != "3") || (document.getElementById("_" + (bk - 17) + "_").innerHTML === "White Knight" && (bk - 17) % 8 != "0") || (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight" && (bk + 3) % 8 != "1" && (bk + 3) % 8 != "2" && (bk + 3) % 8 != "3") || (document.getElementById("_" + (bk + 10) + "_").innerHTML === "White Knight" && (bk + 10) % 8 != "1" && (bk + 10) % 8 != "2") || (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight")) {
      NE_blackcheck = 1
    }  if ((document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight" && (bk - 18) % 8 != "7" && (bk - 18) % 8 != "0") || (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") || (document.getElementById("_" + (bk - 11) + "_").innerHTML === "White Knight" && (bk - 11) % 8 != "6" && (bk - 11) % 8 != "7" && (bk - 11) % 8 != "0") || (document.getElementById("_" + (bk + 5) + "_").innerHTML === "White Knight" && (bk + 5) % 8 != "6" && (bk + 5) % 8 != "7" && (bk + 5) % 8 != "0") || (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight" && (bk + 14) % 8 != "7" && (bk + 14) % 8 != "0") || (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight")) {
      W_blackcheck = 1
    } if ((document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight" && (bk - 14) % 8 != "1" && (bk - 14) % 8 != "2") || (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") || (document.getElementById("_" + (bk - 5) + "_").innerHTML === "White Knight" && (bk - 5) % 8 != "1" && (bk - 5) % 8 != "2" && (bk - 5) % 8 != "3") || (document.getElementById("_" + (bk + 11) + "_").innerHTML === "White Knight" && (bk + 11) % 8 != "1" && (bk + 11) % 8 != "2" && (bk + 11) % 8 != "3") || (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight" && (bk + 18) % 8 != "1" && (bk + 18) % 8 != "2") || (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight")) {
      E_blackcheck = 1
    } if ((document.getElementById("_" + (bk + 22) + "_").innerHTML === "White Knight" && (bk + 22) % 8 != "7" && (bk - 22) % 8 != "0") || (document.getElementById("_" + (bk + 13) + "_").innerHTML === "White Knight" && (bk + 13) % 8 != "6" && (bk + 13) % 8 != "7" && (bk + 13) % 8 != "0") || (document.getElementById("_" + (bk + 17) + "_").innerHTML === "White Knight" && (bk + 17) % 8 != "1") || (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight" && (bk - 3) % 8 != "6" && (bk - 3) % 8 != "7" && (bk - 3) % 8 != "0") || (document.getElementById("_" + (bk - 10) + "_").innerHTML === "White Knight" && (bk - 10) % 8 != "7" && (bk - 10) % 8 != "0") || (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight")) {
      SW_blackcheck = 1
    }  if ((document.getElementById("_" + (bk + 25) + "_").innerHTML === "White Knight" && (bk + 25) % 8 != "1") || (document.getElementById("_" + (bk + 23) + "_").innerHTML === "White Knight" && (bk + 23) % 8 != "0") || (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight" && (bk + 18) % 8 != "1" && (bk + 18) % 8 != "2") || (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight" && (bk + 14) % 8 != "7" && (bk + 14) % 8 != "0") || (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight" && (bk + 2) % 8 != "1" && (bk + 2) % 8 != "2") || (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight" && (bk - 2) % 8 != "7" && (bk - 2) % 8 != "0")) {
      S_blackcheck = 1
    } if ((document.getElementById("_" + (bk + 26) + "_").innerHTML === "White Knight" && (bk + 26) % 8 != "1" && (bk + 26) % 8 != "2") || (document.getElementById("_" + (bk + 19) + "_").innerHTML === "White Knight" && (bk + 19) % 8 != "1" && (bk + 19) % 8 != "2") || (document.getElementById("_" + (bk + 15) + "_").innerHTML === "White Knight" && (bk + 15) % 8 != "0") || (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight" && (bk + 3) % 8 != "1" && (bk + 3) % 8 != "2" && (bk + 3) % 8 != "3") || (document.getElementById("_" + (bk - 6) + "_").innerHTML === "White Knight" && (bk - 6) % 8 != "1" && (bk - 6) % 8 != "2") || (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight")) {
      SE_blackcheck = 1
    } 
    for (mr1= -9; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        NW_blackcheck = 1 
      }} for (mr2 = -9; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      NW_blackcheck = 1
      }} for (mr3 = -9; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      NW_blackcheck = 1
      }} for (mr4 = -9; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      NW_blackcheck = 1
      }} for (mb2 = -9; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NW_blackcheck = 1
      }} for (mb3 = -9; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      NW_blackcheck = 1
      }} for (mb4 = -9; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NW_blackcheck = 1
      }} 
    for (mr1= -8; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        N_blackcheck = 1 
      }} for (mr2 = -8; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      N_blackcheck = 1
      }} for (mb1 = -8; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      N_blackcheck = 1
      }} for (mb2 = -8; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      N_blackcheck = 1
      }} for (mb3 = -8; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      N_blackcheck = 1
      }} for (mb4 = -8; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      N_blackcheck = 1
      }}
    for (mr1= -7; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        NE_blackcheck = 1 
      }} for (mr2 = -7; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      NE_blackcheck = 1
      }} for (mr3 = -7; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      NE_blackcheck = 1
      }} for (mr4 = -7; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      NE_blackcheck = 1
      }} for (mb1 = -7; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      NE_blackcheck = 1
      }} for (mb2 = -7; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NE_blackcheck = 1
      }} for (mb4 = -7; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NE_blackcheck = 1
      }} 
    for (mr2 = -1; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      W_blackcheck = 1
      }} for (mr3 = -1; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      W_blackcheck = 1
      }} for (mr4 = -1; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      W_blackcheck = 1
      }} for (mb1 = -1; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      W_blackcheck = 1
      }} for (mb2 = -1; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      W_blackcheck = 1
      }} for (mb3 = -1; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      W_blackcheck = 1
      }} for (mb4 = -1; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      W_blackcheck = 1
      }}
      for (mr1= 1; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        E_blackcheck = 1 
      }} for (mr3 = 1; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      E_blackcheck = 1
      }} for (mr4 = 1; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      E_blackcheck = 1
      }} for (mb1 = 1; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      E_blackcheck = 1
      }} for (mb2 = 1; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      E_blackcheck = 1
      }} for (mb3 = 1; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      E_blackcheck = 1
      }} for (mb4 = 1; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      E_blackcheck = 1
      }}
    for (mr1= 7; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        SW_blackcheck = 1 
      }} for (mr2 = 7; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      SW_blackcheck = 1
      }} for (mr3 = 7; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      SW_blackcheck = 1
      }} for (mr4 = 7; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      SW_blackcheck = 1
      }} for (mb1 = 7; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SW_blackcheck = 1
      }} for (mb2 = 7; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      SW_blackcheck = 1
      }} for (mb3 = 7; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SW_blackcheck = 1
      }}
    for (mr1= 8; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        S_blackcheck = 1 
      }} for (mr2 = 8; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      S_blackcheck = 1
      }} for (mr3 = 8; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      S_blackcheck = 1
      }} for (mb1 = 8; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      S_blackcheck = 1
      }} for (mb2 = 8; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      S_blackcheck = 1
      }} for (mb3 = 8; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      S_blackcheck = 1
      }} for (mb4 = 8; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      S_blackcheck = 1
      }}
    for (mr1= 9; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        SE_blackcheck = 1 
      }} for (mr2 = 9; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      SE_blackcheck = 1
      }} for (mr3 = 9; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      SE_blackcheck = 1
      }} for (mr4 = 9; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      SE_blackcheck = 1
      }} for (mb1 = 9; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SE_blackcheck = 1
      }} for (mb3 = 9; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SE_blackcheck = 1
      }} for (mb4 = 9; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      SE_blackcheck = 1
      }}
  }
}
function changecolour() {
  colourchange = 1
      if (piececolour === "Black" && colourchange === 1) {
        piececolour = "White"
        document.getElementById("piececolour").innerHTML = "White"
        document.getElementById("piececolour").style.background = "#FFFFFF"
        document.getElementById("piececolour").style.color = "#000000"
        colourchange = 0
      } if (piececolour === "White" && colourchange === 1) {
        piececolour = "Black"
        document.getElementById("piececolour").innerHTML = "Black"
        document.getElementById("piececolour").style.background = "#000000"
        document.getElementById("piececolour").style.color = "#FFFFFF"
        colourchange = 0
      }
}
function promote() {
  if (document.getElementById("promote").checked) {
    autopromote = 1
  } else {
    autopromote = 0
  }
  if (piece === "White Pawn" && ((square -1) - (square - 1) % 8) / 8 === 7 && whitepromote === 0 && autopromote === 1) {
        piece = "White Queen"
        whitepromote = 1
      } if (piece === "Black Pawn" && ((square -1) - (square - 1) % 8) / 8 === 0 && blackpromote === 0 && autopromote === 1) {
        piece = "Black Queen"
        blackpromote = 1
      }
}
function castle() {
  if (document.getElementById("castle").checked) {
    autocastle = 1
  } else {
    autocastle = 0
  }
  if (document.getElementById("_4_").innerHTML === "White King" && autocastle === 1) {
    whitecastle = ""
    blackcastle = ""
    for (mr1= 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "White Rook" && wk+mr1+1 === 8) {
        whitecastle += "Queenside "
      }} for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
        if (document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "White Rook" && wk+mr2-1 === 1) {
          whitecastle += "Kingside "
      }}
    if ((whitecastle.split(" ")[0] === "Kingside" || whitecastle.split(" ")[1] === "Kingside") && square === 3) {
      prev_square = 2
      document.getElementById("_4_").innerHTML = ""
      prev_inner = "White King"
    } if ((whitecastle.split(" ")[0] === "Queenside" || whitecastle.split(" ")[1] === "Queenside") && square === 5) {
      prev_square = 6
      document.getElementById("_4_").innerHTML = ""
      prev_inner = "White King"
    }
  }
}
