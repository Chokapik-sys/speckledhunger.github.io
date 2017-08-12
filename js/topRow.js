var update = setInterval(updatesize, 1)
var fontheight = 29
function updatesize() {
  document.getElementById("box").style.width = document.getElementById("title").offsetWidth + "px"
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - (document.getElementById("box").style.width.replace("px", ""))) + "px"
  document.getElementById("box").style.height = window.innerHeight * (60/678) + "px";document.getElementById("topRow").style.height = window.innerHeight * (60/678) + "px"
  if (document.getElementById("title").offsetWidth / parseInt(document.getElementById("title").style.fontSize) != 11.551724137931034) {
    if (document.getElementById("title").offsetWidth / parseInt(document.getElementById("title").style.fontSize) > 11.551724137931034) {
      fontheight += 1
      break
    } if (document.getElementById("title").offsetWidth / parseInt(document.getElementById("title").style.fontSize) < 11.551724137931034) {
      fontheight -= 1
      break
      }
  }
  document.getElementById("title").style.fontSize = fontheight + "px"
}
