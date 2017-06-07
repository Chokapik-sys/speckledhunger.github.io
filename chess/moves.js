var movecount = 1
var square = 0
function movePiece(){
  if (document.getElementById(square) === "White Rook") {
console.log(parseInt(square))
}
}
//row1
function coord1(){
  square = "_1_"
  console.log(square)
  movePiece()
}
