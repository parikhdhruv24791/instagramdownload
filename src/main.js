chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "lib/jquery.min.js" }, function() {
        chrome.tabs.executeScript(null, {file: "src/inject.js"});
    });
   console.log("Icons made by http://www.flaticon.com/authors/hadrien (Hadrien) from http://www.flaticon.com is licensed by Creative Commons BY 3.0 BY");
});