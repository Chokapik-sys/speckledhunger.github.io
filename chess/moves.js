var movecount = 1
var pawnmove = 0
var knightmove = 0
var rookmove = 0
var bishpmove = 0
var queenmove = 0
var mb1 = 0
var mb2 = 0
var mb3 = 0
var mb4 = 0
var mr1 = 0
var mr2 = 0
var mr3 = 0
var mr4 = 0
var square = "_0_"
var prev_square = 0
var piece = ""
var phase = 0
var constant1 = "Square: "
var constant2 = "Phase: "
var constant3 = "Moving from:"
function move_piece(){
  //phase1
  if (phase === 1) {
    //White Pieces
    if (document.getElementById(square).innerHTML === "White Pawn") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").innerHTML === ""){
    document.getElementById("_" + (parseInt(square.replace("_", "")) + 8) + "_").style.backgroundColor = "#FFF370"
    pawnmove = 1
    } if (((parseInt(square.replace("_", "")) - 1) - (((parseInt(square.replace("_", ""))) - 1) % 8)) / 8 == "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + 16) + "_").innerHTML === "") {
    document.getElementById("_" + (parseInt(square.replace("_", "")) + 16) + "_").style.backgroundColor = "#FFF370"
    pawnmove = 1
    } if (pawnmove == 1) {
      piece = "White Pawn"
      console.log(constant3 + prev_square)
      phase = 2
      pawnmove = 0
    }
  }
     if (document.getElementById(square).innerHTML === "White Knight") {
       if ((parseInt(square.replace("_", "")) % 8 == "7" || parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "7" || parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "2" || parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "2" || parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML = " "
       }
       if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (knightmove == 1) {
         piece = "White Knight"
         prev_square = square
         console.log(constant3 + prev_square)
         phase = 2
         knightmove = 0
       }
       }
    if (document.getElementById(square).innerHTML === "White Rook") {
        for (mr1 = 1; ((parseInt(square.replace("_", ""))) + mr1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr2 = -1; ((parseInt(square.replace("_", ""))) + mr2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr3 = 8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr4 = -8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        }
      if (rookmove == 1) {
        piece = "White Rook"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        rookmove = 0
      }
        }
    if (document.getElementById(square).innerHTML === "White Bishop") {
        for (mb1 = 9; ((parseInt(square.replace("_", ""))) + mb1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb2 = -9; ((parseInt(square.replace("_", ""))) + mb2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb3 = 7; (parseInt(square.replace("_", "")) + mb3) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb4 = -7; (parseInt(square.replace("_", "")) + mb4) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        }
      if (bishopmove == 1) {
        piece = "White Bishop"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        bishopmove = 0
      }
        }
    if (document.getElementById(square).innerHTML === "White Queen") {
      for (mr1 = 1; ((parseInt(square.replace("_", ""))) + mr1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr2 = -1; ((parseInt(square.replace("_", ""))) + mr2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr3 = 8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr4 = -8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb1 = 9; ((parseInt(square.replace("_", ""))) + mb1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb2 = -9; ((parseInt(square.replace("_", ""))) + mb2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb3 = 7; (parseInt(square.replace("_", "")) + mb3) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb4 = -7; (parseInt(square.replace("_", "")) + mb4) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        }
      if (queenmove == 1) {
        piece = "White Queen"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        queenmove = 0
      }
    }
    //Black Pieces
    if (document.getElementById(square).innerHTML === "Black Pawn") {
    if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").innerHTML === ""){
    document.getElementById("_" + (parseInt(square.replace("_", "")) - 8) + "_").style.backgroundColor = "#FFF370"
    piece = "Black Pawn"
    prev_square = square
    console.log(constant3 + prev_square)
    phase = 2
    }
  }
    if (document.getElementById(square).innerHTML === "Black Knight") {
       if ((parseInt(square.replace("_", "")) % 8 == "7" || parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "7" || parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "0") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "2" || parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "2" || parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML = " "
       } if ((parseInt(square.replace("_", "")) % 8 == "1") && (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === "")) {
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML = " "
       }
       if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 10) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 17) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) - 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").innerHTML === ""){
         document.getElementById("_" + (parseInt(square.replace("_", "")) + 15) + "_").style.backgroundColor = "#FFF370"
         knightmove = 1
       } if (knightmove == 1) {
         piece = "Black Knight"
         prev_square = square
         console.log(constant3 + prev_square)
         phase = 2
         knightmove = 0
       }
       }
    if (document.getElementById(square).innerHTML === "Black Rook") {
        for (mr1 = 1; ((parseInt(square.replace("_", ""))) + mr1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr2 = -1; ((parseInt(square.replace("_", ""))) + mr2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr3 = 8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        } for (mr4 = -8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FFF370"
          rookmove = 1
        }
      if (rookmove == 1) {
        piece = "Black Rook"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        rookmove = 0
      }
        }
    if (document.getElementById(square).innerHTML === "Black Bishop") {
        for (mb1 = 9; ((parseInt(square.replace("_", ""))) + mb1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb2 = -9; ((parseInt(square.replace("_", ""))) + mb2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb3 = 7; (parseInt(square.replace("_", "")) + mb3) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        } for (mb4 = -7; (parseInt(square.replace("_", "")) + mb4) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FFF370"
          bishopmove = 1
        }
      if (bishopmove == 1) {
        piece = "Black Bishop"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        bishopmove = 0
      }
        }
    if (document.getElementById(square).innerHTML === "Black Queen") {
      for (mr1 = 1; ((parseInt(square.replace("_", ""))) + mr1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").innerHTML == ""; mr1 += 1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr2 = -1; ((parseInt(square.replace("_", ""))) + mr2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").innerHTML == ""; mr2 += -1) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr3 = 8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").innerHTML == ""; mr3 += 8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mr4 = -8; document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").innerHTML == ""; mr4 += -8) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mr4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb1 = 9; ((parseInt(square.replace("_", ""))) + mb1) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").innerHTML == ""; mb1 += 9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb1) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb2 = -9; ((parseInt(square.replace("_", ""))) + mb2) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").innerHTML == ""; mb2 += -9) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb2) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb3 = 7; (parseInt(square.replace("_", "")) + mb3) % 8 != "0" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").innerHTML == ""; mb3 += 7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb3) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        } for (mb4 = -7; (parseInt(square.replace("_", "")) + mb4) % 8 != "1" && document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").innerHTML == ""; mb4 += -7) {
          document.getElementById("_" + (parseInt(square.replace("_", "")) + mb4) + "_").style.backgroundColor = "#FFF370"
          queenmove = 1
        }
      if (queenmove == 1) {
        piece = "Black Queen"
        prev_square = square
        console.log(constant3 + prev_square)
        phase = 2
        queenmove = 0
      }
    }
  }  
  //phase2
  if (phase === 2) {
    if (document.getElementById(square).style.backgroundColor == "rgb(255, 243, 112)") {
      document.getElementById(prev_square).innerHTML = ""
      document.getElementById(square).innerHTML = piece
      phase_change()
      phase_3()
    }
  }
}
function phase_change(){
  if (phase === 3) {
      phase = 0
      } else {
        phase = phase + 1
      }
  console.log(constant2 + phase)
}
//row1
function coord1(){
  square = "_1_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord2(){
  square = "_2_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord3(){
  square = "_3_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord4(){
  square = "_4_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord5(){
  square = "_5_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord6(){
  square = "_6_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord7(){
  square = "_7_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord8(){
  square = "_8_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row2
function coord9(){
  square = "_9_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord10(){
  square = "_10_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord11(){
  square = "_11_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord12(){
  square = "_12_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord13(){
  square = "_13_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord14(){
  square = "_14_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord15(){
  square = "_15_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord16(){
  square = "_16_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row3
function coord17(){
  square = "_17_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord18(){
  square = "_18_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord19(){
  square = "_19_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord20(){
  square = "_20_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord21(){
  square = "_21_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord22(){
  square = "_22_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord23(){
  square = "_23_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord24(){
  square = "_24_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row4
function coord25(){
  square = "_25_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord26(){
  square = "_26_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord27(){
  square = "_27_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord28(){
  square = "_28_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord29(){
  square = "_29_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord30(){
  square = "_30_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord31(){
  square = "_31_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
function coord32(){
  square = "_32_"
  console.log(constant1 + square)
  if (phase === 0) {
    phase_change()
  }
  move_piece()
}
//row5
function coord33(){
  square = "_33_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord34(){
  square = "_34_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord35(){
  square = "_35_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord36(){
  square = "_36_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord37(){
  square = "_37_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord38(){
  square = "_38_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord39(){
  square = "_39_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord40(){
  square = "_40_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row6
function coord41(){
  square = "_41_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord42(){
  square = "_42_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord43(){
  square = "_43_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord44(){
  square = "_44_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord45(){
  square = "_45_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord46(){
  square = "_46_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord47(){
  square = "_47_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord48(){
  square = "_48_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row7
function coord49(){
  square = "_49_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord50(){
  square = "_50_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord51(){
  square = "_51_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord52(){
  square = "_52_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord53(){
  square = "_53_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord54(){
  square = "_54_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord55(){
  square = "_55_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord56(){
  square = "_56_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
//row8
function coord57(){
  square = "_57_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord58(){
  square = "_58_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord59(){
  square = "_59_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord60(){
  square = "_60_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord61(){
  square = "_61_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord62(){
  square = "_62_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord63(){
  square = "_63_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
function coord64(){
  square = "_64_"
  console.log(constant1 + square)
  if (phase === 0) {
  phase_change()
  }
  move_piece()
}
