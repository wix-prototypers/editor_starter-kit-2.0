import {
  deselectAll,
  select,
  deselectAllChildren,
} from "../SelectionModel/SelectionModel.js";

import {
  hideFloatingPanels,
  showPanel,
} from "../../modules/FloatingPanel/FloatingPanel.js";
import { updateSectionActionsTop } from "../sectionActions/sectionActions.js";

var mousePosY = 0;
const TOP_BAR_HEIGHT = 90;
const LEFT_BAR_WIDTH = 58;
const stage = document.querySelector("#stage");
const body = document.querySelector("body");

export function DragNDropElements() {
  document
    .querySelectorAll(
      ".section:not(.header) .element-container:not(.section).draggable"
    )
    .forEach((item) => {
      item.addEventListener("mousedown", function (event) {
        document
          .querySelectorAll(".section")
          .forEach((section) => section.classList.remove("attach-to-me"));
        if (
          !event.target.closest("#gfpp") &&
          !event.target.closest(".resizer")
        ) {
          const activePanel = document.querySelector(
            `.floating-panel.active[element="${item.id}"]`
          );
          const gfppSelected = document.querySelector(
            `#${item.id} .gfpp .selected`
          );

          mousePosY = window.innerHeight - event.clientY;
          event.stopPropagation();

          let boxCoords = getCoords(item);
          let shiftX = event.pageX - boxCoords.left;
          let shiftY = event.pageY - boxCoords.top;

          item.setAttribute("coords", `x:${boxCoords.left} y:${boxCoords.top}`);

          document.onmousemove = function (event) {
            deselectAllChildren();
            deselectAll();
            item.classList.add("on-the-move");

            stage.classList.add("dragging");
            body.classList.add("dragging");

            if (!document.querySelector(".origin-section")) {
              item.closest(".section")?.classList.add("origin-section");
            }
            hideFloatingPanels();
            mousePosY = window.innerHeight - event.clientY;

            event.stopPropagation();

            locatesectionAndAttach(event, shiftX, shiftY, item);
          };

          document.onmouseup = function (e) {
            setTimeout(function () {
              activePanel && showPanel(activePanel, item.id);
              gfppSelected && gfppSelected.classList.add("selected");
            });

            event.stopPropagation();

            item.classList.remove("on-the-move");
            document
              .querySelectorAll(".origin-section")
              .forEach((section) => section.classList.remove("origin-section"));
            setTimeout(function () {
              document
                .querySelectorAll(".attach-to-me")
                .forEach((section) => section.classList.remove("attach-to-me"));
              updateSectionActionsTop(state);
            }, 0);

            document.onmousemove = null;
            item.onmouseup = null;

            stage.classList.remove("dragging");
            body.classList.remove("dragging");

            select(item);
            item.closest(".section")?.classList.add("parent-select");
            locatesectionAndAttach(e, shiftY, item);
            document.onmouseup = null;
          };
        }
      });
    });
}
function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top - pageYOffset,
    left: box.left + pageXOffset,
  };
}

function locatesectionAndAttach(e, shiftX, shiftY, item) {
  const allSections = document.querySelectorAll("#stage .section");

  const sectionsCoords = Array.from(allSections).map((section, index) => {
    return {
      index,
      section,
      top: section.getBoundingClientRect().top,
      height: section.getBoundingClientRect().height,
    };
  });
  const getSectionTop = (sectionIndex) => {
    let sectionTop = 0;
    let i = 0;
    while (i < sectionIndex) {
      sectionTop += sectionsCoords[i].height;
      i++;
    }

    return sectionTop;
  };

  const attachCandidate = sectionsCoords.find((section) => {
    const eventTop = e.pageY - TOP_BAR_HEIGHT;
    return eventTop >= section.top && eventTop <= section.top + section.height;
  });

  if (attachCandidate?.section) {
    const section = attachCandidate?.section;
    const sectionIndex = attachCandidate?.index;

    document
      .querySelectorAll(".section")
      .forEach((section) => section.classList.remove("attach-to-me"));
    if (
      !document.querySelector(".attach-to-me") &&
      !section?.classList.contains("origin-section")
    ) {
      section?.classList.add("attach-to-me");
    }

    const sectionTop = getSectionTop(sectionIndex);

    let top = e.pageY - shiftY - TOP_BAR_HEIGHT + stage.scrollTop;
    if (item) {
      item.style.top = top - sectionTop + "px";
      item.style.left = Math.ceil(e.pageX - LEFT_BAR_WIDTH - shiftX) + "px";
      item.closest(".section")?.removeChild(item);

      document.querySelector(`#s${sectionIndex}`)?.appendChild(item);
    }
  }
}
