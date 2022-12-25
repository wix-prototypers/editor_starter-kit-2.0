import { modules } from "./modules/modules.js";
import { appendStyles } from "./Styles/EditorStyles.js";
import { setState, State } from "./State.js";

(function App() {
  const editor = document.querySelector("#editor");
  //insert container divs for the editor main parts
  editor.insertAdjacentHTML(
    "afterbegin",
    `<section id="left-panel"></section>
     <section id="left-bar"></section>
    <section id="top-bar"></section>
    <section id="panel-frame"></section>`
  );
  //Activate state
  const state = State();
  //Activate modules, with editor state
  modules(state, setState);
})();
