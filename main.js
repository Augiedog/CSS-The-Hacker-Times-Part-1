// crate dateTime VAR
var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)

// display the dateTime Var
document.getElementById('dateJS').textContent = `Today is ${dateTime}`;