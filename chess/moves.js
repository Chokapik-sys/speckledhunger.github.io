var movecount = 1
var square = 0
var phase = 0
var constant1 = "Square: " + square
var constant2 = "Phase: " + phase
function move_piece(){
  if (document.getElementById(square) === "White Rook") {
console.log(parseInt(square))
}
}
function phase_shift() {
  if (not phase === 2) {
    phase = phase + 1
  } if (phase === 2) {
    phase = 0
  }
}
//row1
function coord1(){
  square = "_1_"
  console.log(constant1)
  phase_shift()
  console.log(constant2)
  move_piece()
}
function coord2(){
  square = "_2_"
  console.log(square)
  move_piece()
}
function coord3(){
  square = "_3_"
  console.log(square)
  move_piece()
}
function coord4(){
  square = "_4_"
  console.log(square)
  move_piece()
}
function coord5(){
  square = "_5_"
  console.log(square)
  move_piece()
}
function coord6(){
  square = "_6_"
  console.log(square)
  move_piece()
}
function coord7(){
  square = "_7_"
  console.log(square)
  move_piece()
}
function coord8(){
  square = "_8_"
  console.log(square)
  move_piece()
}
//row2
function coord9(){
  square = "_9_"
  console.log(square)
  move_piece()
}
function coord10(){
  square = "_10_"
  console.log(square)
  move_piece()
}
function coord11(){
  square = "_11_"
  console.log(square)
  move_piece()
}
function coord12(){
  square = "_12_"
  console.log(square)
  move_piece()
}
function coord13(){
  square = "_13_"
  console.log(square)
  move_piece()
}
function coord14(){
  square = "_14_"
  console.log(square)
  move_piece()
}
function coord15(){
  square = "_15_"
  console.log(square)
  move_piece()
}
function coord16(){
  square = "_16_"
  console.log(square)
  move_piece()
}
