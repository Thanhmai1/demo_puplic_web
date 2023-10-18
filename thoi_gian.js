var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 0){
    greeting ='Good Morning!';
}
else if (hourNow > 12){
    greeting = 'Good afternoon!';
}
else if (hourNow > 18){
    greeting = 'Good evening!';
}
else {
    greeting = 'Welcome';
}
document.write('<h3>' + greeting + '</h3>');