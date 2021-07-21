chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.tabs.create({ url: "https://www.google.com/" });
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log(message,sender);
    if(message!==undefined && sender.origin.match(/.*google.*/)!=null){
        sendRequest(JSON.stringify(message))
    }
});

function sendRequest(elems){
    const req = new XMLHttpRequest();
    const baseUrl = "http://127.0.0.1:8080/search";

    req.open("POST", baseUrl, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(elems);

    req.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Got response 200!");
        }
    }
}