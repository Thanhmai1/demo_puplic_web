
function calculateTotal() {
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var total = price * quantity;
    if (total >= 100) {
        // Hiển thị màu xanh
        document.getElementById('total').className = 'green-text';
        // Giảm giá 5%
        total = total * 0.95;
    } else {
        // Hiển thị màu đỏ
        document.getElementById('total').className = 'red-text';
    }
    // Hiển thị tổng tiền
    document.getElementById('total').textContent = 'Tổng tiền: ' + total.toFixed(2);
}
function displayCurrentTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var colors = [ 'green', 'red']; 
    setInterval(function() {
        var date = new Date();
        var timeString = date.toLocaleTimeString();
        currentTimeElement.textContent = 'Giờ hiện tại: ' + timeString;
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        currentTimeElement.style.color = randomColor;
    }, 400); 
}
displayCurrentTime();
document.getElementById('price').addEventListener('input', calculateTotal);
document.getElementById('quantity').addEventListener('input', calculateTotal);
calculateTotal();
