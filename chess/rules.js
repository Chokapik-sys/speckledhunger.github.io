function phase_2() {
  if (piece === "White Pawn") {
    document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
    document.getElementById("_" + (parseInt(square.replace("_", "")) + 7) + "_").style.backgroundColor = "#FF8466"
  }
  phase = 3
  move_piece()
}
