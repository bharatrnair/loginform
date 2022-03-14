function _(id)
{
    return document.getElementById(id);

}
_("login-form").addEventListener("submit",formsubmission);

var userCredentials = {
    username: "admin",
    password: "123",
};
var invalidLoginMessage = "Invalid username or password"
var emptyFieldMessage = " Please fill in all fields"

function formsubmission(event){
    event.preventDefault();
    var username = _("username").value;
    var password = _("password").value;

    console.log(username, password);


if(!username || !password)
{
    showError(emptyFieldMessage);
    return;
}

if(
    username !== userCredentials.username ||
    password !== userCredentials.password
)
{
    showError(invalidLoginMessage);
    return;
}

window.location.href = "./dashboard.html"
}

function showError(message) {
    _("error-message").innerHTML = message;
    setTimeout(function () {
        _("error-message").innerHTML = "";
    }, 3000)
}
