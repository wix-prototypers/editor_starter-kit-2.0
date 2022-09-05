import { appendStyles } from "../../styles/EditorStyles.js";
appendStyles(`modules/Gridlines/Gridlines.css`);

/**
 * Create Gridlines and append to every section
 * @param {object} state
 * @param {function} setState
 */

export const GridLines = (state, setState) => {
  let sections = document.querySelectorAll("#stage .section");
  setTimeout(() => {
    //wait for all sections
    sections.forEach((section, i) => {
      section.id = `s${i}`;
      const height = section.getBoundingClientRect().height;
      let GridLinesContainer = `
    <div class="gridLines" style="position:absolute; left:calc(50% - 490px);">
    <svg width="980" height="${height}" viewBox="0 0 981 ${
        height - 2
      }" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M980.5 0V${height}" stroke="white"/>
    <path d="M0.5 0V${height}" stroke="white"/>
    <path d="M980.5 0V${height}" stroke="black" stroke-width="0.5" stroke-dasharray="5 5"/>
    <path d="M0.5 0V${height}" stroke="black" stroke-width="0.5" stroke-dasharray="5 5"/>
    </svg>
    </div>
    `;

      section.insertAdjacentHTML("afterbegin", GridLinesContainer);
    });
  }, 1000);
};
