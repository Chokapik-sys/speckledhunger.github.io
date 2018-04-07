var piececolour = "White"
var colourchange = 0
var capture = 0
//Check vars
var blackattacked = []
var N_blackattacked = []
var E_blackattacked = []
var S_blackattacked = []
var W_blackattacked = []
var NE_blackattacked = []
var SE_blackattacked = []
var SW_blackattacked = []
var NW_blackattacked = []
//
var N_blackcheck = 0
var E_blackcheck = 0
var S_blackcheck = 0
var W_blackcheck = 0
var NE_blackcheck = 0
var SE_blackcheck = 0
var SW_blackcheck  = 0
var NW_blackcheck = 0
//
var whiteattacked = []
var N_whiteattacked = []
var E_whiteattacked = []
var S_whiteattacked = []
var W_whiteattacked = []
var NE_whiteattacked = []
var SE_whiteattacked = []
var SW_whiteattacked = []
var NW_whiteattacked = []
//
var N_whitecheck = 0
var E_whitecheck = 0
var S_whitecheck = 0
var W_whitecheck = 0
var NE_whitecheck = 0
var SE_whitecheck = 0
var SW_whitecheck  = 0
var NW_whitecheck = 0
//
var blackcheckpattern = 0
var whitecheckpattern = 0
//
var N_blackcheckcoord = 0
var E_blackcheckcoord = 0
var S_blackcheckcoord = 0
var W_blackcheckcoord = 0
var NE_blackcheckcoord = 0
var NW_blackcheckcoord = 0
var SE_blackcheckcoord = 0
var SW_blackcheckcoord = 0
//
var N_whitecheckcoord = 0
var E_whitecheckcoord = 0
var S_whitecheckcoord = 0
var W_whitecheckcoord = 0
var NE_whitecheckcoord = 0
var NW_whitecheckcoord = 0
var SE_whitecheckcoord = 0
var SW_whitecheckcoord = 0
//
var blacktrapped = 0
var N_blacktrapped = 0
var E_blacktrapped = 0
var S_blacktrapped = 0
var W_blacktrapped = 0
var NE_blacktrapped = 0
var NW_blacktrapped = 0
var SE_blacktrapped = 0
var SW_blacktrapped = 0
//
var N_blacktrapcoord = 0
var E_blacktrapcoord = 0
var S_blacktrapcoord = 0
var W_blacktrapcoord = 0
var NE_blacktrapcoord = 0
var NW_blacktrapcoord = 0
var SE_blacktrapcoord = 0
var SW_blacktrapcoord = 0
//
var whitetrapped = 0
var N_whitetrapped = 0
var E_whitetrapped = 0
var S_whitetrapped = 0
var W_whitetrapped = 0
var NE_whitetrapped = 0
var NW_whitetrapped = 0
var SE_whitetrapped = 0
var SW_whitetrapped = 0
//
var N_whitetrapcoord = 0
var E_whitetrapcoord = 0
var S_whitetrapcoord = 0
var W_whitetrapcoord = 0
var NE_whitetrapcoord = 0
var NW_whitetrapcoord = 0
var SE_whitetrapcoord = 0
var SW_whitetrapcoord = 0
//Text vars
var N_blacktext = 0
var E_blacktext = 0
var S_blacktext = 0
var W_blacktext = 0
var NE_blacktext = 0
var SE_blacktext = 0
var SW_blacktext  = 0
var NW_blacktext = 0
var N_whitetext = 0
var E_whitetext = 0
var S_whitetext = 0
var W_whitetext = 0
var NE_whitetext = 0
var SE_whitetext = 0
var SW_whitetext  = 0
var NW_whitetext = 0
var blacktextpattern = 0
var blacktrappattern = 0
var whitetextpattern = 0
var whitetrappattern = 0
//
var newevent = 0
var wk = 1
var bk = 1
var bex = 0
var wex = 0
var autopromote = 0
var autocastle = 0
var confirmcastle = ""
var blackcastle = ""
var whitecastle = ""
var checkmate = 0
var aftercheckmate = 0
var afterproceed = 0
function phase_2() {
  if (phase === 2) {
    //Blank Square
    if (piece === "") {
      newevent = 1
    }
    //White Pieces
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (square + 9) + "_").innerHTML === "Black King" && (square + 9) % 8 != "1"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 9) + "_").innerHTML[0] === "B" && (square + 9) % 8 != "1"){
      document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "Black King" && (square + 7) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 7) + "_").innerHTML[0] === "B" && (square + 7) % 8 != "0"){
      document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "White Knight") {
    if (document.getElementById("_" + (square - 10) + "_").innerHTML === "Black King" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 10) + "_").innerHTML[0] === "B" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "Black King" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 10) + "_").innerHTML[0] === "B" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "Black King" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 6) + "_").innerHTML[0] === "B" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "Black King" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 6) + "_").innerHTML[0] === "B" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "Black King" && (square - 17) % 8 != "0") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 17) + "_").innerHTML[0] === "B" && (square - 17) % 8 != "0") {
      document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "Black King" && (square + 17) % 8 != "1") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 17) + "_").innerHTML[0] === "B" && (square + 17) % 8 != "1") {
      document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "Black King" && (square - 15) % 8 != "1") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square - 15) + "_").innerHTML[0] === "B" && (square - 15) % 8 != "1") {
      document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "Black King" && (square + 15) % 8 != "0") {
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + 15) + "_").innerHTML[0] === "B" && (square + 15) % 8 != "0") {
      document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "White Rook") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "Black King" && (square + mr1) % 8 != "1"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "B" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "Black King" && (square + mr2) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "B" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "Black King"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "Black King"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "B"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Bishop") {
    if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "Black King" && (square + mb1) % 8 != "1"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "B" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "Black King" && (square + mb2) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "B" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "Black King" && (square + mb3) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "B" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "Black King" && (square + mb4) % 8 != "1"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "B" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "White Queen") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "Black King" && (square + mr1) % 8 != "1"){
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
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "B" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "Black King" && (square + mb2) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "B" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "Black King" && (square + mb3) % 8 != "0"){
      console.log("Black King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "B" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "Black King" && (square + mb4) % 8 != "1"){
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
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 9) + "_").innerHTML[0] === "W" && (square - 9) % 8 != "0"){
      document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "White King" && (square - 7) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 7) + "_").innerHTML[0] === "W" && (square - 7) % 8 != "1"){
      document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
    newevent = 1
  }
    if (piece === "Black Knight") {
    if (document.getElementById("_" + (square - 10) + "_").innerHTML === "White King" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 10) + "_").innerHTML[0] === "W" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0") {
      document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "White King" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 10) + "_").innerHTML[0] === "W" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2") {
      document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "White King" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 6) + "_").innerHTML[0] === "W" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2") {
      document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "White King" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 6) + "_").innerHTML[0] === "W" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0") {
      document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "White King" && (square - 17) % 8 != "0") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 17) + "_").innerHTML[0] === "W" && (square - 17) % 8 != "0") {
      document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "White King" && (square + 17) % 8 != "1") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 17) + "_").innerHTML[0] === "W" && (square + 17) % 8 != "1") {
      document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "White King" && (square - 15) % 8 != "1") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square - 15) + "_").innerHTML[0] === "W" && (square - 15) % 8 != "1") {
      document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "White King" && (square + 15) % 8 != "0") {
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + 15) + "_").innerHTML[0] === "W" && (square + 15) % 8 != "0") {
      document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
    }
    if (piece === "Black Rook") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "White King" && (square + mr1) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "W" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "White King" && (square + mr2) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "W" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "White King"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "White King"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Bishop") {
    if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "White King" && (square + mb1) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "W" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "White King" && (square + mb2) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "W" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "White King" && (square + mb3) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "W" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "White King" && (square + mb4) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb4) + "_").innerHTML[0] === "W" && (square + mb4) % 8 != "1"){
      document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
      newevent = 1
  }
    if (piece === "Black Queen") {
    if (document.getElementById("_" + (square + mr1) + "_").innerHTML === "White King" && (square + mr1) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr1) + "_").innerHTML[0] === "W" && (square + mr1) % 8 != "1"){
      document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr2) + "_").innerHTML === "White King" && (square + mr2) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr2) + "_").innerHTML[0] === "W" && (square + mr2) % 8 != "0"){
      document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr3) + "_").innerHTML === "White King"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr3) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mr4) + "_").innerHTML === "White King"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mr4) + "_").innerHTML[0] === "W"){
      document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb1) + "_").innerHTML === "White King" && (square + mb1) % 8 != "1"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb1) + "_").innerHTML[0] === "W" && (square + mb1) % 8 != "1"){
      document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb2) + "_").innerHTML === "White King" && (square + mb2) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb2) + "_").innerHTML[0] === "W" && (square + mb2) % 8 != "0"){
      document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb3) + "_").innerHTML === "White King" && (square + mb3) % 8 != "0"){
      console.log("White King in check")
    } else if (document.getElementById("_" + (square + mb3) + "_").innerHTML[0] === "W" && (square + mb3) % 8 != "0"){
      document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    } if (document.getElementById("_" + (square + mb4) + "_").innerHTML === "White King" && (square + mb4) % 8 != "1"){
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
  piece = ""
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
  //Reset all values
  NW_whitecheck = N_whitecheck = NE_whitecheck = W_whitecheck = E_whitecheck = SW_whitecheck = S_whitecheck = SE_whitecheck = 0
  NW_blackcheck = N_blackcheck = NE_blackcheck = W_blackcheck = E_blackcheck = SW_blackcheck = S_blackcheck = SE_blackcheck = 0
  NW_whitetext = N_whitetext = NE_whitetext = W_whitetext = E_whitetext = SW_whitetext = S_whitetext = SE_whitetext = 0
  NW_blacktext = N_blacktext = NE_blacktext = W_blacktext = E_blacktext = SW_blacktext = S_blacktext = SE_blacktext = 0
  NW_whiteattacked = N_whiteattacked = NE_whiteattacked = W_whiteattacked = E_whiteattacked = SW_whiteattacked = S_whiteattacked = SE_whiteattacked = []
  NW_blackattacked = N_blackattacked = NE_blackattacked = W_blackattacked = E_blackattacked = SW_blackattacked = S_blackattacked = SE_blackattacked = []
  //White Check
  for (wk = 0; wk < 103; wk ++) {
    if (document.getElementById("_" + wk + "_").innerHTML === "White King" || wk === 76) {
      break
    }
  }
  if (document.getElementById("_" + wk + "_").innerHTML === "White King") {
    //Immediate Threat
    for (mr1 = 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if ((document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen") && (wk + mr1 + 1) % 8 != "1") {
  E_whitecheck = 1
  E_whiteattacked.push(wk + mr1 + 1)
      } else {
        E_whitecheck = 0
      }} for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mr2 - 1)
      } else {
        W_whitecheck = 0
      }} for (mr3 = 8; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      S_whitecheck = 1
      S_whiteattacked.push(wk + mr3 + 8)
      } else {
        S_whitecheck = 0
      }} for (mr4 = -8; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      N_whitecheck = 1
      N_whiteattacked.push(wk + mr4 - 8)
      } else {
        N_whitecheck = 0
      }} for (mb1 = 9; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SE_whitecheck = 1
      SE_whiteattacked.push(wk + mb1 + 9)
      } else {
        SE_whitecheck = 0
      }} for (mb2 = -9; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NW_whitecheck = 1
      NW_whiteattacked.push(wk + mb2 - 9)
      } else {
        NW_whitecheck = 0
      }} for (mb3 = 7; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SW_whitecheck = 1
      SW_whiteattacked.push(wk + mb3 + 7)
      } else {
        SW_whitecheck = 0
      }} for (mb4 = -7; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NE_whitecheck = 1
      NE_whiteattacked.push(wk + mb4 - 7)
      } else {
        NE_whitecheck = 0
      }}
    //Future Threat
    if (((document.getElementById("_" + (wk - 26) + "_").innerHTML === "Black Knight" && (wk - 26) % 8 != "7" && (wk - 26) % 8 != "0") || (document.getElementById("_" + (wk - 19) + "_").innerHTML === "Black Knight" && (wk - 19) % 8 != "7" && (wk - 19) % 8 != "0") || (document.getElementById("_" + (wk - 15) + "_").innerHTML === "Black Knight" && (wk - 15) % 8 != "1") || (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight" && (wk - 3) % 8 != "0" && (wk - 3) % 8 != "7" && (wk - 3) % 8 != "6") || (document.getElementById("_" + (wk + 6) + "_").innerHTML === "Black Knight" && (wk + 6) % 8 != "0" && (wk + 6) % 8 != "7") || (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk - 9) + "_").innerHTML === "") {
      NW_whitecheck = 1
      if (document.getElementById("_" + (wk - 26) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk - 26)
      } if (document.getElementById("_" + (wk - 19) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk - 19)
      } if (document.getElementById("_" + (wk - 15) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk - 15)
      } if (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk - 3)
      } if (document.getElementById("_" + (wk + 6) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk + 6)
      } if (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight") {
        NW_whiteattacked.push(wk - 24)
      }
    }  if (((document.getElementById("_" + (wk - 25) + "_").innerHTML === "Black Knight" && (wk - 25) % 8 != "0") || (document.getElementById("_" + (wk - 23) + "_").innerHTML === "Black Knight" && (wk - 23) % 8 != "1") || (document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "0" && (wk - 18) % 8 != "7") || (document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "0" && (wk - 2) % 8 != "7") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2")) && document.getElementById("_" + (wk - 8) + "_").innerHTML === "") {
      N_whitecheck = 1
      if (document.getElementById("_" + (wk - 25) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk - 25)
      } if (document.getElementById("_" + (wk - 23) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk - 23)
      } if (document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk - 18)
      } if (document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk - 14)
      } if (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk - 2)
      } if (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight") {
        N_whiteattacked.push(wk + 2)
      }
    } if (((document.getElementById("_" + (wk - 22) + "_").innerHTML === "Black Knight" && (wk - 22) % 8 != "1" && (wk - 22) % 8 != "2") || (document.getElementById("_" + (wk - 13) + "_").innerHTML === "Black Knight" && (wk - 13) % 8 != "1" && (wk - 13) % 8 != "2" && (wk - 13) % 8 != "3") || (document.getElementById("_" + (wk - 17) + "_").innerHTML === "Black Knight" && (wk - 17) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk + 10) + "_").innerHTML === "Black Knight" && (wk + 10) % 8 != "1" && (wk + 10) % 8 != "2") || (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk - 7) + "_").innerHTML === "") {
      NE_whitecheck = 1
      if (document.getElementById("_" + (wk - 22) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk - 22)
      } if (document.getElementById("_" + (wk - 13) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk - 13)
      } if (document.getElementById("_" + (wk - 17) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk - 17)
      } if (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk + 3)
      } if (document.getElementById("_" + (wk + 10) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk + 10)
      } if (document.getElementById("_" + (wk - 24) + "_").innerHTML === "Black Knight") {
        NE_whiteattacked.push(wk - 24)
      }
    }  if (((document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight" && (wk - 18) % 8 != "7" && (wk - 18) % 8 != "0") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 11) + "_").innerHTML === "Black Knight" && (wk - 11) % 8 != "6" && (wk - 11) % 8 != "7" && (wk - 11) % 8 != "0") || (document.getElementById("_" + (wk + 5) + "_").innerHTML === "Black Knight" && (wk + 5) % 8 != "6" && (wk + 5) % 8 != "7" && (wk + 5) % 8 != "0") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk - 1) + "_").innerHTML === "") {
      W_whitecheck = 1
      if (document.getElementById("_" + (wk - 18) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk - 18)
      } if (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk - 16)
      } if (document.getElementById("_" + (wk - 11) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk - 11)
      } if (document.getElementById("_" + (wk + 5) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk + 5)
      } if (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk + 14)
      } if (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight") {
        W_whiteattacked.push(wk + 16)
      }
    } if (((document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight" && (wk - 14) % 8 != "1" && (wk - 14) % 8 != "2") || (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") || (document.getElementById("_" + (wk - 5) + "_").innerHTML === "Black Knight" && (wk - 5) % 8 != "1" && (wk - 5) % 8 != "2" && (wk - 5) % 8 != "3") || (document.getElementById("_" + (wk + 11) + "_").innerHTML === "Black Knight" && (wk + 11) % 8 != "1" && (wk + 11) % 8 != "2" && (wk + 11) % 8 != "3") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk + 1) + "_").innerHTML === "") {
      E_whitecheck = 1
      if (document.getElementById("_" + (wk - 14) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk - 14)
      } if (document.getElementById("_" + (wk - 16) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk - 16)
      } if (document.getElementById("_" + (wk - 5) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk - 5)
      } if (document.getElementById("_" + (wk + 11) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk + 11)
      } if (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk + 18)
      } if (document.getElementById("_" + (wk + 16) + "_").innerHTML === "Black Knight") {
        E_whiteattacked.push(wk + 16)
      }
    } if (((document.getElementById("_" + (wk + 22) + "_").innerHTML === "Black Knight" && (wk + 22) % 8 != "7" && (wk + 22) % 8 != "0") || (document.getElementById("_" + (wk + 13) + "_").innerHTML === "Black Knight" && (wk + 13) % 8 != "6" && (wk + 13) % 8 != "7" && (wk + 13) % 8 != "0") || (document.getElementById("_" + (wk + 17) + "_").innerHTML === "Black Knight" && (wk + 17) % 8 != "1") || (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight" && (wk - 3) % 8 != "6" && (wk - 3) % 8 != "7" && (wk - 3) % 8 != "0") || (document.getElementById("_" + (wk - 10) + "_").innerHTML === "Black Knight" && (wk - 10) % 8 != "7" && (wk - 10) % 8 != "0") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk + 7) + "_").innerHTML === "") {
      SW_whitecheck = 1
      if (document.getElementById("_" + (wk + 22) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk + 22)
      } if (document.getElementById("_" + (wk + 13) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk + 13)
      } if (document.getElementById("_" + (wk + 17) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk + 17)
      } if (document.getElementById("_" + (wk - 3) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk - 3)
      } if (document.getElementById("_" + (wk - 10) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk - 10)
      } if (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight") {
        SW_whiteattacked.push(wk + 24)
      }
    }  if (((document.getElementById("_" + (wk + 25) + "_").innerHTML === "Black Knight" && (wk + 25) % 8 != "1") || (document.getElementById("_" + (wk + 23) + "_").innerHTML === "Black Knight" && (wk + 23) % 8 != "0") || (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight" && (wk + 18) % 8 != "1" && (wk + 18) % 8 != "2") || (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight" && (wk + 14) % 8 != "7" && (wk + 14) % 8 != "0") || (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight" && (wk + 2) % 8 != "1" && (wk + 2) % 8 != "2") || (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight" && (wk - 2) % 8 != "7" && (wk - 2) % 8 != "0")) && document.getElementById("_" + (wk + 8) + "_").innerHTML === "") {
      S_whitecheck = 1
      if (document.getElementById("_" + (wk + 25) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk + 25)
      } if (document.getElementById("_" + (wk + 23) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk + 23)
      } if (document.getElementById("_" + (wk + 18) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk + 18)
      } if (document.getElementById("_" + (wk + 14) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk + 14)
      } if (document.getElementById("_" + (wk + 2) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk + 2)
      } if (document.getElementById("_" + (wk - 2) + "_").innerHTML === "Black Knight") {
        S_whiteattacked.push(wk - 2)
      }
    } if (((document.getElementById("_" + (wk + 26) + "_").innerHTML === "Black Knight" && (wk + 26) % 8 != "1" && (wk + 26) % 8 != "2") || (document.getElementById("_" + (wk + 19) + "_").innerHTML === "Black Knight" && (wk + 19) % 8 != "1" && (wk + 19) % 8 != "2") || (document.getElementById("_" + (wk + 15) + "_").innerHTML === "Black Knight" && (wk + 15) % 8 != "0") || (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight" && (wk + 3) % 8 != "1" && (wk + 3) % 8 != "2" && (wk + 3) % 8 != "3") || (document.getElementById("_" + (wk - 6) + "_").innerHTML === "Black Knight" && (wk - 6) % 8 != "1" && (wk - 6) % 8 != "2") || (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight")) && document.getElementById("_" + (wk + 9) + "_").innerHTML === "") {
      SE_whitecheck = 1
      if (document.getElementById("_" + (wk + 26) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk + 26)
      } if (document.getElementById("_" + (wk + 19) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk + 19)
      } if (document.getElementById("_" + (wk + 15) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk + 15)
      } if (document.getElementById("_" + (wk + 3) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk + 3)
      } if (document.getElementById("_" + (wk - 6) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk - 6)
      } if (document.getElementById("_" + (wk + 24) + "_").innerHTML === "Black Knight") {
        SE_whiteattacked.push(wk + 24)
      }
    } 
    for (mr1= -9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        NW_whitecheck = 1
        NW_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = -9; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = -9; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = -9; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mr4 - 8)
      }} for (mb2 = -9; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = -9; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = -9; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NW_whitecheck = 1
            NW_whiteattacked.push(wk + mb4 - 7)
      }} 
    for (mr1= -8; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        N_whitecheck = 1
        N_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = -8; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      N_whitecheck = 1
            N_whiteattacked.push(wk + mr2 - 1)
      }} for (mb1 = -8; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      N_whitecheck = 1
            N_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = -8; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      N_whitecheck = 1
            N_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = -8; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      N_whitecheck = 1
            N_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = -8; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      N_whitecheck = 1
            N_whiteattacked.push(wk + mb4 - 7)
      }}
    for (mr1= -7; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        NE_whitecheck = 1
        NE_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = -7; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = -7; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = -7; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mr4 - 8)
      }} for (mb1 = -7; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = -7; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mb2 - 9)
      }} for (mb4 = -7; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      NE_whitecheck = 1
            NE_whiteattacked.push(wk + mb4 - 7)
      }} 
    for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = -1; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = -1; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mr4 - 8)
      }} for (mb1 = -1; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = -1; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = -1; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = -1; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      W_whitecheck = 1
      W_whiteattacked.push(wk + mb4 - 7)
      }}
    for (mr1= 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        E_whitecheck = 1
    E_whiteattacked.push(wk + mr1 + 1)
      }} for (mr3 = 1; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = 1; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mr4 - 8)
      }} for (mb1 = 1; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = 1; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = 1; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = 1; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      E_whitecheck = 1
        E_whiteattacked.push(wk + mb4 - 7)
      }}
    for (mr1= 7; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        SW_whitecheck = 1
        SW_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = 7; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = 7; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = 7; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mr4 - 8)
      }} for (mb1 = 7; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = 7; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = 7; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SW_whitecheck = 1
            SW_whiteattacked.push(wk + mb3 + 7)
      }}
    for (mr1= 8; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        S_whitecheck = 1
        S_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = 8; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = 8; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mr3 + 8)
      }} for (mb1 = 8; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mb1 + 9)
      }} for (mb2 = 8; (wk + mb2) % 8 != "0" && document.getElementById("_" + (wk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb2 - 9) + "_").innerHTML === "Black Queen") && (wk + mb2 - 9) % 8 != "0") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mb2 - 9)
      }} for (mb3 = 8; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = 8; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      S_whitecheck = 1
            S_whiteattacked.push(wk + mb4 - 7)
      }}
    for (mr1= 9; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "Black Queen" && (wk + mr1 + 1) % 8 != "1") {
        SE_whitecheck = 1
        SE_whiteattacked.push(wk + mr1 + 1)
      }} for (mr2 = 9; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "Black Queen") && (wk + mr2 - 1) % 8 != "0") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mr2 - 1)
      }} for (mr3 = 9; document.getElementById("_" + (wk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr3 + 8) + "_").innerHTML === "Black Queen") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mr3 + 8)
      }} for (mr4 = 9; document.getElementById("_" + (wk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Rook" || document.getElementById("_" + (wk + mr4 - 8) + "_").innerHTML === "Black Queen") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mr4 - 8)
      }} for (mb1 = 9; (wk + mb1) % 8 != "1" && document.getElementById("_" + (wk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb1 + 9) + "_").innerHTML === "Black Queen") && (wk + mb1 + 9) % 8 != "1") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mb1 + 9)
      }} for (mb3 = 9; (wk + mb3) % 8 != "0" && document.getElementById("_" + (wk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb3 + 7) + "_").innerHTML === "Black Queen") && (wk + mb3 + 7) % 8 != "0") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mb3 + 7)
      }} for (mb4 = 9; (wk + mb4) % 8 != "1" && document.getElementById("_" + (wk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Bishop" || document.getElementById("_" + (wk + mb4 - 7) + "_").innerHTML === "Black Queen") && (wk + mb4 - 7) % 8 != "1") {
      SE_whitecheck = 1
            SE_whiteattacked.push(wk + mb4 - 7)
      }}
    //Surround Text
    if (document.getElementById("_" + (wk - 9) + "_").innerHTML !== "") {
      NW_whitetext = 1
    } if (document.getElementById("_" + (wk - 8) + "_").innerHTML !== "") {
      N_whitetext = 1
    } if (document.getElementById("_" + (wk - 7) + "_").innerHTML !== "") {
      NE_whitetext = 1
    } if (document.getElementById("_" + (wk - 1) + "_").innerHTML !== "") {
      W_whitetext = 1
    } if (document.getElementById("_" + (wk + 1) + "_").innerHTML !== "") {
      E_whitetext = 1
    } if (document.getElementById("_" + (wk + 7) + "_").innerHTML !== "") {
      SW_whitetext = 1
    } if (document.getElementById("_" + (wk + 8) + "_").innerHTML !== "") {
      S_whitetext = 1
    } if (document.getElementById("_" + (wk + 9) + "_").innerHTML !== "") {
      SE_whitetext = 1
    }
  } for (bk = 0; bk < 103; bk ++) {
    if (document.getElementById("_" + bk + "_").innerHTML === "Black King" || bk === 76) {
      break
    }
  } //Black Check
  if (document.getElementById("_" + bk + "_").innerHTML === "Black King") {
    //Immediate Threat
    for (mr1 = 1; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if ((document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen") && (bk + mr1 + 1) % 8 != "1") {
  E_blackcheck = 1
  E_blackattacked.push(bk + mr1 + 1)
      } else {
        E_blackcheck = 0
      }} for (mr2 = -1; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mr2 - 1)
      } else {
        W_blackcheck = 0
      }} for (mr3 = 8; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      S_blackcheck = 1
      S_blackattacked.push(bk + mr3 + 8)
      } else {
        S_blackcheck = 0
      }} for (mr4 = -8; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      N_blackcheck = 1
      N_blackattacked.push(bk + mr4 - 8)
      } else {
        N_blackcheck = 0
      }} for (mb1 = 9; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SE_blackcheck = 1
      SE_blackattacked.push(bk + mb1 + 9)
      } else {
        SE_blackcheck = 0
      }} for (mb2 = -9; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NW_blackcheck = 1
      NW_blackattacked.push(bk + mb2 - 9)
      } else {
        NW_blackcheck = 0
      }} for (mb3 = 7; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SW_blackcheck = 1
      SW_blackattacked.push(bk + mb3 + 7)
      } else {
        SW_blackcheck = 0
      }} for (mb4 = -7; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NE_blackcheck = 1
      NE_blackattacked.push(bk + mb4 - 7)
      } else {
        NE_blackcheck = 0
      }}
    //Future Threat
    if (((document.getElementById("_" + (bk - 26) + "_").innerHTML === "White Knight" && (bk - 26) % 8 != "7" && (bk - 26) % 8 != "0") || (document.getElementById("_" + (bk - 19) + "_").innerHTML === "White Knight" && (bk - 19) % 8 != "7" && (bk - 19) % 8 != "0") || (document.getElementById("_" + (bk - 15) + "_").innerHTML === "White Knight" && (bk - 15) % 8 != "1") || (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight" && (bk - 3) % 8 != "0" && (bk - 3) % 8 != "7" && (bk - 3) % 8 != "6") || (document.getElementById("_" + (bk + 6) + "_").innerHTML === "White Knight" && (bk + 6) % 8 != "0" && (bk + 6) % 8 != "7") || (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk - 9) + "_").innerHTML === "") {
      NW_blackcheck = 1
      if (document.getElementById("_" + (bk - 26) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk - 26)
      } if (document.getElementById("_" + (bk - 19) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk - 19)
      } if (document.getElementById("_" + (bk - 15) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk - 15)
      } if (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk - 3)
      } if (document.getElementById("_" + (bk + 6) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk + 6)
      } if (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight") {
        NW_blackattacked.push(bk - 24)
      }
    }  if (((document.getElementById("_" + (bk - 25) + "_").innerHTML === "White Knight" && (bk - 25) % 8 != "0") || (document.getElementById("_" + (bk - 23) + "_").innerHTML === "White Knight" && (bk - 23) % 8 != "1") || (document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight" && (bk - 18) % 8 != "0" && (bk - 18) % 8 != "7") || (document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight" && (bk - 14) % 8 != "1" && (bk - 14) % 8 != "2") || (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight" && (bk - 2) % 8 != "0" && (bk - 2) % 8 != "7") || (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight" && (bk + 2) % 8 != "1" && (bk + 2) % 8 != "2")) && document.getElementById("_" + (bk - 8) + "_").innerHTML === "") {
      N_blackcheck = 1
      if (document.getElementById("_" + (bk - 25) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk - 25)
      } if (document.getElementById("_" + (bk - 23) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk - 23)
      } if (document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk - 18)
      } if (document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk - 14)
      } if (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk - 2)
      } if (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight") {
        N_blackattacked.push(bk + 2)
      }
    } if (((document.getElementById("_" + (bk - 22) + "_").innerHTML === "White Knight" && (bk - 22) % 8 != "1" && (bk - 22) % 8 != "2") || (document.getElementById("_" + (bk - 13) + "_").innerHTML === "White Knight" && (bk - 13) % 8 != "1" && (bk - 13) % 8 != "2" && (bk - 13) % 8 != "3") || (document.getElementById("_" + (bk - 17) + "_").innerHTML === "White Knight" && (bk - 17) % 8 != "0") || (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight" && (bk + 3) % 8 != "1" && (bk + 3) % 8 != "2" && (bk + 3) % 8 != "3") || (document.getElementById("_" + (bk + 10) + "_").innerHTML === "White Knight" && (bk + 10) % 8 != "1" && (bk + 10) % 8 != "2") || (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk - 7) + "_").innerHTML === "") {
      NE_blackcheck = 1
      if (document.getElementById("_" + (bk - 22) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk - 22)
      } if (document.getElementById("_" + (bk - 13) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk - 13)
      } if (document.getElementById("_" + (bk - 17) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk - 17)
      } if (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk + 3)
      } if (document.getElementById("_" + (bk + 10) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk + 10)
      } if (document.getElementById("_" + (bk - 24) + "_").innerHTML === "White Knight") {
        NE_blackattacked.push(bk - 24)
      }
    }  if (((document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight" && (bk - 18) % 8 != "7" && (bk - 18) % 8 != "0") || (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") || (document.getElementById("_" + (bk - 11) + "_").innerHTML === "White Knight" && (bk - 11) % 8 != "6" && (bk - 11) % 8 != "7" && (bk - 11) % 8 != "0") || (document.getElementById("_" + (bk + 5) + "_").innerHTML === "White Knight" && (bk + 5) % 8 != "6" && (bk + 5) % 8 != "7" && (bk + 5) % 8 != "0") || (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight" && (bk + 14) % 8 != "7" && (bk + 14) % 8 != "0") || (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk - 1) + "_").innerHTML === "") {
      W_blackcheck = 1
      if (document.getElementById("_" + (bk - 18) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk - 18)
      } if (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk - 16)
      } if (document.getElementById("_" + (bk - 11) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk - 11)
      } if (document.getElementById("_" + (bk + 5) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk + 5)
      } if (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk + 14)
      } if (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight") {
        W_blackattacked.push(bk + 16)
      }
    } if (((document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight" && (bk - 14) % 8 != "1" && (bk - 14) % 8 != "2") || (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") || (document.getElementById("_" + (bk - 5) + "_").innerHTML === "White Knight" && (bk - 5) % 8 != "1" && (bk - 5) % 8 != "2" && (bk - 5) % 8 != "3") || (document.getElementById("_" + (bk + 11) + "_").innerHTML === "White Knight" && (bk + 11) % 8 != "1" && (bk + 11) % 8 != "2" && (bk + 11) % 8 != "3") || (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight" && (bk + 18) % 8 != "1" && (bk + 18) % 8 != "2") || (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk + 1) + "_").innerHTML === "") {
      E_blackcheck = 1
      if (document.getElementById("_" + (bk - 14) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk - 14)
      } if (document.getElementById("_" + (bk - 16) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk - 16)
      } if (document.getElementById("_" + (bk - 5) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk - 5)
      } if (document.getElementById("_" + (bk + 11) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk + 11)
      } if (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk + 18)
      } if (document.getElementById("_" + (bk + 16) + "_").innerHTML === "White Knight") {
        E_blackattacked.push(bk + 16)
      }
    } if (((document.getElementById("_" + (bk + 22) + "_").innerHTML === "White Knight" && (bk + 22) % 8 != "7" && (bk + 22) % 8 != "0") || (document.getElementById("_" + (bk + 13) + "_").innerHTML === "White Knight" && (bk + 13) % 8 != "6" && (bk + 13) % 8 != "7" && (bk + 13) % 8 != "0") || (document.getElementById("_" + (bk + 17) + "_").innerHTML === "White Knight" && (bk + 17) % 8 != "1") || (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight" && (bk - 3) % 8 != "6" && (bk - 3) % 8 != "7" && (bk - 3) % 8 != "0") || (document.getElementById("_" + (bk - 10) + "_").innerHTML === "White Knight" && (bk - 10) % 8 != "7" && (bk - 10) % 8 != "0") || (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk + 7) + "_").innerHTML === "") {
      SW_blackcheck = 1
      if (document.getElementById("_" + (bk + 22) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk + 22)
      } if (document.getElementById("_" + (bk + 13) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk + 13)
      } if (document.getElementById("_" + (bk + 17) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk + 17)
      } if (document.getElementById("_" + (bk - 3) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk - 3)
      } if (document.getElementById("_" + (bk - 10) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk - 10)
      } if (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight") {
        SW_blackattacked.push(bk + 24)
      }
    }  if (((document.getElementById("_" + (bk + 25) + "_").innerHTML === "White Knight" && (bk + 25) % 8 != "1") || (document.getElementById("_" + (bk + 23) + "_").innerHTML === "White Knight" && (bk + 23) % 8 != "0") || (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight" && (bk + 18) % 8 != "1" && (bk + 18) % 8 != "2") || (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight" && (bk + 14) % 8 != "7" && (bk + 14) % 8 != "0") || (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight" && (bk + 2) % 8 != "1" && (bk + 2) % 8 != "2") || (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight" && (bk - 2) % 8 != "7" && (bk - 2) % 8 != "0")) && document.getElementById("_" + (bk + 8) + "_").innerHTML === "") {
      S_blackcheck = 1
      if (document.getElementById("_" + (bk + 25) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk + 25)
      } if (document.getElementById("_" + (bk + 23) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk + 23)
      } if (document.getElementById("_" + (bk + 18) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk + 18)
      } if (document.getElementById("_" + (bk + 14) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk + 14)
      } if (document.getElementById("_" + (bk + 2) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk + 2)
      } if (document.getElementById("_" + (bk - 2) + "_").innerHTML === "White Knight") {
        S_blackattacked.push(bk - 2)
      }
    } if (((document.getElementById("_" + (bk + 26) + "_").innerHTML === "White Knight" && (bk + 26) % 8 != "1" && (bk + 26) % 8 != "2") || (document.getElementById("_" + (bk + 19) + "_").innerHTML === "White Knight" && (bk + 19) % 8 != "1" && (bk + 19) % 8 != "2") || (document.getElementById("_" + (bk + 15) + "_").innerHTML === "White Knight" && (bk + 15) % 8 != "0") || (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight" && (bk + 3) % 8 != "1" && (bk + 3) % 8 != "2" && (bk + 3) % 8 != "3") || (document.getElementById("_" + (bk - 6) + "_").innerHTML === "White Knight" && (bk - 6) % 8 != "1" && (bk - 6) % 8 != "2") || (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight")) && document.getElementById("_" + (bk + 9) + "_").innerHTML === "") {
      SE_blackcheck = 1
      if (document.getElementById("_" + (bk + 26) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk + 26)
      } if (document.getElementById("_" + (bk + 19) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk + 19)
      } if (document.getElementById("_" + (bk + 15) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk + 15)
      } if (document.getElementById("_" + (bk + 3) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk + 3)
      } if (document.getElementById("_" + (bk - 6) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk - 6)
      } if (document.getElementById("_" + (bk + 24) + "_").innerHTML === "White Knight") {
        SE_blackattacked.push(bk + 24)
      }
    } 
    for (mr1= -9; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        NW_blackcheck = 1
        NW_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = -9; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = -9; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = -9; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mr4 - 8)
      }} for (mb2 = -9; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = -9; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = -9; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NW_blackcheck = 1
            NW_blackattacked.push(bk + mb4 - 7)
      }} 
    for (mr1= -8; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        N_blackcheck = 1
        N_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = -8; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      N_blackcheck = 1
            N_blackattacked.push(bk + mr2 - 1)
      }} for (mb1 = -8; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      N_blackcheck = 1
            N_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = -8; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      N_blackcheck = 1
            N_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = -8; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      N_blackcheck = 1
            N_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = -8; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      N_blackcheck = 1
            N_blackattacked.push(bk + mb4 - 7)
      }}
    for (mr1= -7; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        NE_blackcheck = 1
        NE_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = -7; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = -7; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = -7; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mr4 - 8)
      }} for (mb1 = -7; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = -7; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mb2 - 9)
      }} for (mb4 = -7; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      NE_blackcheck = 1
            NE_blackattacked.push(bk + mb4 - 7)
      }} 
    for (mr2 = -1; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = -1; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = -1; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mr4 - 8)
      }} for (mb1 = -1; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = -1; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = -1; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = -1; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      W_blackcheck = 1
      W_blackattacked.push(bk + mb4 - 7)
      }}
    for (mr1= 1; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        E_blackcheck = 1
    E_blackattacked.push(bk + mr1 + 1)
      }} for (mr3 = 1; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = 1; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mr4 - 8)
      }} for (mb1 = 1; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = 1; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = 1; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = 1; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      E_blackcheck = 1
        E_blackattacked.push(bk + mb4 - 7)
      }}
    for (mr1= 7; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        SW_blackcheck = 1
        SW_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = 7; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = 7; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = 7; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mr4 - 8)
      }} for (mb1 = 7; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = 7; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = 7; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SW_blackcheck = 1
            SW_blackattacked.push(bk + mb3 + 7)
      }}
    for (mr1= 8; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        S_blackcheck = 1
        S_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = 8; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = 8; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mr3 + 8)
      }} for (mb1 = 8; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mb1 + 9)
      }} for (mb2 = 8; (bk + mb2) % 8 != "0" && document.getElementById("_" + (bk + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb2 - 9) + "_").innerHTML === "White Queen") && (bk + mb2 - 9) % 8 != "0") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mb2 - 9)
      }} for (mb3 = 8; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = 8; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      S_blackcheck = 1
            S_blackattacked.push(bk + mb4 - 7)
      }}
    for (mr1= 9; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "White Queen" && (bk + mr1 + 1) % 8 != "1") {
        SE_blackcheck = 1
        SE_blackattacked.push(bk + mr1 + 1)
      }} for (mr2 = 9; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "White Queen") && (bk + mr2 - 1) % 8 != "0") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mr2 - 1)
      }} for (mr3 = 9; document.getElementById("_" + (bk + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr3 + 8) + "_").innerHTML === "White Queen") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mr3 + 8)
      }} for (mr4 = 9; document.getElementById("_" + (bk + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Rook" || document.getElementById("_" + (bk + mr4 - 8) + "_").innerHTML === "White Queen") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mr4 - 8)
      }} for (mb1 = 9; (bk + mb1) % 8 != "1" && document.getElementById("_" + (bk + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb1 + 9) + "_").innerHTML === "White Queen") && (bk + mb1 + 9) % 8 != "1") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mb1 + 9)
      }} for (mb3 = 9; (bk + mb3) % 8 != "0" && document.getElementById("_" + (bk + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb3 + 7) + "_").innerHTML === "White Queen") && (bk + mb3 + 7) % 8 != "0") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mb3 + 7)
      }} for (mb4 = 9; (bk + mb4) % 8 != "1" && document.getElementById("_" + (bk + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Bishop" || document.getElementById("_" + (bk + mb4 - 7) + "_").innerHTML === "White Queen") && (bk + mb4 - 7) % 8 != "1") {
      SE_blackcheck = 1
            SE_blackattacked.push(bk + mb4 - 7)
      }}
    //Surround Text
    if (document.getElementById("_" + (bk - 9) + "_").innerHTML !== "") {
      NW_blacktext = 1
    } if (document.getElementById("_" + (bk - 8) + "_").innerHTML !== "") {
      N_blacktext = 1
    } if (document.getElementById("_" + (bk - 7) + "_").innerHTML !== "") {
      NE_blacktext = 1
    } if (document.getElementById("_" + (bk - 1) + "_").innerHTML !== "") {
      W_blacktext = 1
    } if (document.getElementById("_" + (bk + 1) + "_").innerHTML !== "") {
      E_blacktext = 1
    } if (document.getElementById("_" + (bk + 7) + "_").innerHTML !== "") {
      SW_blacktext = 1
    } if (document.getElementById("_" + (bk + 8) + "_").innerHTML !== "") {
      S_blacktext = 1
    } if (document.getElementById("_" + (bk + 9) + "_").innerHTML !== "") {
      SE_blacktext = 1
    }
  } if (aftercheckmate === 0) {
    blackcheckpattern = NW_blackcheck.toString() + N_blackcheck.toString() + NE_blackcheck.toString() + W_blackcheck.toString() + E_blackcheck.toString() + SW_blackcheck.toString() + S_blackcheck.toString() + SE_blackcheck.toString()
    whitecheckpattern = NW_whitecheck.toString() + N_whitecheck.toString() + NE_whitecheck.toString() + W_whitecheck.toString() + E_whitecheck.toString() + SW_whitecheck.toString() + S_whitecheck.toString() + SE_whitecheck.toString()
  }
  if (aftercheckmate === 1) {
    aftercheck()
  }
  blacktextpattern = NW_blacktext.toString() + N_blacktext.toString() + NE_blacktext.toString() + W_blacktext.toString() + E_blacktext.toString() + SW_blacktext.toString() + S_blacktext.toString() + SE_blacktext.toString()
    whitetextpattern = NW_whitetext.toString() + N_whitetext.toString() + NE_whitetext.toString() + W_whitetext.toString() + E_whitetext.toString() + SW_whitetext.toString() + S_whitetext.toString() + SE_whitetext.toString()
  invasion()
}
function invasion() {
  NW_whitecheckcoord = N_whitecheckcoord = NE_whitecheckcoord = W_whitecheckcoord = E_whitecheckcoord = SW_whitecheckcoord = S_whitecheckcoord = SE_whitecheckcoord = NW_blackcheckcoord = N_blackcheckcoord = NE_blackcheckcoord = W_blackcheckcoord = E_blackcheckcoord = SW_blackcheckcoord = S_blackcheckcoord = SE_blackcheckcoord = "0000000000000000000000000000000000000000000000000000000000000000"
  NW_whitetrapcoord = N_whitetrapcoord = NE_whitetrapcoord = W_whitetrapcoord = E_whitetrapcoord = SW_whitetrapcoord = S_whitetrapcoord = SE_whitetrapcoord = NW_blacktrapcoord = N_blacktrapcoord = NE_blacktrapcoord = W_blacktrapcoord = E_blacktrapcoord = SW_blacktrapcoord = S_blacktrapcoord = SE_blacktrapcoord = "0000000000000000000000000000000000000000000000000000000000000000"
  NW_whitetrapped = N_whitetrapped = NE_whitetrapped = W_whitetrapped = E_whitetrapped = SW_whitetrapped = S_whitetrapped = SE_whitetrapped = NW_blacktrapped = N_blacktrapped = NE_blacktrapped = W_blacktrapped = E_blacktrapped = SW_blacktrapped = S_blacktrapped = SE_blacktrapped = 0
  for (var i = 0; i < NW_whiteattacked.length; i++) {
    NW_whitecheckcoord = NW_whitecheckcoord.substr(0, NW_whiteattacked[i] - 1) + '1' + NW_whitecheckcoord.substr(NW_whiteattacked[i]);
  } for (var i = 0; i < N_whiteattacked.length; i++) {
    N_whitecheckcoord = N_whitecheckcoord.substr(0, N_whiteattacked[i] - 1) + '1' + N_whitecheckcoord.substr(N_whiteattacked[i]);
  } for (var i = 0; i < NE_whiteattacked.length; i++) {
    NE_whitecheckcoord = NE_whitecheckcoord.substr(0, NE_whiteattacked[i] - 1) + '1' + NE_whitecheckcoord.substr(NE_whiteattacked[i]);
  } for (var i = 0; i < W_whiteattacked.length; i++) {
    W_whitecheckcoord = W_whitecheckcoord.substr(0, W_whiteattacked[i] - 1) + '1' + W_whitecheckcoord.substr(W_whiteattacked[i]);
  } for (var i = 0; i < E_whiteattacked.length; i++) {
    E_whitecheckcoord = E_whitecheckcoord.substr(0, E_whiteattacked[i] - 1) + '1' + E_whitecheckcoord.substr(E_whiteattacked[i]);
  } for (var i = 0; i < SW_whiteattacked.length; i++) {
    SW_whitecheckcoord = SW_whitecheckcoord.substr(0, SW_whiteattacked[i] - 1) + '1' + SW_whitecheckcoord.substr(SW_whiteattacked[i]);
  } for (var i = 0; i < S_whiteattacked.length; i++) {
    S_whitecheckcoord = S_whitecheckcoord.substr(0, S_whiteattacked[i] - 1) + '1' + S_whitecheckcoord.substr(S_whiteattacked[i]);
  } for (var i = 0; i < SE_whiteattacked.length; i++) {
    SE_whitecheckcoord = SE_whitecheckcoord.substr(0, SE_whiteattacked[i] - 1) + '1' + SE_whitecheckcoord.substr(SE_whiteattacked[i]);
  }
  for (var i = 0; i < NW_blackattacked.length; i++) {
    NW_blackcheckcoord = NW_blackcheckcoord.substr(0, NW_blackattacked[i] - 1) + '1' + NW_blackcheckcoord.substr(NW_blackattacked[i]);
  } for (var i = 0; i < N_blackattacked.length; i++) {
    N_blackcheckcoord = N_blackcheckcoord.substr(0, N_blackattacked[i] - 1) + '1' + N_blackcheckcoord.substr(N_blackattacked[i]);
  } for (var i = 0; i < NE_blackattacked.length; i++) {
    NE_blackcheckcoord = NE_blackcheckcoord.substr(0, NE_blackattacked[i] - 1) + '1' + NE_blackcheckcoord.substr(NE_blackattacked[i]);
  } for (var i = 0; i < W_blackattacked.length; i++) {
    W_blackcheckcoord = W_blackcheckcoord.substr(0, W_blackattacked[i] - 1) + '1' + W_blackcheckcoord.substr(W_blackattacked[i]);
  } for (var i = 0; i < E_blackattacked.length; i++) {
    E_blackcheckcoord = E_blackcheckcoord.substr(0, E_blackattacked[i] - 1) + '1' + E_blackcheckcoord.substr(E_blackattacked[i]);
  } for (var i = 0; i < SW_blackattacked.length; i++) {
    SW_blackcheckcoord = SW_blackcheckcoord.substr(0, SW_blackattacked[i] - 1) + '1' + SW_blackcheckcoord.substr(SW_blackattacked[i]);
  } for (var i = 0; i < S_blackattacked.length; i++) {
    S_blackcheckcoord = S_blackcheckcoord.substr(0, S_blackattacked[i] - 1) + '1' + S_blackcheckcoord.substr(S_blackattacked[i]);
  } for (var i = 0; i < SE_blackattacked.length; i++) {
    SE_blackcheckcoord = SE_blackcheckcoord.substr(0, SE_blackattacked[i] - 1) + '1' + SE_blackcheckcoord.substr(SE_blackattacked[i]);
  }
  for (var i = 0; i < 64; i++) {
    if (NW_whitecheckcoord[i] === "1") {
   NW_whitetrapcoord = NW_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + NW_whitetrapcoord.substr(i + 1);
    } if (N_whitecheckcoord[i] === "1") {
   N_whitetrapcoord = N_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + N_whitetrapcoord.substr(i + 1);
    } if (NE_whitecheckcoord[i] === "1") {
   NE_whitetrapcoord = NE_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + NE_whitetrapcoord.substr(i + 1);
    } if (W_whitecheckcoord[i] === "1") {
   W_whitetrapcoord = W_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + W_whitetrapcoord.substr(i + 1);
    } if (E_whitecheckcoord[i] === "1") {
   E_whitetrapcoord = E_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + E_whitetrapcoord.substr(i + 1);
    } if (SW_whitecheckcoord[i] === "1") {
   SW_whitetrapcoord = SW_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + SW_whitetrapcoord.substr(i + 1);
    } if (S_whitecheckcoord[i] === "1") {
   S_whitetrapcoord = S_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + S_whitetrapcoord.substr(i + 1);
    } if (SE_whitecheckcoord[i] === "1") {
   SE_whitetrapcoord = SE_whitetrapcoord.substr(0, i) + trapped("White","Black", i+1) + SE_whitetrapcoord.substr(i + 1);
    }
    if (NW_blackcheckcoord[i] === "1") {
   NW_blacktrapcoord = NW_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + NW_blacktrapcoord.substr(i + 1);
    } if (N_blackcheckcoord[i] === "1") {
   N_blacktrapcoord = N_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + N_blacktrapcoord.substr(i + 1);
    } if (NE_blackcheckcoord[i] === "1") {
   NE_blacktrapcoord = NE_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + NE_blacktrapcoord.substr(i + 1);
    } if (W_blackcheckcoord[i] === "1") {
   W_blacktrapcoord = W_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + W_blacktrapcoord.substr(i + 1);
    } if (E_blackcheckcoord[i] === "1") {
   E_blacktrapcoord = E_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + E_blacktrapcoord.substr(i + 1);
    } if (SW_blackcheckcoord[i] === "1") {
   SW_blacktrapcoord = SW_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + SW_blacktrapcoord.substr(i + 1);
    } if (S_blackcheckcoord[i] === "1") {
   S_blacktrapcoord = S_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + S_blacktrapcoord.substr(i + 1);
    } if (SE_blackcheckcoord[i] === "1") {
   SE_blacktrapcoord = SE_blacktrapcoord.substr(0, i) + trapped("Black","White", i+1) + SE_blacktrapcoord.substr(i + 1);
    }
  }
  if (NW_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   NW_whitetrapped = 1 
  } if (N_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   N_whitetrapped = 1 
  } if (NE_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   NE_whitetrapped = 1 
  } if (W_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   W_whitetrapped = 1 
  } if (E_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   E_whitetrapped = 1 
  } if (SW_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   SW_whitetrapped = 1 
  } if (S_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   S_whitetrapped = 1 
  } if (SE_whitetrapcoord !== "0000000000000000000000000000000000000000000000000000000000000000") {
   SE_whitetrapped = 1 
  }
  whitetrappattern = NW_whitetrapped.toString() + N_whitetrapped.toString() + NE_whitetrapped.toString() + W_whitetrapped.toString() + E_whitetrapped.toString() + SW_whitetrapped.toString() + S_whitetrapped.toString() + SE_whitetrapped.toString()
   if (NW_whitecheck === 1 || N_whitecheck === 1 || NE_whitecheck === 1 || W_whitecheck === 1 || E_whitecheck === 1 || SW_whitecheck === 1 || S_whitecheck === 1 || SE_whitecheck === 1) {
       document.getElementById("report").innerHTML += "<br>White King in check"
    } if (whitetrappattern === "11111111" || (parseInt(whitetrappattern,2) + parseInt(whitetextpattern,2) === 255 && whitetrappattern !== "00000000")) {
       document.getElementById("report").innerHTML += "<br>White King in checkmate"
      piececolour = "Black Won"
      document.getElementById("piececolour").innerHTML = "Black won"
      document.getElementById("piececolour").style.background = "#000000"
      document.getElementById("piececolour").style.color = "#FFFFFF"
      checkmate = 1
    }
}
function trapped(inverse, colour, trapcoord) {
  console.log(inverse + " trapped:" + trapcoord)
  var trapped_check
  //Immediate Threat
    for (mr1 = 1; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if ((document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr1 + 1) % 8 != "1") {
  trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mr2 = -1; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mr3 = 8; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mr4 = -8; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mb1 = 9; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mb2 = -9; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mb3 = 7; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }} for (mb4 = -7; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      } else {
        trapped_check = 1
      }}
    //Future Threat
    if (((document.getElementById("_" + (trapcoord - 26) + "_").innerHTML === inverse + " Knight" && (trapcoord - 26) % 8 != "7" && (trapcoord - 26) % 8 != "0") || (document.getElementById("_" + (trapcoord - 19) + "_").innerHTML === inverse + " Knight" && (trapcoord - 19) % 8 != "7" && (trapcoord - 19) % 8 != "0") || (document.getElementById("_" + (trapcoord - 15) + "_").innerHTML === inverse + " Knight" && (trapcoord - 15) % 8 != "1") || (document.getElementById("_" + (trapcoord - 3) + "_").innerHTML === inverse + " Knight" && (trapcoord - 3) % 8 != "0" && (trapcoord - 3) % 8 != "7" && (trapcoord - 3) % 8 != "6") || (document.getElementById("_" + (trapcoord + 6) + "_").innerHTML === inverse + " Knight" && (trapcoord + 6) % 8 != "0" && (trapcoord + 6) % 8 != "7") || (document.getElementById("_" + (trapcoord - 24) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord - 9) + "_").innerHTML === "") {
      trapped_check = 0
    }  if (((document.getElementById("_" + (trapcoord - 25) + "_").innerHTML === inverse + " Knight" && (trapcoord - 25) % 8 != "0") || (document.getElementById("_" + (trapcoord - 23) + "_").innerHTML === inverse + " Knight" && (trapcoord - 23) % 8 != "1") || (document.getElementById("_" + (trapcoord - 18) + "_").innerHTML === inverse + " Knight" && (trapcoord - 18) % 8 != "0" && (trapcoord - 18) % 8 != "7") || (document.getElementById("_" + (trapcoord - 14) + "_").innerHTML === inverse + " Knight" && (trapcoord - 14) % 8 != "1" && (trapcoord - 14) % 8 != "2") || (document.getElementById("_" + (trapcoord - 2) + "_").innerHTML === inverse + " Knight" && (trapcoord - 2) % 8 != "0" && (trapcoord - 2) % 8 != "7") || (document.getElementById("_" + (trapcoord + 2) + "_").innerHTML === inverse + " Knight" && (trapcoord + 2) % 8 != "1" && (trapcoord + 2) % 8 != "2")) && document.getElementById("_" + (trapcoord - 8) + "_").innerHTML === "") {
      trapped_check = 0
    } if (((document.getElementById("_" + (trapcoord - 22) + "_").innerHTML === inverse + " Knight" && (trapcoord - 22) % 8 != "1" && (trapcoord - 22) % 8 != "2") || (document.getElementById("_" + (trapcoord - 13) + "_").innerHTML === inverse + " Knight" && (trapcoord - 13) % 8 != "1" && (trapcoord - 13) % 8 != "2" && (trapcoord - 13) % 8 != "3") || (document.getElementById("_" + (trapcoord - 17) + "_").innerHTML === inverse + " Knight" && (trapcoord - 17) % 8 != "0") || (document.getElementById("_" + (trapcoord + 3) + "_").innerHTML === inverse + " Knight" && (trapcoord + 3) % 8 != "1" && (trapcoord + 3) % 8 != "2" && (trapcoord + 3) % 8 != "3") || (document.getElementById("_" + (trapcoord + 10) + "_").innerHTML === inverse + " Knight" && (trapcoord + 10) % 8 != "1" && (trapcoord + 10) % 8 != "2") || (document.getElementById("_" + (trapcoord - 24) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord - 7) + "_").innerHTML === "") {
      trapped_check = 0
    }  if (((document.getElementById("_" + (trapcoord - 18) + "_").innerHTML === inverse + " Knight" && (trapcoord - 18) % 8 != "7" && (trapcoord - 18) % 8 != "0") || (document.getElementById("_" + (trapcoord - 16) + "_").innerHTML === inverse + " Knight") || (document.getElementById("_" + (trapcoord - 11) + "_").innerHTML === inverse + " Knight" && (trapcoord - 11) % 8 != "6" && (trapcoord - 11) % 8 != "7" && (trapcoord - 11) % 8 != "0") || (document.getElementById("_" + (trapcoord + 5) + "_").innerHTML === inverse + " Knight" && (trapcoord + 5) % 8 != "6" && (trapcoord + 5) % 8 != "7" && (trapcoord + 5) % 8 != "0") || (document.getElementById("_" + (trapcoord + 14) + "_").innerHTML === inverse + " Knight" && (trapcoord + 14) % 8 != "7" && (trapcoord + 14) % 8 != "0") || (document.getElementById("_" + (trapcoord + 16) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord - 1) + "_").innerHTML === "") {
      trapped_check = 0
    } if (((document.getElementById("_" + (trapcoord - 14) + "_").innerHTML === inverse + " Knight" && (trapcoord - 14) % 8 != "1" && (trapcoord - 14) % 8 != "2") || (document.getElementById("_" + (trapcoord - 16) + "_").innerHTML === inverse + " Knight") || (document.getElementById("_" + (trapcoord - 5) + "_").innerHTML === inverse + " Knight" && (trapcoord - 5) % 8 != "1" && (trapcoord - 5) % 8 != "2" && (trapcoord - 5) % 8 != "3") || (document.getElementById("_" + (trapcoord + 11) + "_").innerHTML === inverse + " Knight" && (trapcoord + 11) % 8 != "1" && (trapcoord + 11) % 8 != "2" && (trapcoord + 11) % 8 != "3") || (document.getElementById("_" + (trapcoord + 18) + "_").innerHTML === inverse + " Knight" && (trapcoord + 18) % 8 != "1" && (trapcoord + 18) % 8 != "2") || (document.getElementById("_" + (trapcoord + 16) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord + 1) + "_").innerHTML === "") {
      trapped_check = 0
    } if (((document.getElementById("_" + (trapcoord + 22) + "_").innerHTML === inverse + " Knight" && (trapcoord + 22) % 8 != "7" && (trapcoord - 22) % 8 != "0") || (document.getElementById("_" + (trapcoord + 13) + "_").innerHTML === inverse + " Knight" && (trapcoord + 13) % 8 != "6" && (trapcoord + 13) % 8 != "7" && (trapcoord + 13) % 8 != "0") || (document.getElementById("_" + (trapcoord + 17) + "_").innerHTML === inverse + " Knight" && (trapcoord + 17) % 8 != "1") || (document.getElementById("_" + (trapcoord - 3) + "_").innerHTML === inverse + " Knight" && (trapcoord - 3) % 8 != "6" && (trapcoord - 3) % 8 != "7" && (trapcoord - 3) % 8 != "0") || (document.getElementById("_" + (trapcoord - 10) + "_").innerHTML === inverse + " Knight" && (trapcoord - 10) % 8 != "7" && (trapcoord - 10) % 8 != "0") || (document.getElementById("_" + (trapcoord + 24) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord + 7) + "_").innerHTML === "") {
      trapped_check = 0
    }  if (((document.getElementById("_" + (trapcoord + 25) + "_").innerHTML === inverse + " Knight" && (trapcoord + 25) % 8 != "1") || (document.getElementById("_" + (trapcoord + 23) + "_").innerHTML === inverse + " Knight" && (trapcoord + 23) % 8 != "0") || (document.getElementById("_" + (trapcoord + 18) + "_").innerHTML === inverse + " Knight" && (trapcoord + 18) % 8 != "1" && (trapcoord + 18) % 8 != "2") || (document.getElementById("_" + (trapcoord + 14) + "_").innerHTML === inverse + " Knight" && (trapcoord + 14) % 8 != "7" && (trapcoord + 14) % 8 != "0") || (document.getElementById("_" + (trapcoord + 2) + "_").innerHTML === inverse + " Knight" && (trapcoord + 2) % 8 != "1" && (trapcoord + 2) % 8 != "2") || (document.getElementById("_" + (trapcoord - 2) + "_").innerHTML === inverse + " Knight" && (trapcoord - 2) % 8 != "7" && (trapcoord - 2) % 8 != "0")) && document.getElementById("_" + (trapcoord + 8) + "_").innerHTML === "") {
      trapped_check = 0
    } if (((document.getElementById("_" + (trapcoord + 26) + "_").innerHTML === inverse + " Knight" && (trapcoord + 26) % 8 != "1" && (trapcoord + 26) % 8 != "2") || (document.getElementById("_" + (trapcoord + 19) + "_").innerHTML === inverse + " Knight" && (trapcoord + 19) % 8 != "1" && (trapcoord + 19) % 8 != "2") || (document.getElementById("_" + (trapcoord + 15) + "_").innerHTML === inverse + " Knight" && (trapcoord + 15) % 8 != "0") || (document.getElementById("_" + (trapcoord + 3) + "_").innerHTML === inverse + " Knight" && (trapcoord + 3) % 8 != "1" && (trapcoord + 3) % 8 != "2" && (trapcoord + 3) % 8 != "3") || (document.getElementById("_" + (trapcoord - 6) + "_").innerHTML === inverse + " Knight" && (trapcoord - 6) % 8 != "1" && (trapcoord - 6) % 8 != "2") || (document.getElementById("_" + (trapcoord + 24) + "_").innerHTML === inverse + " Knight")) && document.getElementById("_" + (trapcoord + 9) + "_").innerHTML === "") {
      trapped_check = 0
    } 
    for (mr1= -9; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = -9; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = -9; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = -9; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb2 = -9; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = -9; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = -9; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }} 
    for (mr1= -8; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = -8; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mb1 = -8; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = -8; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = -8; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = -8; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }}
    for (mr1= -7; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = -7; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = -7; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = -7; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = -7; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = -7; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = -7; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }} 
    for (mr2 = -1; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = -1; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = -1; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = -1; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = -1; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = -1; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = -1; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }}
    for (mr1= 1; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr3 = 1; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = 1; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = 1; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = 1; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = 1; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = 1; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }}
    for (mr1= 7; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = 7; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = 7; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = 7; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = 7; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = 7; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = 7; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }}
    for (mr1= 8; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = 8; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = 8; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = 8; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb2 = 8; (trapcoord + mb2) % 8 != "0" && document.getElementById("_" + (trapcoord + mb2) + "_").innerHTML == ""; mb2 += -9) {
          if ((document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb2 - 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb2 - 9) % 8 != "0") {
      trapped_check = 0
      }} for (mb3 = 8; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = 8; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }}
    for (mr1= 9; (trapcoord + mr1) % 8 != "1" && document.getElementById("_" + (trapcoord + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr1 + 1) + "_").innerHTML === inverse + " Queen" && (trapcoord + mr1 + 1) % 8 != "1") {
        trapped_check = 0
      }} for (mr2 = 9; (trapcoord + mr2) % 8 != "0" && document.getElementById("_" + (trapcoord + mr2) + "_").innerHTML == ""; mr2 += -1) {
          if ((document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr2 - 1) + "_").innerHTML === inverse + " Queen") && (trapcoord + mr2 - 1) % 8 != "0") {
      trapped_check = 0
      }} for (mr3 = 9; document.getElementById("_" + (trapcoord + mr3) + "_").innerHTML == ""; mr3 += 8) {
          if (document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr3 + 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mr4 = 9; document.getElementById("_" + (trapcoord + mr4) + "_").innerHTML == ""; mr4 += -8) {
          if (document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Rook" || document.getElementById("_" + (trapcoord + mr4 - 8) + "_").innerHTML === inverse + " Queen") {
      trapped_check = 0
      }} for (mb1 = 9; (trapcoord + mb1) % 8 != "1" && document.getElementById("_" + (trapcoord + mb1) + "_").innerHTML == ""; mb1 += 9) {
          if ((document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb1 + 9) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb1 + 9) % 8 != "1") {
      trapped_check = 0
      }} for (mb3 = 9; (trapcoord + mb3) % 8 != "0" && document.getElementById("_" + (trapcoord + mb3) + "_").innerHTML == ""; mb3 += 7) {
          if ((document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb3 + 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb3 + 7) % 8 != "0") {
      trapped_check = 0
      }} for (mb4 = 9; (trapcoord + mb4) % 8 != "1" && document.getElementById("_" + (trapcoord + mb4) + "_").innerHTML == ""; mb4 += -7) {
          if ((document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Bishop" || document.getElementById("_" + (trapcoord + mb4 - 7) + "_").innerHTML === inverse + " Queen") && (trapcoord + mb4 - 7) % 8 != "1") {
      trapped_check = 0
      }}
  return trapped_check
}
function aftercheck() {
  afterproceed = 1
  if (afterproceed === 1) {
  if (piececolour === "Black") {
      if (blackcheckpattern !== NW_blackcheck.toString() + N_blackcheck.toString() + NE_blackcheck.toString() + W_blackcheck.toString() + E_blackcheck.toString() + SW_blackcheck.toString() + S_blackcheck.toString() + SE_blackcheck.toString() && NW_blackcheck.toString() + N_blackcheck.toString() + NE_blackcheck.toString() + W_blackcheck.toString() + E_blackcheck.toString() + SW_blackcheck.toString() + S_blackcheck.toString() + SE_blackcheck.toString() !== "00000000") {
      document.getElementById("_" + prev_square + "_").innerHTML = piece
      document.getElementById("_" + square + "_").innerHTML = prev_inner
      alert("King cannot be moved into check")
      piececolour = "White"
        afterproceed = 0
    } if (blackcheckpattern !== "00000000" && NW_blackcheck.toString() + N_blackcheck.toString() + NE_blackcheck.toString() + W_blackcheck.toString() + E_blackcheck.toString() + SW_blackcheck.toString() + S_blackcheck.toString() + SE_blackcheck.toString() && NW_blackcheck.toString() + N_blackcheck.toString() + NE_blackcheck.toString() + W_blackcheck.toString() + E_blackcheck.toString() + SW_blackcheck.toString() + S_blackcheck.toString() + SE_blackcheck.toString() !== "00000000") {
      document.getElementById("_" + prev_square + "_").innerHTML = piece
      document.getElementById("_" + square + "_").innerHTML = prev_inner
      alert("King must be moved out of check")
      piececolour = "White"
      afterproceed = 0
      }
    } if (piececolour === "White") {
      if (whitecheckpattern !== NW_whitecheck.toString() + N_whitecheck.toString() + NE_whitecheck.toString() + W_whitecheck.toString() + E_whitecheck.toString() + SW_whitecheck.toString() + S_whitecheck.toString() + SE_whitecheck.toString() && NW_whitecheck.toString() + N_whitecheck.toString() + NE_whitecheck.toString() + W_whitecheck.toString() + E_whitecheck.toString() + SW_whitecheck.toString() + S_whitecheck.toString() + SE_whitecheck.toString() !== "00000000") {
      document.getElementById("_" + prev_square + "_").innerHTML = piece
      document.getElementById("_" + square + "_").innerHTML = prev_inner
      alert("King cannot be moved into check")
      piececolour = "Black"
        afterproceed = 0
    } if (whitecheckpattern !== "00000000" && NW_whitecheck.toString() + N_whitecheck.toString() + NE_whitecheck.toString() + W_whitecheck.toString() + E_whitecheck.toString() + SW_whitecheck.toString() + S_whitecheck.toString() + SE_whitecheck.toString() && NW_whitecheck.toString() + N_whitecheck.toString() + NE_whitecheck.toString() + W_whitecheck.toString() + E_whitecheck.toString() + SW_whitecheck.toString() + S_whitecheck.toString() + SE_whitecheck.toString() !== "00000000") {
      document.getElementById("_" + prev_square + "_").innerHTML = piece
      document.getElementById("_" + square + "_").innerHTML = prev_inner
      alert("King must be moved out of check")
      piececolour = "Black"
      afterproceed = 0
      }
    }
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
  aftercheckmate = 0
}
function promote() {
  if (document.getElementById("promote").checked) {
    autopromote = 1
  } else {
    autopromote = 0
  }
  if (piece === "White Pawn" && ((square -1) - (square - 1) % 8) / 8 === 7 && whitepromote === 0 && autopromote === 1) {
        document.getElementById("report").innerHTML += "<br>White Pawn promoted to Queen"
        piece = "White Queen"
        whitepromote = 1
      } if (piece === "Black Pawn" && ((square -1) - (square - 1) % 8) / 8 === 0 && blackpromote === 0 && autopromote === 1) {
        document.getElementById("report").innerHTML += "<br>Black Pawn promoted to Queen"
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
  whitecastle = ""
  blackcastle = ""
  if (document.getElementById("_4_").innerHTML === "White King" && autocastle === 1) {
    for (mr1= 1; (wk + mr1) % 8 != "1" && document.getElementById("_" + (wk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (wk + mr1 + 1) + "_").innerHTML === "White Rook" && wk+mr1+1 === 8) {
        whitecastle += "Queenside "
      }} for (mr2 = -1; (wk + mr2) % 8 != "0" && document.getElementById("_" + (wk + mr2) + "_").innerHTML == ""; mr2 += -1) {
        if (document.getElementById("_" + (wk + mr2 - 1) + "_").innerHTML === "White Rook" && wk+mr2-1 === 1) {
          whitecastle += "Kingside "
      }}
    if ((whitecastle.split(" ")[0] === "Kingside" || whitecastle.split(" ")[1] === "Kingside") && square === 3) {
      confirmcastle = prompt("Do you wish to Castle with this Rook? (Yes / No)")
      if (confirmcastle.toLocaleLowerCase() === "yes") {
        document.getElementById("report").innerHTML += "<br>White Rook castled Kingside"
      document.getElementById("_2_").innerHTML = "White King"
      document.getElementById("_4_").innerHTML = ""
      } if (confirmcastle.toLocaleLowerCase() !== "yes" && confirmcastle.toLocaleLowerCase() !== "no") {
        alert("Invalid Option")
        castle()
      }
    } if ((whitecastle.split(" ")[0] === "Queenside" || whitecastle.split(" ")[1] === "Queenside") && square === 5) {
      confirmcastle = prompt("Do you wish to Castle with this Rook? (Yes / No)")
      if (confirmcastle.toLocaleLowerCase() === "yes") {
        document.getElementById("report").innerHTML += "<br>White Rook castled Queenside"
      document.getElementById("_6_").innerHTML = "White King"
      document.getElementById("_4_").innerHTML = ""
      } if (confirmcastle.toLocaleLowerCase() !== "yes" && confirmcastle.toLocaleLowerCase() !== "no") {
        alert("Invalid Option")
        castle()
      }
    }
  } if (document.getElementById("_60_").innerHTML === "Black King" && autocastle === 1) {
    for (mr1= 1; (bk + mr1) % 8 != "1" && document.getElementById("_" + (bk + mr1) + "_").innerHTML == ""; mr1 += 1) {
      if (document.getElementById("_" + (bk + mr1 + 1) + "_").innerHTML === "Black Rook" && bk+mr1+1 === 64) {
        blackcastle += "Queenside "
      }} for (mr2 = -1; (bk + mr2) % 8 != "0" && document.getElementById("_" + (bk + mr2) + "_").innerHTML == ""; mr2 += -1) {
        if (document.getElementById("_" + (bk + mr2 - 1) + "_").innerHTML === "Black Rook" && bk+mr2-1 === 57) {
          blackcastle += "Kingside "
      }}
    if ((blackcastle.split(" ")[0] === "Kingside" || blackcastle.split(" ")[1] === "Kingside") && square === 59) {
      confirmcastle = prompt("Do you wish to Castle with this Rook? (Yes / No)")
      if (confirmcastle.toLocaleLowerCase() === "yes") {
        document.getElementById("report").innerHTML += "<br>Black Rook castled Kingside"
      document.getElementById("_58_").innerHTML = "Black King"
      document.getElementById("_60_").innerHTML = ""
      } if (confirmcastle.toLocaleLowerCase() !== "yes" && confirmcastle.toLocaleLowerCase() !== "no") {
        alert("Invalid Option")
        castle()
      }
    } if ((blackcastle.split(" ")[0] === "Queenside" || blackcastle.split(" ")[1] === "Queenside") && square === 61) {
      confirmcastle = prompt("Do you wish to Castle with this Rook? (Yes / No)")
      if (confirmcastle.toLocaleLowerCase() === "yes") {
        document.getElementById("report").innerHTML += "<br>Black Rook castled Queenside"
      document.getElementById("_62_").innerHTML = "Black King"
      document.getElementById("_60_").innerHTML = ""
      } if (confirmcastle.toLocaleLowerCase() !== "yes" && confirmcastle.toLocaleLowerCase() !== "no") {
        alert("Invalid Option")
        castle()
      }
    }
  }
}
