var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability : function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
    elName.textContent = hotel.name;
var elRoom = document.getElementById('rooms');
    elRoom.textContent = hotel.checkAvailability();