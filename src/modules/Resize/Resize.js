import * as icons from "./icons.js";

import { appendStyles } from "../../styles/EditorStyles.js";
appendStyles(`src/modules/Resize/Resize.css`);

export const Resizable = () => {
  const elements = document.querySelectorAll(
    ".section:not(.header) .element-container:not(.section)"
  );
  elements.forEach((element) => {
    element.insertAdjacentHTML(
      "afterbegin",
      ` <div class="resizers">
  <div class="resizer top"></div>
  <div class="resizer top-right"></div>
  <div class="resizer top-left"></div>
  <div class="resizer bottom"></div>
  <div class="resizer bottom-right"></div>
  <div class="resizer bottom-left"></div>
</div>
<div class="drag-handle">
${icons.drag}
</div>
<div class="drag-handle bt">
${icons.drag}
</div>
<div class="rotate-handle">
${icons.rotate}
</div>
`
    );

    const resizers = element.querySelectorAll(".resizer");
    const minimum_size = 0;
    let original_width = element.getBoundingClientRect().width;
    let original_height = element.getBoundingClientRect().height;
    let original_x = element.getBoundingClientRect().x;
    let original_y = element.getBoundingClientRect().y;

    for (let i = 0; i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener("mousedown", function (e) {
        let original_mouse_x = e.pageX - element.getBoundingClientRect().x;
        let original_mouse_y = e.pageY - element.getBoundingClientRect().y;
        e.preventDefault();
        original_width = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("width")
            .replace("px", "")
        );
        original_height = parseFloat(
          getComputedStyle(element, null)
            .getPropertyValue("height")
            .replace("px", "")
        );
        const original_x = element.getBoundingClientRect().left;
        const original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.onmousemove = resize;
        window.onmouseup = stopResize;

        function resize(e) {
          if (currentResizer.classList.contains("bottom-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px";
              element.style.height = height + "px";
            }
            if (height > minimum_size) {
              element.style.width = width + "px";
              element.style.height = height + "px";
            }
          } else if (currentResizer.classList.contains("bottom-left")) {
            const height = original_height + (e.pageY - original_mouse_y);
            const width = original_width - (e.pageX - original_mouse_x);
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
            if (width > minimum_size) {
              element.style.width = width + "px";
              element.style.height = height + "px";
            }
          } else if (currentResizer.classList.contains("top-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height - (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
          } else {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              element.style.width = width + "px";
            }
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
          }
        }
      });

      function stopResize() {
        window.onmousemove = null;
        window.onmouseup = null;
      }
    }
  });
};
