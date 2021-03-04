/* input elements */
const range = document.querySelectorAll(".range");
const color = document.querySelector(".color");
const img = document.getElementById("img");

changeSpace = () => {
  range.forEach(() => {
    img.style.padding = `${range[0].value}em`;
  });
}

changeBlur = () => {
  range.forEach(() => {
    img.style.filter = `blur(${range[1].value}px)`;
  });
}

changeColor = () => {
  img.style.backgroundColor = color.value;
}

range[0].addEventListener("change", changeSpace);
range[0].addEventListener("mousemove", changeSpace);
range[1].addEventListener("change", changeBlur);
range[1].addEventListener("mousemove", changeBlur);
color.addEventListener("change", changeColor);