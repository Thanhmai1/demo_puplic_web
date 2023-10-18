var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 0){
    greeting ='Good Morning!';
    className ="morning";
}
else if (hourNow > 12){
    greeting = 'Good afternoon!';
    className = "afternoon";
}
else if (hourNow > 18){
    greeting = 'Good evening!';
    className = "evening";
}
else {
    greeting = 'Welcome';
    className = "default";
}
var el = document.getElementById('main');
el.textContent = greeting;
el.className = className;
// el.textContent = greeting;
// var color = document.getElementsByClassName('time')
// color.className= "blue"; 
// document.write('<h3>' + greeting + '</h3>');