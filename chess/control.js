var i = 1
var A = "#BAF7F9"
function resetTurn() {
  phase = 3
  phase_3()
}
function phase_3() {
  if (phase === 3){
    while (i < 65) {
      i = i + 1
      if (document.getElementById("_" + i + "_").class === "A"){
    document.getElementById("_" + i + "_").style.backgroundColor = A
      }
    }
  }
}
