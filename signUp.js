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
    var phone =  formData.get("phone");
    var username = formData.get("username");

    if(
    nameValidation(name,"name-error")&&
    emailValidation(email,"email-error")&&
    phoneValidation(phone,"phone-error")&&
    passwordValidation(password,"password-error")&&
    confirmValidation(confirmPassword,password,"confirmPassword-error")&&
    usernameValidation(username,"username-error")
    ){
        submit({
            name,
            email,
            password,
            phone,
            username
        });
    }else{
        console.log("failed");
    }

}
function submit(data) {
    let postRequest = function (url, data){
    return new Promise(function(resolve, reject){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        resolve(JSON.parse(this.responseText));
      }else if (this.readyState == 4){
          reject (JSON.parse(this.responseText || "error"));
      }
    };
    xhttp.open("POST",url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
});  
};

//function submit is converted into fetch

Fetch("http://192.168.1.39:3000/user",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(data)
})
 .then((response)=> response.json())
 .then((result) =>{ 
    window.location.href = "./user.html?id=" + result.id;
})
.catch((err) => {
    console.log(err);
});

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
        return !isEmptyOrShort(value, id , 3, "name"); //NAME OR KEY PASSING?
    }

    function isEmptyOrShort(value, id, minlength, key){
        if(!value){
            setError(id, "Please enter your"+key);
            return true;
        }
        if(value.length < minlength){
            setError(id, key + " must be atleast " +  minlength  + " characters ");
        return true;
        }
        setError(id, "");
        return false;

    }

    function emailValidation(value, id){
        if(!value){
            setError(id,"please enter your email");
            return false;
        }
        if (!value.includes("@")) {
            setError(id, "Please enter a valid email");
            return false;
        }
        setError(id, "");
        return true;
    }   
    function phoneValidation(value,id){

        return !isPhoneNumber(value, id, 10, "phoneNumber") ;
    }
    
    function isPhoneNumber(value, id, minlength, key)
    {
        if(!value){
          setError(id,"please enter a phone number")  
          return true ;
        }
        if(value.length !== minlength)
        {
            setError(id,"must be"+minlength+"character")
            return true;
        }
        setError(id, "");
        return false;
    }
    function passwordValidation(value,id)
    {
        return !isEmptyOrShort(value, id, 6, "Password")

    }

    function confirmValidation(value, password,id){
        console.log(value,id);
        if(value !== password){
            setError(id,"password does not match");
            return false;
        }
        setError(id, "");
        return true;
    }

    function usernameValidation(value,id){
        console.log(value,id)
       return !isEmptyOrShort(value, id, 3, "username");
    }

    function setError(id, message){
        _(id).innerHTML = message;
    }