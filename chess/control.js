var cc = 1
var cb = 1
var A = "#BAF7F9"
var B = "#D0FFB6"
var char = ""
function resetTurn() {
  phase = 4
  phase_4()
}
function phase_4() {
  if (phase === 4){
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
function clearboard(){
  for (cb = 1; cb < 65; cb++) {
    document.getElementById("_" + cb + "_").innerHTML = ""
  }
  resetTurn()
  document.getElementById("report").innerHTML = "<b>Attack Log</b>"
  console.clear()
}
function showOption() {
  if (document.getElementById("selectOption").checked) {
    document.getElementById("hiddenOption").style.display = "block"
  } else {
    document.getElementById("hiddenOption").style.display = "none"
  }
}
function checkkey() {
  char = document.getElementById("num").value[document.getElementById("num").value.length - 1]
  if (char !== "0" && char !== "1" && char !== "2" && char !== "3" && char !== "4" && char !== "5" && char !== "6" && char !== "7" && char !== "8" && char !== "9") {
      document.getElementById("num").value = document.getElementById("num").value.replace(char, "")
  }
}
