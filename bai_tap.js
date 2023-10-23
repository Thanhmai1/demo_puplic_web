var ul = document.getElementsByTagName('ul')[0];
var li = document.createElement('li');
li.appendChild(document.createTextNode("Chủ Nhật"));
li.className = 'white';
ul.appendChild(li);

var firstLi = document.createElement('li');
firstLi.appendChild(document.createTextNode('Thứ 2'));
firstLi.className = 'dark';
ul.insertBefore(firstLi, ul.firstChild);

var listItem = document.querySelectorAll('li');
for(var i = 0; i < listItem.length ; i++){
    listItem[i].className = 'white';
}
var heading = document.querySelector('h1');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItem.length;
var newHeading = headingText + '<span> ' + totalItems + '</span>';
heading.innerHTML = newHeading;