import { DragNDropElements } from "../dragNDropElements/dragNDropElements.js";
import { Gfpp } from "../GFPP/gfpp.js";
import { Resizable } from "../Resize/Resize.js";
import { hideFloatingPanels } from "../../modules/FloatingPanel/FloatingPanel.js";
import { updateSectionActionsTop } from "../sectionActions/sectionActions.js";
import { showAddSection } from "../AddSection/AddSection.js";

import { appendStyles } from "../../styles/EditorStyles.js";

appendStyles(`modules/SelectionModel/SelectionModel.css`);

export function select(eleme) {
  deselectAll();
  !eleme.classList.contains("selected") && eleme.classList.add("selected");
  !eleme.classList.contains(".section") &&
    eleme.closest(".section")?.classList.add("parent-select");
  state.selectedElement = eleme;
  state.hoveredSection = eleme.closest(".section");

  //If onElementSelect function is defined somewhere trigger it

  window.onElementSelect &&
    window.onElementSelect.apply({
      eleme: eleme,
      elemeId: eleme.id,
    });

  hideFloatingPanels();
}

export function hoverOn(eleme, pageY) {
  const event = new Event("hovered");
  eleme.dispatchEvent(event);
  eleme.classList.add("hovered");
  showAddSection(eleme, pageY);
}

export function deselect(eleme) {
  eleme?.classList.remove("hovered");
  let gfpp = eleme.querySelector("#gfpp");
  gfpp && gfpp.classList.remove("show");
}
export function deselectAll() {
  let elemContainers = document.querySelectorAll(
    "#stage .element-container:not(.section)"
  );
  let sections = document.querySelectorAll(".element-container.section");
  sections.forEach((section) => {
    section.classList.remove("selected");
    section.classList.remove("hovered");
    section.classList.remove("parent-select");
    section.contentEditable = false;
  });
  elemContainers.forEach((elem) => {
    elem.classList.remove("selected");
    elem.classList.remove("hovered");
    elem.contentEditable = false;
  });
  document
    .querySelectorAll(".gfpp-btn, .hpp-btn, .main-action")
    .forEach((act) => act.classList.remove("selected"));
}

export function deselectAllChildren() {
  let elemContainers = document.querySelectorAll(
    "#stage .element-container:not(.section)"
  );
  elemContainers.forEach((elem) => {
    elem.classList.remove("selected");
    elem.classList.remove("hovered");
    elem.contentEditable = false;
  });
  document
    .querySelectorAll(".gfpp-btn, .hpp-btn, .main-action")
    .forEach((act) => act.classList.remove("selected"));
}

export function selectionModel(state, setState) {
  let elemContainers = document.querySelectorAll(
    ".element-container:not(.section)"
  );
  elemContainers.forEach((eleme) =>
    eleme.addEventListener("stageElement", () => {
      DragNDropElements(state, setState);
      Resizable(state, setState);
      selectionModel(state, setState);
      Gfpp(state, setState);
    })
  );

  let sections = document.querySelectorAll(".section");

  sections.forEach(
    (section) =>
      (section.onmouseenter = (e) => {
        hoverOn(section, e.pageY);
        updateSectionActionsTop(state);

        const editor = document.querySelector("#editor");
      })
  );

  sections.forEach((section) =>
    section.addEventListener("hovered", (e) => {
      state.hoveredSection = e.target;
    })
  );

  sections.forEach((section) => {
    const type = section.getAttribute("type");
    section.insertAdjacentHTML(
      "afterbegin",
      `<div class="attach-banner" class="${type}">
   Attach to ${type}
    </div>`
    );
  });

  sections.forEach(
    (section) =>
      (section.onclick = (e) => {
        if (!e.target.closest(".floating-panel"))
          document
            .querySelectorAll(".floating-panel")
            .forEach((frame) => frame.classList.remove("active"));
        document
          .querySelectorAll(".gfpp .selected")
          .forEach((gfpp) => gfpp.classList.remove("selected"));
        if (
          e.target.closest(".element-container:not(.section)") &&
          !e.target.closest("#gfpp")
        ) {
          let elem = e.target.closest(".element-container:not(.section)");
          deselectAll();
          select(elem);
          document.querySelectorAll(".parent-select").forEach((section) => {
            section.classList.remove("parent-select");
          });
          elem.closest(".section")?.classList.add("parent-select");
        } else {
          deselectAll();
          document
            .querySelectorAll(".gfpp-btn, .hpp-btn, .main-action")
            .forEach((act) => act.classList.remove("selected"));

          elemContainers.forEach((elem) => {
            elem.classList.remove("selected");
            elem.contentEditable = false;
          });

          document
            .querySelectorAll(".element-container:not(.section)")
            .forEach((eleme) => {
              eleme.classList.remove("clicked");
            });

          document
            .querySelectorAll(".element-container.section")
            .forEach((section) => {
              section.classList.remove("parent-select");
              section.classList.remove("hovered");
            });
          !section.classList.contains("selected") && select(section);
        }
      })
  );

  elemContainers.forEach(
    (elementContainer) =>
      (elementContainer.onclick = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        hideFloatingPanels();
        if (
          e.target.closest(".element-container:not(.section)") &&
          !e.target.closest("#gfpp")
        ) {
          let elem = e.target.closest(".element-container:not(.section)");
          deselectAll();
          select(elem);
          document.querySelectorAll(".parent-select").forEach((section) => {
            section.classList.remove("parent-select");
          });
          elem.closest(".section")?.classList.add("parent-select");
        } else {
          deselectAll();
          document
            .querySelectorAll(".gfpp-btn, .hpp-btn, .main-action")
            .forEach((act) => act.classList.remove("selected"));

          elemContainers.forEach((elem) => {
            elem.classList.remove("selected");
            elem.contentEditable = false;
          });

          document
            .querySelectorAll(".element-container:not(.section)")
            .forEach((eleme) => {
              eleme.classList.remove("clicked");
            });

          document
            .querySelectorAll(".element-container.section")
            .forEach((section) => {
              section.classList.remove("parent-select");
              section.classList.remove("hovered");
            });
          !section.classList.contains("selected") &&
            section.classList.add("selected");
        }
      })
  );
}
