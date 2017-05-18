chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "lib/jquery.min.js" }, function() {
        chrome.tabs.executeScript(null, {file: "src/inject.js"});
    });
   
});