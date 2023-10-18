function updateGreeting(){
    const greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('time');
    const timeElement2 = document.getElementById('time2');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = '';
    let className = '';
    if (currentHour < 12){
        greeting = 'Chào buổi sáng';
        className = 'morning';
    }
    else if (currentHour < 18){
        greeting ='Chào buổi chiều';
        className = 'afternoon';
    }
    else{
        greeting = 'Chào buổi tối';
        className = 'evening';
    }
    greetingElement.textContent = greeting;
    greetingElement.className = className;
    const timeString =`Thời gian đầy đủ : ${currentTime}`;
    const timeString2 =`Thời gian rút gọn : ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2,'0')}:${String (currentTime.getSeconds()).padStart(2,'0')}`;
    timeElement.textContent = timeString;
    timeElement2.textContent = timeString2;
    secondsElement.textContent = currentTime.getSeconds();
}
setInterval(updateGreeting,1000);
updateGreeting();
function changceColor (){
    const textElement = document.getElementById('text');
    const currenColor = textElement.style.color;
    if(currentColor === 'blue'){
        textElement.style.color ='red';
        textElement.textContent = 'Văn bản màu đỏ rồi sẽ thay màu xanh';
    } else{
        textElement.style.color = 'blue';
        textElement.textContent = 'Văn bản màu xanh rồi sẽ thay màu đỏ';
    }
}
setInterval(changceColor, 1000);