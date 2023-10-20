var msg ;
var lever = 2;
switch(lever){
    case 1:
        msg = 'Good luck on the first test';
        break;
    case 2:
        msg ='Second of three - keep going!';
        break;
    case 3:
        msg = 'Final round, almost three!';
        break;
    default:
        msg = 'Good luck!';
        break;
}
var el = document.getElementById('answer');
el.textContent = msg;