var currentDate = new Date();
new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
var currentDay = currentDate.getDay();

console.log(currentDay);

const hours = ["CLOSED", "Open: 8:00 AM - 6:00 PM", "Open: 8:00 AM - 6:00 PM", "Open: 8:00 AM - 6:00 PM", "Open: 8:00 AM - 6:00 PM", "Open: 8:00 AM - 6:00 PM", "CLOSED"];
var setHour = hours[currentDay];
console.log(setHour);

let shopHour = document.createElement("p");
const divText = document.createTextNode(setHour);
shopHour.appendChild(divText);

let hourDiv = document.querySelector('#shop_hour');
hourDiv.appendChild(shopHour);




