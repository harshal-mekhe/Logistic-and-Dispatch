const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginUser);

async function loginUser(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please enter Username and Password");
        return;
    }

    try {

        const response = await fetch(
            "http://localhost:3000/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data = await response.json();

        if (!data.success) {
            alert(data.message);
            return;
        }

        localStorage.setItem(
            "currentUser",
            username
        );

        localStorage.setItem(
            "role",
            data.role
        );

        switch (data.role) {

            case "ADMIN":
                window.location.href =
                    "admin-dashboard.html";
                break;

            case "DISPATCHER":
                window.location.href =
                    "dispatcher-dashboard.html";
                break;

            case "DRIVER":
                window.location.href =
                    "driver-dashboard.html";
                break;

            default:
                alert("Unknown Role");
        }

    }
    catch (err) {

        console.error(err);

        alert(
            "Unable to connect to server"
        );

    }
}