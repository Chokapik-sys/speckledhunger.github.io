var capture = 0
var blackcheck = 0
function phase_2() {
  if (phase === 2) {
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
    } if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 6) % 8 != "1" && (parseInt(square.replace("_", "")) + 6) % 8 != "2") {
      blackcheck = 1
      console.log("Black King in check")
    } else if (document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 6) % 8 != "1" && (parseInt(square.replace("_", "")) + 6) % 8 != "2") {
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 6) + "_").style.backgroundColor = "#FF8466"
      capture = 1
    }
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
  }
if (capture === 1 || pawnmove === 1 || knightmove === 1 || bishopmove === 1 || rookmove === 1 || queenmove === 1) {
      phase = 3
      prev_square = square
      move_piece()
}  else {
    resetTurn()
  }
  pawnmove = 0
  rookmove = 0
  knightmove = 0
  bishopmove = 0
  queenmove = 0
}
}
