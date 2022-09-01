var hrefs = [
  `${window.originUrl}/src/Styles/fonts.css`,
  `${window.originUrl}/src/Styles/normalize.css`,
  `${window.originUrl}/src/Styles/ptyp.css`,
  `${window.originUrl}/src/Styles/variables.css`,
];

export const appendStyles = () => {
  hrefs.forEach((href) => {
    var exists = false;
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
  });
  console.log("appended styles!");
};
