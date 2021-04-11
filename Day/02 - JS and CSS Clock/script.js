const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  
  console.log(seconds);
  secondHand.style.transition = (seconds === 0) ? "none" : "all 0.05s ubic-bezier(0.1, 2.7, 0.58, 1)";

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  minHand.style.transition = (mins === 0) ? "none" : "all 0.05s ubic-bezier(0.1, 2.7, 0.58, 1)"

  const hour = now.getHours();
  const hoursDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  hourHand.style.transition = (hour === 0) ? "none" : "all 0.05s ubic-bezier(0.1, 2.7, 0.58, 1)"
}

setInterval(setDate, 1000);
