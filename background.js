chrome.browserAction.onClicked.addListener(function() {
  window.open("http://agar.io/", "_new")
}), chrome.webRequest.onBeforeRequest.addListener(function() {
  return {
    cancel: !0
  }
}, {
  urls: ["*://agar.io/main_out.js*"]
}, ["blocking"]);