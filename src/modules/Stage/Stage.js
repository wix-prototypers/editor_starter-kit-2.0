import { updateSectionActionsTop } from "../../modules/sectionActions/sectionActions.js";
import { deselect } from "../SelectionModel/SelectionModel.js";
import { appendStyles } from "../../styles/EditorStyles.js";

appendStyles(`modules/Stage/stage.css`);

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
