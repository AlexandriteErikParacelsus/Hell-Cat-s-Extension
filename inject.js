! function() {
  if ("undefined" == typeof hasRun) {
    hasRun = !0, window.stop(), document.documentElement.innerHTML = "";
    var e = new XMLHttpRequest;
    e.open("GET", chrome.extension.getURL("html/index.html"), !0), e.onload = function() {
      document.open(), document.write(this.responseText.replace(/\=\"\.\//g, '="' + chrome.extension.getURL("") + "html/")), document.close()
    }, e.send()
  }
}();