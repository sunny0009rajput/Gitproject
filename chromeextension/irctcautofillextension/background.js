// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getCredentials") {
        chrome.storage.local.get(["username", "password"], (data) => {
            sendResponse({ username: data.username, password: data.password });
        });
        return true;
    }
});