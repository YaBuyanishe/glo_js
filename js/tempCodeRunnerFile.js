const date = new Date().getTime(),
      dateDeadline = new Date('31 march 2021').getTime(),
      timeRemaining = (dateDeadline - date) / 1000,

      days = Math.floor(timeRemaining / 24),
      hours = Math.floor(timeRemaining / 60 / 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      seconds = Math.floor(timeRemaining % 60);

console.log(days);