window.addEventListener("load",main);

function _(id){
    return document.getElementById(id);
}

function main(){
    _("signup-form").addEventListener("submit",validate);
}

function validate(event){
    event.preventDefault();
    var formData = new FormData(event.target);  //CHECK
    var name = formData.get("name");
    var email = formData.get("E-mail");
    var password = formData.get("password");   //HOW TO TAKE VALUE FROM KEYBOARD
    var confirmPassword = formData.get("confirmPassword");
    var phoneNumber =  formData.get("phone");
    var username = formData.get("username");

    nameValidation(name,"name-error");
    emailValidation(email,"email-error");
    phoneValidation(phoneNumber,"phone-error");

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
        isEmptyOrShort(value, id , 3, "name"); //NAME OR KEY PASSING?
    }

    function isEmptyOrShort(value, id, minlength, key){
        if(!value){
            setError(id, "Please enter your"+key);
            return;
        }
        if(value.length < minlength){
            setError(id, key + "must be atleast" +  minlength  + "characters");
        return;
        }
        setError(id, "");

    }

    function emailValidation(value, id){
        if(!value){
            setError(id,"please enter your email");
            return;
        }
        if (!value.includes("@")) {
            setError(id, "Please enter a valid email");
            return;
        }
        setError(id, "");
    }

    
    function phoneValidation(value, id)
    {

        isEmptyOrShort(value, id, 10, "phoneNumber")
    }

        function isEmptyOrShort(value, id, minlength, key)
        {
            if(!value){
                setError(id, "Please enter your"+key);
                return;
            }
            if(value.length < minlength){
                setError(id, key + "must be atleast" +  minlength  + "characters");
                return;
            }
            setError(id, "");

        // if(!value){
        //     setError(id,"Please enter your phone number");
        //     return;
        // } 
        
        // if(value!==Number){
        //     setError(id,"Please enter a valid number");
        //     return;
        // }
        
        // if(value.length < 3){
        //     setError(id,"Please enter the required number");
        //     return;
        // }
        // setError(id,"");
        
    }
    
    function setError(id, message){
        _(id).innerHTML = message;
    }