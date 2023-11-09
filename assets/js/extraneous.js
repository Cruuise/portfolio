var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Ocotber', 'November', 'December'];
var date = new Date();

document.getElementById('test').innerHTML = month[date.getMonth()] + ' ' + date.getUTCFullYear();
