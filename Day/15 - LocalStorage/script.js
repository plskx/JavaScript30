const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

// buttons
const reset = document.querySelector(".reset");
const checkAll = document.querySelector(".checkAll");
const unCheckAll = document.querySelector(".unCheckAll");

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

checkAll.addEventListener("click", () => {
  items.forEach((item) => {
    item.done = true;
  });

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
});

unCheckAll.addEventListener("click", () => {
  items.forEach((item) => {
    item.done = false;
  });

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
});

populateList(items, itemsList);
