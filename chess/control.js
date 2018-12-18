var cc = 1
var cb = 1
var A = "#BAF7F9"
var B = "#D0FFB6"
var charnum = ""
var charcoord = ""
var charsavefile = ""
var focused = 1
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
  charnum = document.getElementById("num").value[document.getElementById("num").value.length - 1]
  charcoord = document.getElementById("coord").value[document.getElementById("coord").value.length - 1]
  charsavefile = document.getElementById("savefile").value[document.getElementById("savefile").value.length - 1]
  if (charnum !== "0" && charnum !== "1" && charnum !== "2" && charnum !== "3" && charnum !== "4" && charnum !== "5" && charnum !== "6" && charnum !== "7" && charnum !== "8" && charnum !== "9") {
      document.getElementById("num").value = document.getElementById("num").value.replace(charnum, "")
  } if (charcoord !== "_" && charcoord !== "0" && charcoord !== "1" && charcoord !== "2" && charcoord !== "3" && charcoord !== "4" && charcoord !== "5" && charcoord !== "6" && charcoord !== "7" && charcoord !== "8" && charcoord !== "9") {
      document.getElementById("coord").value = document.getElementById("coord").value.replace(charcoord, "")
  } if (charsavefile !== "0" && charsavefile !== "1" && charsavefile !== "2" && charsavefile !== "3" && charsavefile !== "4" && charsavefile !== "5" && charsavefile !== "6" && charsavefile !== "7" && charsavefile !== "8" && charsavefile !== "9") {
      document.getElementById("savefile").value = document.getElementById("savefile").value.replace(charsavefile, "")
  }
}
function keycontrol(press,key,square) {
  if (press.key===key){
    square.click()
  }
} function keycontrolmatrix(event) {
  if (focused===1){
  /*Row 1*/keycontrol(event,'1',document.getElementById('_1_'));keycontrol(event,'2',document.getElementById('_2_'));keycontrol(event,'3',document.getElementById('_3_'));keycontrol(event,'4',document.getElementById('_4_'));keycontrol(event,'5',document.getElementById('_5_'));keycontrol(event,'6',document.getElementById('_6_'));keycontrol(event,'7',document.getElementById('_7_'));keycontrol(event,'8',document.getElementById('_8_'));
  /*Row 2*/keycontrol(event,'q',document.getElementById('_9_'));keycontrol(event,'w',document.getElementById('_10_'));keycontrol(event,'e',document.getElementById('_11_'));keycontrol(event,'r',document.getElementById('_12_'));keycontrol(event,'t',document.getElementById('_13_'));keycontrol(event,'y',document.getElementById('_14_'));keycontrol(event,'u',document.getElementById('_15_'));keycontrol(event,'i',document.getElementById('_16_'));
  /*Row 3*/keycontrol(event,'a',document.getElementById('_17_'));keycontrol(event,'s',document.getElementById('_18_'));keycontrol(event,'d',document.getElementById('_19_'));keycontrol(event,'f',document.getElementById('_20_'));keycontrol(event,'g',document.getElementById('_21_'));keycontrol(event,'h',document.getElementById('_22_'));keycontrol(event,'j',document.getElementById('_23_'));keycontrol(event,'k',document.getElementById('_24_'));
  /*Row 4*/keycontrol(event,'z',document.getElementById('_25_'));keycontrol(event,'x',document.getElementById('_26_'));keycontrol(event,'c',document.getElementById('_27_'));keycontrol(event,'v',document.getElementById('_28_'));keycontrol(event,'b',document.getElementById('_29_'));keycontrol(event,'n',document.getElementById('_30_'));keycontrol(event,'m',document.getElementById('_31_'));keycontrol(event,',',document.getElementById('_32_'));
  }
}
