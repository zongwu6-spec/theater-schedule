let currentMonth = 5;
let currentYear = 2026;

const monthTitle =
document.getElementById("monthTitle");

const calendarGrid =
document.getElementById("calendarGrid");

render();

document
.getElementById("prevMonth")
.onclick=()=>{

currentMonth--;

if(currentMonth<0){
currentMonth=11;
currentYear--;
}

render();
};

document
.getElementById("nextMonth")
.onclick=()=>{

currentMonth++;

if(currentMonth>11){
currentMonth=0;
currentYear++;
}

render();
};

function render(){

calendarGrid.innerHTML="";

monthTitle.innerText =
`${currentYear} 年 ${currentMonth+1} 月`;

const firstDay =
new Date(currentYear,currentMonth,1);

const startDay =
firstDay.getDay();

const daysInMonth =
new Date(
currentYear,
currentMonth+1,
0
).getDate();

for(let i=0;i<startDay;i++){

calendarGrid.appendChild(
createDay("")
);

}

for(let day=1;day<=daysInMonth;day++){

const cell =
createDay(day);

calendarGrid.appendChild(cell);

const dateString =
`${currentYear}-${String(currentMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

if(labels[dateString]){

const tag =
document.createElement("div");

tag.className =
`tag ${labels[dateString].type}`;

tag.innerText =
labels[dateString].text;

cell.appendChild(tag);

}

events.forEach(event=>{

if(
dateString===event.start
){

const bar =
document.createElement("div");

bar.className =
`event-bar event-${event.type}`;

bar.innerText =
event.title;

cell.appendChild(bar);

}

});

}

}

function createDay(day){

const div =
document.createElement("div");

div.className="day";

if(day===""){
return div;
}

const today = new Date();

const isToday =
today.getFullYear()===currentYear &&
today.getMonth()===currentMonth &&
today.getDate()===day;

if(isToday){

div.innerHTML =
`<span class="today">${day}</span>`;

}else{

div.innerHTML =
`<div class="date">${day}</div>`;

}

return div;

}
