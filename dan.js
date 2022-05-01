var loginbtn = document.querySelector(".loginbtn");
loginbtn.onclick = function login() {
    var name = document.querySelector(".name").value;
    var password = document.querySelector(".pass").value;
    var display = document.querySelector(".display");
    var ava = [
        {
            name: "sam",
            password: 4022
        },

        {
            name: "dan",
            password: 1999
        },
        {
            name: "shine",
            password: 1054
        },
        {
            name: "josh",
            password: 1249
        },
        {
            name: "kelvin",
            password: 1807
        }
    ];
    for (i = 0; i < ava.length; i++) {
        if (name.toLowerCase() == ava[i].name.toLowerCase() && password == ava[i].password) {
            location.href = "ass4.html";
            var san = "";
            break;
        }
        else if (name.toLowerCase() == ava[i].name.toLowerCase() && password !== ava[i].password) {
            var san = "invalid password";
            console.log('invalid');
            break;
        }
        else if (name.length == 0 || password.length == 0) {
            var san = "please fill up the required fields!";
            break;
        }
        else if (name.toLowerCase() !== ava[i].name.toLowerCase()){
            var san = "No matching account found for username!";
        }
    }
    display.innerHTML = san;
}
