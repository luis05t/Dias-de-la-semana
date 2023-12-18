'use strict'
let week = ['Suday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 
week.shift();
week.unshift("Monday");
week.push("Sunday");
week.splice(4,0, "Friday");
for(let day of week){
    alert(day);
}