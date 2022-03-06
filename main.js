// create the dateTime Var
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)

// display the dateTime Var
document.getElementById('dateJS').textContent = `Today is ${dateTime}`;