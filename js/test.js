alert("Welcome to the Games site");
alert("Feel free to browse...");

function randomIframe(obj){
var ends = new Array();
ends[0] = "https://scratch.mit.edu/projects/embed/89672994/";
ends[1] = "https://scratch.mit.edu/projects/embed/115608650/";
ends[2] = "https://scratch.mit.edu/projects/embed/112865991/";

var i = Math.round(Math.random()*ends.length-1);

obj.location.replace(ends[i]);

}
