window.addEventListener("load",main);

function _(id){
    return document.getElementById(id);
}

function main(){
    _("signup-form").addEventListener("submit",validate);
}

function validate(event){
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var email = formData.get("email");
    var password = formData.get("password");
    var confirmPassword = formData.get("confirmPassword");
    var phone =  formData.get("phone");
    var username = formData.get("username");

    nameValidation(name,"name-error");
    emailValidation(email,"email-error");
}

    // if(!name){
    //     _("name-error").innerHTML = "Please enter your name ";
    // }
    // if(name && name.length < 3){
    //     _("name-error").innerHTML = " Please fill valid name";
    // }
    // if(!username){
    //     _("username-error").innerHTML = "Please enter the user name ";
    // }
    // if(username && username.length < 3){
    //     _("username-error").innerHTML = " Please enter valid username ";
    // }
    // if(password.length<8)
    // {
    //   _("password-error").innerHTML = " Please enter valid password ";
    // }
    // if(confirmPassword !== password)
    // {
    //   _("confirmPassword-error").innerHTML = " Please check password";
    // }

    function nameValidation(value,id){
        isEmptyOrShort(value, id , 3, "Name");
    }

    function isEmptyOrShort(value, id, minlength, key){
        if(!value){
            SetError(id, "Please enter your"+key);
        } else if(value.length < minlength){
            SetError(id, key + "must be atleast" + minlength + "characters");
        }
        SetError(id,"");

    }

    function emailValidation(value, id){
        if(!value){
            SetError(id,"please enter your email");
        }else if (!value.includes("@")) {
            SetError(id, "Please enter a valid email");
        }
        SetError(id, "");
    }

    function SetError(id, message){
        _(id).innerHTML = message;
    }