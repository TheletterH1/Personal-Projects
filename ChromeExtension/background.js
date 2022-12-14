chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("testAlarm", { periodInMinutes: 180 });
    startRequest();
});
//When timer goes off
chrome.alarms.onAlarm.addListener((alarm) => {
    startRequest();
});
//Function to display the notification
function startRequest() {
    var options = {
        title: "How are you feeling?",
        iconUrl: "images/coolEmoji.png",
        message: "Think, then click on the extension",
        type: "basic",
        requireInteraction: true
    }
    chrome.notifications.create("", options);
}
chrome.runtime.onConnect.addListener(function(port) {
    if (port.name === "popup") {
        port.onDisconnect.addListener(function() {
           document.getElementById('answer').innerText = ""
        });
    }
});