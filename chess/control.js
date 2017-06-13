var A = "#BAF7F9"
function resetTurn() {
  phase = 0
  phase_0()
}
function phase_0() {
  if (phase === 0){
      if (document.getElementById("_" + i + "_").class === "A"){
    document.getElementById("_" + i + "_").style.backgroundColor = A
      }
  }
}
