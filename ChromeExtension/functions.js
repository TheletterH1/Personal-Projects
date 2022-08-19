chrome.alarm.create('testAlarm', {
	periodInMinutes: 180
});
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "testAlarm") {
            chrome.notifications.create('notif', {
                type: 'basic',
                iconUrl: 'ChromeExtension/images/coolEmoji.png',
                title: 'How are you feeling?',
                message: 'Think, then check-in with the extension',
                priority: 2
            });
    }
});