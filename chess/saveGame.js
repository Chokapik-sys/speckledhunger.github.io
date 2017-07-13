var expire = new Date()
function save() {
  document.cookie = "_1_ =" + document.getElementById("_1_").innerHTML + "; expires=" + (expire.getTime() + 1000 * 36000) + ";"
}
