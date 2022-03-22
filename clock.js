const clock = () => {
    const goal = new Date("2023-01-01 00:00:00");
    const start = new Date();

    left = goal.getTime() - start.getTime();

    let sec = Math.floor(left/1000)%60;
    let min = Math.floor(left/1000/60)%60;
    let hours = Math.floor(left/1000/60/60)%24;
    let days = Math.floor(left/1000/60/60/24);
    
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hours = hours < 10 ? "0" + hours : hours;
    days = days < 10 ? "0" + days : days;
    
    let time =`残り${days}日　${hours}:${min}:${sec}`;
    
    document.querySelector(".clock-time").innerText = time;

};

setInterval(clock,1000);