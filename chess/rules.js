function phase_2() {
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML !== "" && (parseInt(square.replace("_", "")) + 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
    }
  }
  phase = 3
  move_piece()
}
