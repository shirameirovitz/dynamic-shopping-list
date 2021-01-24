var h1 = document.createElement("h1");
h1.textContent = "My shopping list";
document.body.append(h1);

const div = document.createElement("div");
document.body.append(div);
const input = document.createElement("input");
const button = document.createElement("button");
const lable = document.createElement("lable");
lable.textContent = "Enter a new item:";
button.textContent = "Add";
div.append(lable);
div.append(input);
div.append(button);

const list = document.createElement("ul");

button.onclick = function () {
  let myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.onclick = function () {
    list.removeChild(listItem);
  };
};
document.body.append(list);
