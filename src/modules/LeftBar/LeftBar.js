//Append Styles
import { appendStyles } from "../../styles/EditorStyles.js";
import { icons } from "./left-bar-icons.js";
appendStyles(`modules/LeftBar/left-bar.css`);

const stage = document.querySelector("#stage");
const body = document.querySelector("body");

/**
 * Create LeftBar
 * @param {object} state
 * @param {function} setState
 * @param {Array} leftBarItems
 */

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
