var i = 1
var A = "#BAF7F9"
function resetTurn() {
  phase = 3
  phase_3()
}
function phase_3() {
  if (phase === 3){
    for (i = 1; i < 65; i++) {
      if (document.getElementById("_" + i + "_").className === "A"){
    document.getElementById("_" + i + "_").style.backgroundColor = A
      }
    }
  }
}
