var scrsize = window.innerWidth
if (scrsize != window.innerWidth) {
  document.getElementById("box").style.left =  (0.5 * window.innerWidth) - document.getElementById("title").style.width + "px"
  scrsize = window.innerWidth
}
