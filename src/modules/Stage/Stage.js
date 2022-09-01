import { updateSectionActionsTop } from "../../modules/sectionActions/sectionActions.js";

import { deselect } from "../SelectionModel/SelectionModel.js";

//Append Styles
const href = `${window.originUrl}/src/modules/Stage/stage.css`;
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

stage.onscroll = () => {
  updateSectionActionsTop(state);
};

stage.onmouseleave = (e) => {
  if (
    !e.target.closest(".Add-Section") &&
    !e.target.closest(".sectionActions")
  ) {
    document.querySelectorAll(`.Add-Section`).forEach((addSection) => {
      addSection.classList.remove("show");
    });
    document.querySelectorAll(`.Resize-Handle`).forEach((addSection) => {
      addSection.classList.remove("show");
    });
  }
};

editor.onmouseover = (e) => {
  if (
    !e.target.closest(".Add-Section") &&
    !e.target.closest(".sectionActions") &&
    !e.target.closest("#stage")
  ) {
    console.log(e.target);
    document.querySelectorAll(`#sectionActions`).forEach((action) => {
      action.classList.remove("show");
    });
  }
  const hoveredSection = document.querySelector(".section.hovered");
  if (
    !e.target.closest(".sectionActions") &&
    (!e.target.closest("#stage") || e.target.closest(".section"))
  ) {
    hoveredSection && deselect(hoveredSection);
  }
};

export const Stage = (state, setState) => {
  document.onclick = (e) => {};
};
export const zoomMode = (curr, state, setState) => {};
