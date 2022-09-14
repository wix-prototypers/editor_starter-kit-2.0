import {
  addPanelContent,
  designPanelContent,
  addSectionsContent,
  myBizContent,
  pagesPanel,
  appsContent,
} from "./leftPanelContent.js";

import { appendStyles } from "../../styles/EditorStyles.js";
appendStyles(`modules/LeftPanel/left-panel.css`);

const stage = document.querySelector("#stage");
const body = document.querySelector("body");

export const LeftPanel = (state, setState) => {
  let container = document.querySelector("#left-panel");
  //Add Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.addPanel && customAddPanel(window.addPanel(), "add-panel")) ||
      addPanelContent
  );
  //Add Sections Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.addSectionsPanel &&
      customAddPanel(window.addSectionsPanel(), "sections")) ||
      addSectionsContent
  );
  //Site Design Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.siteDesignPanel &&
      customAddPanel(window.siteDesignPanel(), "design-panel")) ||
      designPanelContent
  );
  //My Bussiness Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.myBizPanel &&
      customAddPanel(window.myBizPanel(), "my-biz-panel")) ||
      myBizContent
  );
  //Pages Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.pagesPanel && customAddPanel(window.pagesPanel(), "pages-panel")) ||
      pagesPanel
  );
  //App Manager Panel
  container.insertAdjacentHTML(
    "afterbegin",
    (window.appsPanel && customAddPanel(window.appsPanel(), "apps")) ||
      appsContent
  );

  setTimeout(() => {
    container.querySelectorAll(".panel-header .close-panel").forEach(
      (close) =>
        (close.onclick = (e) => {
          state.leftPanel = "close";
          setState(state, "leftPanel", "close");
          setState(state, "zoomMode", false);
          stage.classList.remove("hasPanel");
          body.classList.remove("hasPanel");
        })
    );
  });
};

const customAddPanel = ({ panelName, template, methods }, panelType) => {
  console.log(panelName);
  document
    .querySelector("#left-panel")
    .setAttribute("show-panel", "custom-add-panel");

  return (
    "afterbegin",
    `<div class="panel-wrapper ${panelType}"  >
    <div class="panel-header">
       <div class="title">${panelName}</div>
       <div class="actions">
       
       <div class="panel-header-buttons">
          <div class="button help-button">
             <span>?</span>
          </div>
          <div class="button close-panel">
             <svg width="25" height="25" viewBox="0 0 25 25" class="symbol symbol-headerCloseButton">
                <path d="M11.793 12.5L8.146 8.854 7.793 8.5l.707-.707.354.353 3.646 3.647 3.646-3.647.354-.353.707.707-.353.354-3.647 3.646 3.647 3.646.353.354-.707.707-.354-.353-3.646-3.647-3.646 3.647-.354.353-.707-.707.353-.354 3.647-3.646z" fill="currentColor"></path>
             </svg>
          </div>
       </div>
    </div>
    </div>
    <div class="panel-content">
    ${template}
    </div>`
  );
};
/*  setTimeout(() => {
    const container = document.querySelector("panel-wrapper");
    const keys = Object.keys(methods);
    container.insertAdjacentHTML("afterbegin", template);
    keys.forEach((key) => {
      methods[key](container);
    });

    document
      .querySelector("#left-panel")
      .setAttribute("show-panel", "custom-add-panel");
    document.querySelector(".custom-add-panel .close-panel").onclick = () => {
      window.state.leftPanel = "close";
    };
    return;
  }, 300);
}; */
