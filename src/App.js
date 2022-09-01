import { modules } from "./modules/modules.js";
import { appendStyles } from "./styles/EditorStyles.js";
import { setState, State } from "./State.js";

(function App() {
  const editor = document.querySelector("#editor");
  editor.insertAdjacentHTML(
    "afterbegin",
    `<section id="left-panel"></section>
     <section id="left-bar"></section>
    <section id="top-bar"></section>
    <section id="panel-frame"></section>`
  );

  const state = State();
  modules(state, setState);
  appendStyles();
})();
