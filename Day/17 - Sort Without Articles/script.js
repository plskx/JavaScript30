const ul = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const removeSomeShits = bands.map((band) => band.replace(/^(the|a|an)\s/i, ""));

const sortedBands = removeSomeShits.sort((a, b) => (a > b ? 1 : -1));

// sortedBands.forEach((band) => {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(band));
//   ul.appendChild(li);
// });

ul.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join("");
