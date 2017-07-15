function phase_1() {
  if (piece === "White Pawn") {
    if  (document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").innerHTML[0] === "B" && (parseInt(square.replace("_", "")) + 9) % 8 != "0"){
      document.getElementById("_" + (parseInt(square.replace("_", "")) + 9) + "_").style.backgroundColor = "#FF8466"
    }
  }
  phase = 2
  move_piece()
}
