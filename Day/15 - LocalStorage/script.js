const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

// buttons
const reset = document.querySelector(".reset");
const checkAll = document.querySelector(".checkAll");

let items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}"
        ${plate.done ? "checked" : ""}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

reset.addEventListener("click", () => {
  items = [];

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
});

let meow = false;

checkAll.addEventListener("click", () => {
  meow = !meow;
  if (meow) {
    checkAll.textContent = "Uncheck All";
    items.forEach((item) => {
      item.done = true;
    });
  } else {
    checkAll.textContent = "Check All";
    items.forEach((item) => {
      item.done = false;
    });
  }

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
});
