import { hoverOn, select } from "../SelectionModel/SelectionModel.js";
import { appendStyles } from "../../styles/EditorStyles.js";
appendStyles(`src/modules/AddSection/add-section.css`);

export const AddSection = (state, setState) => {
  /**
   * Create Add Section Element and add after sections
   * @param {object} elem
   * @returns {undefined}
   */

  let sections = document.querySelectorAll("#stage .section");
  sections.forEach((section, i) => {
    //Add SectionButton
    section.id = `s${i}`;

    let AddSection = `<div class="Add-Section" section="${section.getAttribute(
      "type"
    )}" id="a${section.id.replace("s", "")}"></div>
    
    <div class="Resize-Handle" section="${section.getAttribute(
      "type"
    )}" id="a${section.id.replace("s", "")}"></div>`;

    section.insertAdjacentHTML("afterend", AddSection);

    document.querySelectorAll(`.Add-Section`).forEach((addSection) => {
      addSection.onmouseover = (e) => {
        let id = e.target.closest(".Add-Section").id;
        let secIndex = "s" + id.split("a")[1];
        let section = document.querySelector(`#${secIndex}`);
        !section.classList.contains("selected") && hoverOn(section);
      };

      addSection.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.stopImmediatePropagation();

        stage.classList.remove("hide-ph");
        let id = e.target.closest(".Add-Section").id;
        setState(state, "leftPanel", "sections");
      };
    });
  });
};

export const showAddSection = (section, pageY) => {
  document.querySelector(".Add-Section.show")?.classList.remove("show");
  const addSectionButton = document.querySelector(
    `.Add-Section#${section.id.replace("s", "a")}`
  );
  if (!section.classList.contains("header"))
    addSectionButton?.classList.add("show");

  document.querySelector(".Resize-Handle.show")?.classList.remove("show");
  document
    .querySelector(`.Resize-Handle#${section.id.replace("s", "a")}`)
    ?.classList.add("show");

  if (!document.querySelector(".on-the-move")) {
    section.onmousemove = (e) => {
      const sectionHeight = section.getBoundingClientRect().height;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionCenter = sectionTop + sectionHeight / 2;
      if (addSectionButton && e.pageY > sectionCenter) {
        addSectionButton.style.transform = "translate(0px,0px)";
      } else if (addSectionButton && !state.zoomMode) {
        addSectionButton.style.transform = `translate(0px,-${sectionHeight}px)`;
      } else if (state.zoomMode) {
        addSectionButton.style.transform = `translate(0px,-${
          2 * sectionHeight
        }px)`;
      }
    };
  } else {
    section.onmousemove = null;
  }
};
