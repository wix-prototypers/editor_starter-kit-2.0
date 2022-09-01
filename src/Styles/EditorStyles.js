var hrefs = [
  `${window.originUrl}/src/styles/fonts.css`,
  `${window.originUrl}/src/styles/normalize.css`,
  `${window.originUrl}/src/styles/ptyp.css`,
  `${window.originUrl}/src/styles/variables.css`,
];

export const appendStyles = () => {
  hrefs.forEach((href) => {
    var exists = false;
    document.querySelectorAll('link').forEach((link) => {
      if (link.getAttribute('href') === href) {
        exists = true;
      }
    });
    if (!exists) {
      var link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  });
  console.log('appended styles!');
};
