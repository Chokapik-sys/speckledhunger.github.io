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
        } if (autopromote = 1 && (whitecastle.split(" ")[0] === "Kingside" || whitecastle.split(" ")[1] === "Kingside")) {
          document.getElementById("_5_").style.backgroundColor = "#FFF370"
        } if (autopromote = 1 && (whitecastle.split(" ")[0] === "Queenside" || whitecastle.split(" ")[1] === "Queenside")) {
          document.getElementById("_3_").style.backgroundColor = "#FFF370"
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
      changecolour()
      promote()
      document.getElementById("_" + square + "_").innerHTML = piece
      document.getElementById("_" + prev_square + "_").innerHTML = prev_inner
      console.log(piececolour)
      phase_change()
      phase_4()
      king()
    } if (document.getElementById("_" + square + "_").style.backgroundColor == "rgb(255, 132, 102)") {
      changecolour()
      promote()
      piecetaken = document.getElementById("_" + square + "_").innerHTML
      document.getElementById("_" + square + "_").innerHTML = piece
      document.getElementById("_" + prev_square + "_").innerHTML = prev_inner
      document.getElementById("report").innerHTML += "<br>" + piecetaken + " has been taken by " + piece
      console.log(piececolour)
      phase_change()
      phase_4()
      king()
    }
  }
  //end of phase3
}
function phase_change(){
  if (phase === 4) {
      phase = 0
      } else {
        phase = phase + 1
      }
  console.log(constant2 + phase)
}
//row1
function coord1(){
  square =  1 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord2(){
  square =  2 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord3(){
  square =  3 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord4(){
  square =  4 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord5(){
  square =  5 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord6(){
  square =  6 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord7(){
  square =  7 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord8(){
  square =  8 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row2
function coord9(){
  square =  9 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord10(){
  square =  10 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord11(){
  square =  11 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord12(){
  square =  12 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord13(){
  square =  13 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord14(){
  square =  14 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord15(){
  square =  15 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord16(){
  square =  16 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row3
function coord17(){
  square =  17 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord18(){
  square =  18 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord19(){
  square =  19 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord20(){
  square =  20 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord21(){
  square =  21 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord22(){
  square =  22 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord23(){
  square =  23 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord24(){
  square =  24 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row4
function coord25(){
  square =  25 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord26(){
  square =  26 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord27(){
  square =  27 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord28(){
  square =  28 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord29(){
  square =  29 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord30(){
  square =  30 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord31(){
  square =  31 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord32(){
  square =  32 
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
//row5
function coord33(){
  square =  33 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord34(){
  square =  34 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord35(){
  square =  35 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord36(){
  square =  36 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord37(){
  square =  37 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord38(){
  square =  38 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord39(){
  square =  39 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord40(){
  square =  40 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row6
function coord41(){
  square =  41 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord42(){
  square =  42 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord43(){
  square =  43 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord44(){
  square =  44 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord45(){
  square =  45 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord46(){
  square =  46 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord47(){
  square =  47 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord48(){
  square =  48 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row7
function coord49(){
  square =  49 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord50(){
  square =  50 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord51(){
  square =  51 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord52(){
  square =  52 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord53(){
  square =  53 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord54(){
  square =  54 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord55(){
  square =  55 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord56(){
  square =  56 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row8
function coord57(){
  square =  57 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord58(){
  square =  58 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord59(){
  square =  59 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord60(){
  square =  60 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord61(){
  square =  61 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord62(){
  square =  62 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord63(){
  square =  63 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord64(){
  square =  64 
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
