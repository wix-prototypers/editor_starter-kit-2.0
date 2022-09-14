var hrefs = [
  `src/styles/fonts.css`,
  `src/styles/normalize.css`,
  `src/styles/ptyp.css`,
  `src/styles/variables.css`,
];

export const appendStyles = (href) => {
  const url = `${window.originUrl}/${href}`;
  var exists = false;
  document.querySelectorAll("link").forEach((link) => {
    if (link.getAttribute("href") === url) {
      exists = true;
    }
  });
  if (!exists) {
    var link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
};

hrefs.forEach((href) => {
  appendStyles(href);
});
