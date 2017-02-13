  var num1 = prompt("Pick a number")
  var num2 = prompt("Pick another number")
  var sign = prompt("Choose to multiply (*), add (+), divide (/) or minus (-)")
  var product = 0
  if (sign == "*"){
    product = num1 * num2
  } elif (sign == "+"){
    product = num1 + num2
  } elif (sign == "/"){
    product = num1 / num2
  } elif (sign == "-"){
    product = num1 - num2
  }
alert (num1 + " " + sign + " " + num2 + " " + "=" + " " + product)
