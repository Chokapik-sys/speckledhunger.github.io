confirm("Are you ready to play?")
var age = prompt("What's your age?")
if(age < 13)
{
    console.log("We accept you as a player but please inform your Parent/Guardian that you have registered as a player")
}
else
{
    console.log("We encourage you to play on")
}
var one = prompt ("You are at a party and your friend invites you to leave but your crush invites you to dance. What do you do? \nPress 'a' to go with your friend or press 'b' to go with your crush")
if(one === ("a")){
    console.log ("a")
}
if(one === ("b")){
console.log ("b")
}
