const schedule = {
  "2026-06-15": [
    {
      title: "信仰",
      time: "14:00",
      tag: "红色经典"
    },
    {
      title: "美猴王·一念齐天",
      time: "19:30",
      tag: "神话史诗"
    }
  ],

  "2026-06-16": [
    {
      title: "信仰",
      time: "14:00",
      tag: "红色经典"
    }
  ],

  "2026-06-17": [
    {
      title: "美猴王·一念齐天",
      time: "19:30",
      tag: "神话史诗"
    }
  ]
};

const daysContainer =
document.getElementById("days");

for(let i=1;i<=30;i++){

  const day =
  document.createElement("div");

  day.className="day";

  day.innerText=i;

  day.onclick=()=>{
      showSchedule(
      `2026-06-${String(i).padStart(2,"0")}`
      );
  }

  daysContainer.appendChild(day);
}

function showSchedule(date){

    document.getElementById(
      "selectedDate"
    ).innerText=date;

    const showList =
    document.getElementById(
      "showList"
    );

    showList.innerHTML="";

    const shows=schedule[date];

    if(!shows){

        showList.innerHTML=
        "<p>当天暂无演出</p>";

        return;
    }

    shows.forEach(show=>{

        showList.innerHTML += `
        <div class="show-card">

            <div class="tag">
            ${show.tag}
            </div>

            <h3>
            ${show.title}
            </h3>

            <p>
            演出时间：${show.time}
            </p>

        </div>
        `;
    });
}