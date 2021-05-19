//content script
var clickedEl = null;

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.event == "getClickedEl") {
        sendResponse({value: clickedEl.value}, function(data){
            console.log(data)
        });
    }

    if(request.event == "getDataResponse") {
        clickedEl.value = request.value
    }


});
