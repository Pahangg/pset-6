const items = [];

window.onload = function() {
    document.getElementById("add-button").onclick = addItem;
};

const addItem = function() {
  const text = document.getElementById("theInput").value;

  items.push({
    priority: "low",
    complete: false,
    content: text
  });

  document.getElementById("theInput").value = "";

  renderItems();
};

const renderItems = function() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.innerHTML = items[i].content;

    li.append(div);
    list.append(li);
  }
};
