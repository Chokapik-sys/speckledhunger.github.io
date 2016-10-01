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
function get_browser(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
