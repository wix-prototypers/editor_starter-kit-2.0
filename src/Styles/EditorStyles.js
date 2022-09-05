var hrefs = [
  `Styles/fonts.css`,
  `Styles/normalize.css`,
  `Styles/ptyp.css`,
  `Styles/variables.css`,
];

export const appendStyles = (href) => {
  const url = `${window.originUrl}/src/${href}`;
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
