// javascript:(function(){    var linkId = 'my-cdn-stylesheet';    var linkHref = 'https://shrey-dadhaniya.github.io/cdn/debug/debug-css.css';    var existingLink = document.getElementById(linkId);    if (existingLink) {        existingLink.parentNode.removeChild(existingLink);    } else {        var link = document.createElement('link');        link.id = linkId;        link.rel = 'stylesheet';        link.href = linkHref;        document.head.appendChild(link);    }})();

(function () {
  var linkId = 'my-cdn-stylesheet';
  var linkHref = 'https://shrey-dadhaniya.github.io/cdn/debug/debug-css.css';
  var existingLink = document.getElementById(linkId);
  if (existingLink) {
    existingLink.parentNode.removeChild(existingLink);
  } else {
    var link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = linkHref;
    document.head.appendChild(link);
  }
})();
