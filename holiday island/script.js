function stylesSetup() {
  var theme = document.getElementsByTagName('link')[0];

  if (screen.width > screen.height) {
      theme.setAttribute('href', 'styles.css');
  } else {
      theme.setAttribute('href', 'styles-mobile.css');
  }
}
