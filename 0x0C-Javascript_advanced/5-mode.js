/**
 * Changes the DOM with clousures
 *
 * @param      {<type>}  size        The font-size
 * @param      {<type>}  weight      The font-weight
 * @param      {<type>}  transform   The text-transform
 * @param      {<type>}  background  The background color
 * @param      {<type>}  color       The text color
 * @return     {<type>}  CSS Style for the DOM
 */
function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const p = document.createElement("p");
  p.innerText = "Welcome Holberton!";
  document.body.appendChild(p);

  const buttonSpooky = document.createElement("button");
  buttonSpooky.innerText = "Spooky";
  const buttonDark = document.createElement("button");
  buttonDark.innerText = "Dark mode";
  const buttonScream = document.createElement("button");
  buttonScream.innerText = "Scream mode";

  document.body.appendChild(buttonSpooky);
  document.body.appendChild(buttonDark);
  document.body.appendChild(buttonScream);

  buttonSpooky.onclick = spooky;
  buttonDark.onclick = darkMode;
  buttonScream.onclick = screamMode;
}

document.addEventListener("DOMContentLoaded", function(event) {
  main();
});
