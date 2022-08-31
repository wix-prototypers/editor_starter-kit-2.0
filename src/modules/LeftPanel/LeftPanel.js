import {
  addPanelContent,
  designPanelContent,
  addSectionsContent,
  myBizContent,
  pagesPanel,
  appsContent,
} from "./leftPanelContent.js";

const stage = document.querySelector("#stage");
const body = document.querySelector("body");
//Append Styles
var href = `${window.originUrl}/src/modules/LeftPanel/left-panel.css`;

const exists = false;
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
          body.classList.contains("return100");

          state.leftPanel = "close";
          setState(state, "leftPanel", "close");
          setState(state, "zoomMode", false);
          stage.classList.remove("panneled");
          body.classList.remove("panneled");
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
