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
    for (cc = 0; cc < 32; cc++) {
      classA = document.getElementsByClassName("A")[cc]
      classA.style.backgroundColor = A
      if (classA.innerHTML === " "){
        classA.innerHTML = ""
      }
    } for (cc = 0; cc < 32; cc++) {
      classB = document.getElementsByClassName("B")[cc]
      classB.style.backgroundColor = B
      if (classB.innerHTML === " "){
    classB.innerHTML = ""
      }
    } phase = 0
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
  /*Row 5*/keycontrol(event,'!',document.getElementById('_33_'));keycontrol(event,'"',document.getElementById('_34_'));keycontrol(event,'£',document.getElementById('_35_'));keycontrol(event,'$',document.getElementById('_36_'));keycontrol(event,'%',document.getElementById('_37_'));keycontrol(event,'^',document.getElementById('_38_'));keycontrol(event,'&',document.getElementById('_39_'));keycontrol(event,'*',document.getElementById('_40_'));
  /*Row 6*/keycontrol(event,'Q',document.getElementById('_41_'));keycontrol(event,'W',document.getElementById('_42_'));keycontrol(event,'E',document.getElementById('_43_'));keycontrol(event,'R',document.getElementById('_44_'));keycontrol(event,'T',document.getElementById('_45_'));keycontrol(event,'Y',document.getElementById('_46_'));keycontrol(event,'U',document.getElementById('_47_'));keycontrol(event,'I',document.getElementById('_48_'));
  /*Row 7*/keycontrol(event,'A',document.getElementById('_49_'));keycontrol(event,'S',document.getElementById('_50_'));keycontrol(event,'D',document.getElementById('_51_'));keycontrol(event,'F',document.getElementById('_52_'));keycontrol(event,'G',document.getElementById('_53_'));keycontrol(event,'H',document.getElementById('_54_'));keycontrol(event,'J',document.getElementById('_55_'));keycontrol(event,'K',document.getElementById('_56_'));
  /*Row 8*/keycontrol(event,'Z',document.getElementById('_57_'));keycontrol(event,'X',document.getElementById('_58_'));keycontrol(event,'C',document.getElementById('_59_'));keycontrol(event,'V',document.getElementById('_60_'));keycontrol(event,'B',document.getElementById('_61_'));keycontrol(event,'N',document.getElementById('_62_'));keycontrol(event,'M',document.getElementById('_63_'));keycontrol(event,'<',document.getElementById('_64_'));
  keycontrol(event,'Backspace',document.getElementById('resetTurn'));
  }
}
