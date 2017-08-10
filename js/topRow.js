var starttime = new Date()
for (var endtime = new Date(); endtime.getMilliseconds() > (starttime.getMilliseconds() + 50;)) {
document.getElementById("box").style.left =  (0.5 * window.innerWidth) - document.getElementById("title").style.width + "px"
}
