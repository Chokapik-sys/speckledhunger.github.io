var piecetaken = ""
var pawnmove = 0
var knightmove = 0
var rookmove = 0
var bishopmove = 0
var queenmove = 0
var kingmove = 0
var mb1 = 9
var mb2 = -9
var mb3 = 7
var mb4 = -7
var mr1 = 1
var mr2 = -1
var mr3 = 8
var mr4 = -8
var square = "0"
var prev_square = 0
var piece = ""
var prev_inner = ""
var phase = 0
var whitepromote = 0
var blackpromote = 0
var constant1 = "Square: "
var constant2 = "Phase: "
var constant3 = "Moving from: "
function move_piece(){
  if (checkmate === 0) {
  //phase1
  if (phase === 1) {
    king()
    //Blank Square
    if (document.getElementById("_" + square + "_").innerHTML === "" || piececolour[0] !== document.getElementById("_" + square + "_").innerHTML[0]) {
      piece = ""
    }
    //White Pieces
    if (piececolour === "White") {
    if (document.getElementById("_" + square + "_").innerHTML === "White Pawn") {
      if (document.getElementById("_" + (square + 8) + "_").innerHTML === ""){
        document.getElementById("_" + (square + 8) + "_").style.backgroundColor = "#FFF370"
        pawnmove = 1
     if (document.getElementById("_" + (square + 16) + "_").innerHTML === "" && ((square - 1) - (((square) - 1) % 8)) / 8 == "1"){
        document.getElementById("_" + (square + 16) + "_").style.backgroundColor = "#FFF370"
        pawnmove = 1
    }} if (pawnmove === 1) {
      prev_square = square
      console.log(constant3 + prev_square)
    }
      piece = "White Pawn"
  }
     if (document.getElementById("_" + square + "_").innerHTML === "White Knight") {
       if (document.getElementById("_" + (square - 10) + "_").innerHTML === "" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0"){
         document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2"){
         document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2"){
         document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0"){
         document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "" && (square - 17) % 8 != "0"){
         document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "" && (square + 17) % 8 != "1"){
         document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "" && (square - 15) % 8 != "1"){
         document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "" && (square + 15) % 8 != "0"){
         document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (knightmove == 1) {
         prev_square = square
         console.log(constant3 + prev_square)
       }
       piece = "White Knight"
       }
    if (document.getElementById("_" + square + "_").innerHTML === "White Rook") {
        for (mr1 = 1; ((square) + mr1) % 8 != "1" && document.getElementById("_" + (square + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr2 = -1; ((square) + mr2) % 8 != "0" && document.getElementById("_" + (square + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr3 = 8; document.getElementById("_" + (square + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr4 = -8; document.getElementById("_" + (square + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        }
      if (rookmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
      }
      piece = "White Rook"
        }
    if (document.getElementById("_" + square + "_").innerHTML === "White Bishop") {
        for (mb1 = 9; ((square) + mb1) % 8 != "1" && document.getElementById("_" + (square + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb2 = -9; ((square) + mb2) % 8 != "0" && document.getElementById("_" + (square + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb3 = 7; (square + mb3) % 8 != "0" && document.getElementById("_" + (square + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb4 = -7; (square + mb4) % 8 != "1" && document.getElementById("_" + (square + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        }
      if (bishopmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "White Bishop"
        }
    if (document.getElementById("_" + square + "_").innerHTML === "White Queen") {
      for (mr1 = 1; ((square) + mr1) % 8 != "1" && document.getElementById("_" + (square + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr2 = -1; ((square) + mr2) % 8 != "0" && document.getElementById("_" + (square + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr3 = 8; document.getElementById("_" + (square + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr4 = -8; document.getElementById("_" + (square + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb1 = 9; ((square) + mb1) % 8 != "1" && document.getElementById("_" + (square + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb2 = -9; ((square) + mb2) % 8 != "0" && document.getElementById("_" + (square + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb3 = 7; (square + mb3) % 8 != "0" && document.getElementById("_" + (square + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb4 = -7; (square + mb4) % 8 != "1" && document.getElementById("_" + (square + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        }
      if (queenmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "White Queen"
    }
    if (document.getElementById("_" + square + "_").innerHTML === "White King") {
      if (document.getElementById("_" + (square + 8) + "_").innerHTML === "" && S_whitecheck == "0") {
        document.getElementById("_" + (square + 8) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 8) + "_").innerHTML === "" && N_whitecheck == "0") {
        document.getElementById("_" + (square - 8) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 1) + "_").innerHTML === "" && E_whitecheck == "0" && (square + 1) % 8 != "1") {
        document.getElementById("_" + (square + 1) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 1) + "_").innerHTML === "" && W_whitecheck == "0" && (square - 1) % 8 != "0") {
        document.getElementById("_" + (square - 1) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "" && SW_whitecheck == "0" && (square + 7) % 8 != "0") {
        document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "" && NE_whitecheck == "0" && (square - 7) % 8 != "1") {
        document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 9) + "_").innerHTML === "" && SE_whitecheck == "0" && (square + 9) % 8 != "1") {
        document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 9) + "_").innerHTML === "" && NW_whitecheck == "0" && (square - 9) % 8 != "0") {
        document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      }
      if (kingmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "White King"
    }}
    //Black Pieces
    if (piececolour === "Black") {
    if (document.getElementById("_" + square + "_").innerHTML === "Black Pawn") {
      if (document.getElementById("_" + (square - 8) + "_").innerHTML === ""){
        document.getElementById("_" + (square - 8) + "_").style.backgroundColor = "#FFF370"
        pawnmove = 1
     if (document.getElementById("_" + (square - 16) + "_").innerHTML === "" && ((square - 1) - (((square) - 1) % 8)) / 8 == "6"){
        document.getElementById("_" + (square - 16) + "_").style.backgroundColor = "#FFF370"
        pawnmove = 1
    }} if (pawnmove === 1) {
      prev_square = square
      console.log(constant3 + prev_square)
    }
      piece = "Black Pawn"
  }
    if (document.getElementById("_" + square + "_").innerHTML === "Black Knight") {
       if (document.getElementById("_" + (square - 10) + "_").innerHTML === "" && (square - 10) % 8 != "7" && (square - 10) % 8 != "0"){
         document.getElementById("_" + (square - 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 10) + "_").innerHTML === "" && (square + 10) % 8 != "1" && (square + 10) % 8 != "2"){
         document.getElementById("_" + (square + 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 6) + "_").innerHTML === "" && (square - 6) % 8 != "1" && (square - 6) % 8 != "2"){
         document.getElementById("_" + (square - 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 6) + "_").innerHTML === "" && (square + 6) % 8 != "7" && (square + 6) % 8 != "0"){
         document.getElementById("_" + (square + 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 17) + "_").innerHTML === "" && (square - 17) % 8 != "0"){
         document.getElementById("_" + (square - 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 17) + "_").innerHTML === "" && (square + 17) % 8 != "1"){
         document.getElementById("_" + (square + 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square - 15) + "_").innerHTML === "" && (square - 15) % 8 != "1"){
         document.getElementById("_" + (square - 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (square + 15) + "_").innerHTML === "" && (square + 15) % 8 != "0"){
         document.getElementById("_" + (square + 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (knightmove == 1) {
         prev_square = square
         console.log(constant3 + prev_square)
       }
      piece = "Black Knight"
       }
    if (document.getElementById("_" + square + "_").innerHTML === "Black Rook") {
        for (mr1 = 1; ((square) + mr1) % 8 != "1" && document.getElementById("_" + (square + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr2 = -1; ((square) + mr2) % 8 != "0" && document.getElementById("_" + (square + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr3 = 8; document.getElementById("_" + (square + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr4 = -8; document.getElementById("_" + (square + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        }
      if (rookmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "Black Rook"
        }
    if (document.getElementById("_" + square + "_").innerHTML === "Black Bishop") {
        for (mb1 = 9; ((square) + mb1) % 8 != "1" && document.getElementById("_" + (square + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb2 = -9; ((square) + mb2) % 8 != "0" && document.getElementById("_" + (square + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb3 = 7; (square + mb3) % 8 != "0" && document.getElementById("_" + (square + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb4 = -7; (square + mb4) % 8 != "1" && document.getElementById("_" + (square + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        }
      if (bishopmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "Black Bishop"
        }
    if (document.getElementById("_" + square + "_").innerHTML === "Black Queen") {
      for (mr1 = 1; ((square) + mr1) % 8 != "1" && document.getElementById("_" + (square + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (square + mr1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr2 = -1; ((square) + mr2) % 8 != "0" && document.getElementById("_" + (square + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (square + mr2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr3 = 8; document.getElementById("_" + (square + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (square + mr3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr4 = -8; document.getElementById("_" + (square + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (square + mr4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb1 = 9; ((square) + mb1) % 8 != "1" && document.getElementById("_" + (square + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (square + mb1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb2 = -9; ((square) + mb2) % 8 != "0" && document.getElementById("_" + (square + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (square + mb2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb3 = 7; (square + mb3) % 8 != "0" && document.getElementById("_" + (square + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (square + mb3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb4 = -7; (square + mb4) % 8 != "1" && document.getElementById("_" + (square + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (square + mb4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        }
      if (queenmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "Black Queen"
    }
    if (document.getElementById("_" + square + "_").innerHTML === "Black King") {
      if (document.getElementById("_" + (square + 8) + "_").innerHTML === "" && S_blackcheck == "0") {
        document.getElementById("_" + (square + 8) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 8) + "_").innerHTML === "" && N_blackcheck == "0") {
        document.getElementById("_" + (square - 8) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 1) + "_").innerHTML === "" && E_blackcheck == "0" && (square + 1) % 8 != "1") {
        document.getElementById("_" + (square + 1) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 1) + "_").innerHTML === "" && W_blackcheck == "0" && (square - 1) % 8 != "0") {
        document.getElementById("_" + (square - 1) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 7) + "_").innerHTML === "" && SW_blackcheck == "0" && (square + 7) % 8 != "0") {
        document.getElementById("_" + (square + 7) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 7) + "_").innerHTML === "" && NE_blackcheck == "0" && (square - 7) % 8 != "1") {
        document.getElementById("_" + (square - 7) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square + 9) + "_").innerHTML === "" && SE_blackcheck == "0" && (square + 9) % 8 != "1") {
        document.getElementById("_" + (square + 9) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      } if (document.getElementById("_" + (square - 9) + "_").innerHTML === "" && NW_blackcheck == "0" && (square - 9) % 8 != "0") {
        document.getElementById("_" + (square - 9) + "_").style.backgroundColor = "#FFF370"
        kingmove = 1
      }
      if (kingmove == 1) {
        prev_square = square
        console.log(constant3 + prev_square)
      }
      piece = "Black King"
    }}
    phase = 2
  }
  //phase2
  if (phase === 2) {
    phase_2()
  }
  //phase3
  if (phase === 3) {
    if (document.getElementById("_" + square + "_").style.backgroundColor == "rgb(255, 243, 112)") {
      promote()
      castle()
      document.getElementById("_" + square + "_").innerHTML = piece
      document.getElementById("_" + prev_square + "_").innerHTML = prev_inner
      console.log(piececolour)
      phase_change()
      phase_4()
      aftercheckmate = 1
      king()
      changecolour()
    } if (document.getElementById("_" + square + "_").style.backgroundColor == "rgb(255, 132, 102)") {
      promote()
      castle()
      piecetaken = document.getElementById("_" + square + "_").innerHTML
      document.getElementById("_" + square + "_").innerHTML = piece
      document.getElementById("_" + prev_square + "_").innerHTML = prev_inner
      document.getElementById("report").innerHTML += "<br>" + piecetaken + " has been taken by " + piece
      console.log(piececolour)
      phase_change()
      phase_4()
      aftercheckmate = 1
      king()
      changecolour()
    }
    else if (prev_square !== square) {
      resetTurn()
      phase_change()
      move_piece()
    }
  }
  //end of phase3
  }
}
function phase_change(){
  if (phase === 4) {
      phase = 0
      } else {
        phase = phase + 1
      }
  console.log(constant2 + phase)
}
//Load vars
function loadmove(coord){
  square =  parseInt(coord.replace("_", ""))
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
