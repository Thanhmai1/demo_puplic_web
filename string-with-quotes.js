var title;
var message;

title = "Molly's Speial offers";
message = '<a href=\"sale.html\">25% off!</a>;
var  elTitle = document.getElementById('title');
elTitle.textContent = title;
var elNote = document.getElementById('noote');
elNote.innerHTML = message;