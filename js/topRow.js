var update = setInterval(updatesize, 100)
var wide = document.getElementById("title")
function updatesize() {
  document.getElementById("box").style.width = wide.offsetWidth
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - (document.getElementById("box").style.width - "px")) + "px"
}
