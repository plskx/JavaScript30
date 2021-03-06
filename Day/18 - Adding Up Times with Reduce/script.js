const h1 = document.querySelector(".h1");

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

// const hours = Math.floor(secondsLeft / 3600);
// secondsLeft = secondsLeft % 3600;

// const mins = Math.floor(secondsLeft / 60);
// secondsLeft = secondsLeft % 60;

// console.log(hours, mins, secondsLeft);

// h1.textContent = `${hours} hrs ${mins} mins ${secondsLeft} mins left`;

const time = new Date(null);
time.setSeconds(17938);
h1.textContent = `${time.toISOString().substr(11, 8)} mins left`;

console.log(`${time.toISOString().substr(11, 8)} mins left`);
