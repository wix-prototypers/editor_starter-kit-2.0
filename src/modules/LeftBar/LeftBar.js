//Append Styles
import { icons } from "./left-bar-icons.js";

var href = `${window.originUrl}/src/modules/LeftBar/left-bar.css`;

let exists = false;
document.querySelectorAll("link").forEach((link) => {
  if (link.getAttribute("href") === href) {
    exists = true;
  }
});
if (!exists) {
  var link = document.createElement("link");
  link.href = href;
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

  
}
const stage = document.querySelector("#stage");
const body = document.querySelector("body");
export const LeftBar = (
  state,
  setState,
  leftBarItems = ["Add", "Sections", "Pages", "Apps", "Design", "Ascend"]
) => {
  let container = document.querySelector("#left-bar");

  container.classList.add("leftbar");
  leftBarItems.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      ` 
  <div class="leftbar-item leftbar-item-${item.toLowerCase()}" id="${item.toLowerCase()}">
  

${icons[item.toLowerCase()]}

  <span class="leftbar-text"> ${
    item === "Ascend"
      ? "My Business"
      : item === "Add"
      ? "Add Elements"
      : item === "Sections"
      ? "Add Sections"
      : item
  } </span>

</div>

`
    );
  });
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="layers-button">
    ${icons.layers}</div>`
  );

  document.querySelectorAll(".leftbar-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      if (
        e.target.closest(".leftbar-item").classList.contains("selected") &&
        document.querySelector("#left-panel.show")
      ) {
        setState(state, "leftPanel", "close");
        setState(state, "zoomMode", false);
        stage.classList.remove("panneled");
        body.classList.remove("panneled");
        return;
      }

      setState(state, "zoomMode", false);
      stage.classList.remove("panneled");
      body.classList.remove("panneled");
      document
        .querySelectorAll(`.leftbar-item.selected`)
        .forEach((selected) => selected.classList.remove("selected"));

      e.target.closest(".leftbar-item").classList.add("selected");
      state.leftPanel = e.target.closest(".leftbar-item").id;
    });
  });
};
