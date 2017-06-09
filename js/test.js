alert("Welcome to the Games site");
alert("Feel free to browse...");

function randomIframe(obj){
var scratch = new Array();
scratch[0] = "https://scratch.mit.edu/projects/embed/89672994/";
scratch[1] = "https://scratch.mit.edu/projects/embed/115608650/";
scratch[2] = "https://scratch.mit.edu/projects/embed/112865991/";
scratch[3] = "https://scratch.mit.edu/projects/embed/107013115/";
scratch[4] = "https://scratch.mit.edu/projects/embed/78398634/";
scratch[5] = "https://scratch.mit.edu/projects/embed/107164872/";
scratch[6] = "https://scratch.mit.edu/projects/embed/79228120/";
scratch[7] = "https://scratch.mit.edu/projects/embed/102646753/";
scratch[8] = "https://scratch.mit.edu/projects/embed/102486065/";

var i = Math.round(Math.random()*scratch.length-1);

obj.location.replace(scratch[i]);

}
