var year = new Date()
function save() {
  document.cookie = "_1_ =" + document.getElementById("_1_").innerHTML + "; expires=" + (year.getFullYear() + 1) + ";"
}
