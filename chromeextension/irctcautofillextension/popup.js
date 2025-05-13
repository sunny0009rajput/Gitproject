document.addEventListener("DOMContentLoaded", function () {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let saveButton = document.getElementById("save");

    // Load saved credentials
    chrome.storage.local.get(["username", "password"], function (data) {
        if (data.username) usernameInput.value = data.username;
        if (data.password) passwordInput.value = data.password;
    });

    // Save credentials
    saveButton.addEventListener("click", function () {
        let username = usernameInput.value;
        let password = passwordInput.value;

        chrome.storage.local.set({ username: username, password: password }, function () {
            alert("Credentials Saved!");
        });
    });
});