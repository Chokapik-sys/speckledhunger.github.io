var capture = 0
var balckcheck = 0
function phase_2() {
  if (phase === 2) {
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML === "Black King" && (parseInt(square.replace("_", "")) + 9) % 8 != "0"){
      blackcheck = 1
      console.log("Black King in check")
    }
    else if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
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
