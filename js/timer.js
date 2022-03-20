let interval;

const updateClock = () => {
    const timerBlock = document.querySelector('.timer__time'),
          deadline = '31 march 2022',

          date = new Date().getTime(),
          dateDeadline = new Date(deadline).getTime(),
          timeRemaining = (dateDeadline - date) / 1000,

          days = Math.floor(timeRemaining / 60 / 60 / 24),
          hours = Math.floor((timeRemaining / 60 / 60) % 24),
          minutes = Math.floor((timeRemaining / 60) % 60),
          seconds = Math.floor(timeRemaining % 60),

          formateT = timer => (timer < 10 ? `0${timer}` : timer);

    timerBlock.textContent = `${formateT(days)}:${formateT(hours)}:${formateT(minutes)}:${formateT(seconds)}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `Акция завершилась!`; 
    }
};

updateClock();

interval = setInterval(updateClock, 500);
