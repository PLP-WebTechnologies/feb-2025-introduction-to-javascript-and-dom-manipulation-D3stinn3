// Change text content and styles
document.getElementById("changeBtn").addEventListener("click", function () {
  const title = document.getElementById("main-title");
  title.textContent = "You changed the title!";
  title.style.color = "darkgreen";
  title.style.fontSize = "2.5rem";
});

// Add or remove a new list item
document.getElementById("toggleBtn").addEventListener("click", function () {
  const list = document.getElementById("list");
  const existing = document.getElementById("new-item");

  if (existing) {
    list.removeChild(existing);
  } else {
    const newItem = document.createElement("li");
    newItem.textContent = "DOM Mastery 🧠";
    newItem.id = "new-item";
    list.appendChild(newItem);
  }
});
