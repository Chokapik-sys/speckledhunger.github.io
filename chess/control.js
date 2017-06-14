var i = 0
var A = "#BAF7F9"
function resetTurn() {
  phase = 3
  phase_3()
}
function phase_3() {
  if (phase === 3){
    for (i = 0; i == 64; i++) {
      if (document.getElementById("_" + i + "_").class === "A"){
    document.getElementById("_" + i + "_").style.backgroundColor = "#BAF7F9"
      }
         }
  }
}
