let container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  container.appendChild(div);
  div.style.cssText =
    "height: 25px; background-color: white; border: 1px solid black; border-radius: 15px;";
  div.addEventListener("mouseover", () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = `#${randomColor}`;
  });
}

let button = document.querySelector("#clearGrid");
button.addEventListener("click", clearGrid);

function clearGrid() {
  container.innerHTML = "";
  let size = prompt("How many squares per side? (enter a number below 100");
  if (size < 101) {
    let numSquares = size * size;
    let height = [399 - 2 * size] / size;

    for (let i = 0; i < numSquares; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
      div.style.cssText = `height: ${height}px; background-color: white; border: 1px solid black; border-radius: 15px;`;
      container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
      container.style["width"] = `400px`;
      div.addEventListener("mouseover", () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        div.style.backgroundColor = `#${randomColor}`;
      });
    }
  } else {
    clearGrid();
  }
}
