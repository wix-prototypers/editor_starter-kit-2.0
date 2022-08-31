import { modules } from "./modules/modules.js";
import { appendStyles } from "./Styles/EditorStyles.js";
import { setState, State } from "./State.js";

(function App() {
  const editor = document.querySelector("#editor");

  editor.insertAdjacentHTML(
    "afterbegin",
    `<section id="left-panel"></section>
     <section id="left-bar"></section>
    <section id="top-bar"></section>
    <section id="panel-frame" class=""></section>`
  );

  const stateObj = State.apply(this, []);
  window.state = stateObj.state;
  modules(window.state, setState, originUrl);
  appendStyles();
})();
