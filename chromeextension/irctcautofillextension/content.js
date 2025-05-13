console.log("IRCTC Content Script Loaded");

// Wait for the login button to appear and click it
window.onload = function() {
    setTimeout(() => {
        let loginButton = document.querySelector('button.loginText'); // Adjust selector if needed
        if (loginButton) {
            loginButton.click();
        }
    }, 2000); // Delay to allow page elements to load
};

// Autofill username and password (credentials must be saved in storage)
chrome.runtime.sendMessage({ action: "getCredentials" }, (response) => {
    if (response.username && response.password) {
        document.querySelector("input#userId").value = response.username;
        document.querySelector("input#pwd").value = response.password;
    }
});
