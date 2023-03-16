import { sectionActionsBtns } from "./sectionActions_data.js";
import { getCoords, getSize } from "../../utils/functions.js";
import { select, hoverOn } from "../SelectionModel/SelectionModel.js";

//Append Styles

import { appendStyles } from "../../styles/EditorStyles.js";
appendStyles(`src/modules/sectionActions/sectionActions.css`);
const stage = document.querySelector("#stage");

export const sectionActions = (state, setState) => {
  let elemContainers = document.querySelectorAll("#stage .section");

  /**
   * Create sectionActions
   * @param {*} sectionActionsArray:[]
   * @param {*} element:HTMLelement
   */

  function createsectionActions() {
    let sectionActionsArray = [
      `moveUp`,
      `moveDown`,
      `edit`,
      "layout",
      "settings",
      "more",
    ];
    const sectionActionsUl = document.createElement("ul");

    sectionActionsUl.setAttribute("id", "sectionActions");
    sectionActionsUl.classList.add("sectionActions");
    sectionActionsUl.setAttribute("top", "90px");
    sectionActionsUl.setAttribute("section", "#s1");

    sectionActionsArray.forEach((button) => createsectionActionsItems(button));

    function createsectionActionsItems(button) {
      let sectionActionsLi;
      sectionActionsLi = document.createElement("li");
      sectionActionsLi.setAttribute("type", button);

      //create button
      sectionActionsLi.innerHTML = sectionActionsBtns[button].svg;
      sectionActionsLi.classList.add("sectionActions-btn");
      //create tooltip
      let toolTip = document.createElement("span");
      toolTip.classList.add("sectionActions-tooltip");
      toolTip.innerHTML = sectionActionsBtns[button].tooltip;
      let toolTipArrow = document.createElement("div");
      toolTipArrow.classList.add("arrow");
      toolTip.appendChild(toolTipArrow);
      toolTip.setAttribute("type", button);
      sectionActionsLi.appendChild(toolTip);
      sectionActionsUl.appendChild(sectionActionsLi);
    }

    !stage.parentNode.querySelector("#sectionActions") &&
      stage.parentNode.prepend(sectionActionsUl);
    setTimeout(() => {
      document
        .querySelector(`#sectionActions [type="moveDown"]`)
        .insertAdjacentHTML("afterend", "<hr/>");

      document
        .querySelector(`#sectionActions [type="more"]`)
        .insertAdjacentHTML("beforeBegin", "<hr/>");
    });

    /**
     * Select sectionActions button
     * @param {Object} event
     * @returns {undefined}
     */

    let allBtns = document.querySelectorAll(
      ".sectionActions-btn,.sectionActions-btn svg,.sectionActions-main-action"
    );

    let actions = document.querySelector("#sectionActions");
    //trigger main action on double-click

    /**
     * Show/hide tooltip
     * @param {Object} event
     * @returns {undefined}
     */

    allBtns.forEach((btn) => {
      btn.addEventListener("mouseover", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let btnTarget = e.target;
        btnTarget = btnTarget.closest("li");
        let ttp = btnTarget.querySelector(".sectionActions-tooltip");
        if (ttp) {
          ttp.classList.add("show");
        }

        let sectionId = e.target
          .closest("#sectionActions")
          .getAttribute("section");
        let section = document.querySelector(`#stage #${sectionId}`);
        let body = document.querySelector("body");
        if (body.classList.contains("actionsOverlay")) {
          !section.classList.contains("selected") &&
            section.classList.add("hover");
          section.classList.contains("selected") &&
            section.classList.add("overlay");
          section.classList.contains("parent-selected") &&
            section.classList.add("overlay");
        }
      });

      btn.addEventListener("mouseout", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let btnTarget = e.target;
        btnTarget = btnTarget.closest("li");
        let ttp = btnTarget.querySelector(".sectionActions-tooltip");
        if (ttp) {
          ttp.classList.remove("show");
          let sectionId = e.target
            .closest("#sectionActions")
            .getAttribute("section");

          let section = document.querySelector(`#stage #${sectionId}`);

          section.classList.remove("overlay");
        }
      });
    });

    actions.addEventListener("mouseover", function (e) {
      let sectionId = e.target
        .closest("#sectionActions")
        .getAttribute("section");

      let section = document.querySelector(`#stage #${sectionId}`);
      !section.classList.contains("selected") && section.classList.add("hover");
    });

    /**
     * update sectionActions on panel close
     * @param {event} blur
     * @param {*} undefined
     */

    stage.addEventListener("click", (e) => {
      if (
        !e.target.closest(".panel-frame") &&
        !e.target.classList.contains("mode-bar") &&
        !event.target.closest(".element-container") &&
        !event.target.closest(".sub-element-container")
      ) {
        elemContainers.forEach((elem) => {
          elem.querySelectorAll("li").forEach((li) => {
            if (li.classList.contains("selected")) {
              li.classList.remove("selected");
            }
          });
        });
      }
    });
    elemContainers.forEach((container) => {
      container.addEventListener("click", (e) => {
        if (
          !e.target.closest(".panel-frame") &&
          !e.target.closest(".mini-panel-frame") &&
          !e.target.classList.contains("mode-bar") &&
          !e.target.closest(".sub-element-container") &&
          !e.target.closest(".paneled")
        ) {
          elemContainers.forEach((elem) => {
            elem.classList.remove("paneled");
            elem.querySelectorAll("li").forEach((li) => {
              if (li.classList.contains("selected")) {
                li.classList.remove("selected");
              }
            });
          });
        }
      });
    });
  }

  createsectionActions();

  setTimeout(() => {
    document.querySelectorAll(".sectionActions").forEach((sectionActions) => {
      sectionActions.onclick = () => {
        let section = document.querySelector(
          "#" + sectionActions.getAttribute("section")
        );
        select(section);
      };
    });
  });

  setTimeout(() => {
    document.querySelectorAll(".sectionActions").forEach((sectionActions) => {
      sectionActions.onmouseenter = () => {
        let section = document.querySelector(
          "#" + sectionActions.getAttribute("section")
        );
        hoverOn(section);
      };
    });
  });
  document.querySelectorAll(".edit-panel .close").forEach((sectionActions) => {
    sectionActions.onclick = () => {
      setState(state, "editPanel", "close");
    };
  });
};

export function updateSectionActionsTop(state) {
  const zoomMode = document.querySelector(".zoomMode") ? true : false;
  let topStage = 90;
  let bottomStage = window.innerHeight - 200;
  let section = state.hoveredSection;

  if (section && !document.querySelector(".dragging")) {
    let sectionActions = document.querySelector("#sectionActions");
    const sectionActionsHeight = getSize(sectionActions).height;
    let scrollTop = stage.scrollTop;
    let sectionTop = getCoords(section).top + scrollTop;
    let sectionTops = getCoords(section).top;
    let sectionBottom = getCoords(section).top + getSize(section).height;
    const sectionHeight = (sectionBottom - sectionTop) / 2;
    let midSectionPos = sectionTop + sectionHeight - scrollTop / 2 - 90;

    sectionActions && sectionActions.classList.add("show");
    sectionActions.setAttribute("section", section.id);
    sectionActions.setAttribute("type", section.getAttribute("type"));
    if (zoomMode) {
      if (
        midSectionPos > sectionActionsHeight / 2 + 16 &&
        midSectionPos < bottomStage
      ) {
        sectionActions.style.top = midSectionPos + "px";
      } else if (
        sectionBottom <
        sectionActionsHeight + sectionActionsHeight / 2 + 16
      ) {
        sectionActions.style.top =
          sectionBottom - sectionActionsHeight - 6 + "px";
      } else if (midSectionPos > bottomStage && sectionTops > bottomStage) {
        sectionActions.style.top = sectionTops + 6 + "px";
      } else if (midSectionPos > bottomStage + 20) {
        sectionActions.style.top = bottomStage + "px";
      } else if (midSectionPos < topStage) {
        sectionActions.style.top = topStage + 6 + "px";
      }
    } else {
      if (
        midSectionPos > sectionActionsHeight / 2 &&
        midSectionPos < bottomStage + 100
      ) {
        sectionActions.style.top = midSectionPos + "px";
      } else if (
        sectionBottom <
        sectionActionsHeight + sectionActionsHeight / 2
      ) {
        sectionActions.style.top =
          sectionBottom - sectionActionsHeight - 6 + "px";
      } else if (midSectionPos > bottomStage && sectionTops > bottomStage) {
        sectionActions.style.top = sectionTops + 6 + "px";
      } else if (midSectionPos > bottomStage + 40) {
        sectionActions.style.top = bottomStage + "px";
      } else if (midSectionPos < topStage) {
        sectionActions.style.top = topStage + 6 + "px";
      }
    }
  }
}
export function hidesectionActions() {
  let sectionActions = document.querySelector("#sectionActions");
  sectionActions.style.opacity = 0;
}

export function updateSectionActionsTopOnResizeandScroll() {
  let sectionActions = document.querySelector("#sectionActions");
  let section = document.querySelector(
    `.section#${sectionActions.getAttribute("section")}`
  );
  let top = getCoords(section).top - 10 + getSize(section).height / 2;
  sectionActions.style.top = top + "px";
}
