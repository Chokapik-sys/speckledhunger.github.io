var scrsize = window.innerWidth
while (true) {
    if (scrsize != window.innerWidth) {
    updatesize()
  }
}
function updatesize() {
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - document.getElementById("title").style.width) + "px"
  scrsize = window.innerWidth
}
