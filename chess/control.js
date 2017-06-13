var A = "#BAF7F9"
function resetTurn() {
  phase = 0
  phase_0()
}
function phase_0() {
  if (phase === 0){
    for(var i = 0, i = 64, i = i + 1) {
      if (document.getElementById("_" + i + "_").class === "A"){
    document.getElementById("_" + i + "_").style.backgroundColor = A
    }
        }
        }
