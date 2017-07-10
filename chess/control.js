var cc = 1
var cb = 1
var A = "#BAF7F9"
var B = "#D0FFB6"
function resetTurn() {
  phase = 3
  phase_3()
}
function phase_3() {
  if (phase === 3){
    for (cc = 1; cc < 65; cc++) {
      if (document.getElementById("_" + cc + "_").className === "A"){
    document.getElementById("_" + cc + "_").style.backgroundColor = A
      }
      if (document.getElementById("_" + cc + "_").className === "B"){
    document.getElementById("_" + cc + "_").style.backgroundColor = B
      }
      if (document.getElementById("_" + cc + "_").innerHTML === " "){
    document.getElementById("_" + cc + "_").innerHTML = ""
      }
      phase = 0
    }
  }
}
function clboard(){
  for (cb = 1; cb < 65; cb++) {
    document.getElementById("_" + cb + "_").innnerHTML = "Test"
  }
  resetTurn()
}
