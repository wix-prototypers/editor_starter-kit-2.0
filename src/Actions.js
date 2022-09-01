import { select } from "./modules/SelectionModel/SelectionModel.js";

import { titleCase } from "./utils/functions.js";
import { Gfpp } from "./modules/GFPP/gfpp.js";
import { Resizable } from "./modules/Resize/Resize.js";

export const Actions = {
  //Actions

  selectedElement(element) {
    if (!element.classList.contains("selected")) {
      select(element);
      if (!element.querySelector("#gfpp")) {
        Gfpp();
        DragNDrop();
        Resizable();
      }
    }
  },

  zoomMode(data) {
    const stage = document.querySelector("#stage");
    const body = document.querySelector("body");
    const editor = document.querySelector("#editor");
    const zoomBtn = document.querySelector(".zoom");

    if (data == "active" || data === true) {
      editor.classList.add("zoomMode");
      zoomBtn.classList.add("selected");
      stage.classList.add("zoomMode");
      body.classList.add("zoomMode");
      body.removeAttribute("panel-type");
      stage.removeAttribute("panel-type");
    } else if (data === false) {
      editor.classList.remove("zoomMode");
      zoomBtn.classList.remove("selected");
      stage.classList.remove("zoomMode");
      body.classList.remove("zoomMode");
    }
  },

  leftPanel(data) {
    const stage = document.querySelector("#stage");
    const body = document.querySelector("body");
    const state = window.state;
    const editor = document.querySelector("#editor");
    const leftBar = document.querySelector("#left-bar");
    const sectionActions = document.querySelector(".sectionActions");
    if (data === "close" || data === false) {
      stage.classList.remove("design");
      leftBar.classList.remove("panelShadow");

      document.querySelector("#left-panel").classList.remove("show");
      document.querySelector("#left-panel").removeAttribute("content");
      document
        .querySelectorAll(`.leftbar-item.selected`)
        .forEach((selected) => selected.classList.remove("selected"));
      stage.removeAttribute("panel-type");
      body.removeAttribute("panel-type");
      document.querySelector("#left-panel").removeAttribute("show-panel");
    } else if (data) {
      leftBar.classList.add("panelShadow");
      document.querySelector("#left-panel").classList.add("show");
      document.querySelector("#left-panel").setAttribute("show-panel", data);

      switch (data) {
        case "add": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "add-elements");
          break;
        }
        case "pages": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "pages");
          break;
        }
        case "design": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "design");
          state.zoomMode = true;
          stage.classList.add("panneled");
          body.classList.add("panneled");

          break;
        }
        case "apps": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "apps");
          break;
        }
        case "ascend": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "ascend");
          break;
        }

        case "sections": {
          document
            .querySelector("#left-panel")
            .setAttribute("show-panel", "sections");
          state.zoomMode = true;
          stage.classList.add("panneled");
          body.classList.add("panneled");
          break;
        }
      }
    }
  },
};
