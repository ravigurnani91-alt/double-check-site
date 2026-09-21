// Double Check — centralized tracking
// To add/change tracking in the future, edit ONLY this file.
// Every page on the site loads this one script, so changes here apply everywhere automatically.

(function() {
  // Google Analytics 4
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-4NBD7KY1DB';
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-4NBD7KY1DB');

  // Future tracking tools go here — e.g. Microsoft Clarity, Facebook Pixel, etc.
  // Just add the setup code below this line; no page files need to change.

})();
