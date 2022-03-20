const timerBlock = document.querySelector('.timer__time'),
      deadline = '31 march 2022';

let interval;

const updateClock = () => {
    const date = new Date().getTime(),
          dateDeadline = new Date(deadline).getTime(),
          timeRemaining = (dateDeadline - date) / 1000,

          days = Math.floor(timeRemaining / 60 / 60 / 24),
          hours = Math.floor(timeRemaining / 60 / 60 % 24),
          minutes = Math.floor((timeRemaining / 60) % 60),
          seconds = Math.floor(timeRemaining % 60),

          formateD = days < 10 ? '0' + days : days,
          formateH = hours < 10 ? '0' + hours : hours,
          formateM = minutes < 10 ? '0' + minutes : minutes,
          formateS = seconds < 10 ? '0' + seconds : seconds;

    timerBlock.textContent = `${formateD}:${formateH}:${formateM}:${formateS}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `00:00:00:00`; 
    }
};

updateClock();

interval = setInterval(updateClock, 500);
