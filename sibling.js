var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;//lấy phần tử đằng trước startItem
var nextItem = startItem.nextSibling;//lấy phần tử đằng sau startItem
prevItem.className = 'complete';
nextItem.className = 'cool';