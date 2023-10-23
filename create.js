function checkUserName(){
    var userName = el.ariaValueMax;
    if(userName.length < 5){
        elMsg.className = 'Warning';
        elMsg.textContent = 'Not long enough, yet...';
    }
    else{
        elMsg.textContent='';
    }
    function tipUsername(){
        elMsg.className = 'tip';
        elMsg.innerHTML = 'Username must be at least 5 character ';
    }
    var el = document.getElementById('username');
    var elMsg= document.getElementById('feetback');
    el.addEventListener('focus',tipUsername,false);
    el.addEventListener("blur",checkUserName,false);
}