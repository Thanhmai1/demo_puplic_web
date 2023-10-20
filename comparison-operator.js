var pass = 50;//khai báo biến
var score = 90;
var hasPassed = score >= pass;
var el = document.getElementById('answer');
el.innerHTML = 'Lever passed : ' +hasPassed;