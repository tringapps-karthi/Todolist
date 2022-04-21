function storeCredentials(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(password === confirmPassword){
        var details = {
            "name": name,
            "password": password
        }
        localStorage.setItem("details", JSON.stringify(details));
    }
    else{
        alert("Password and Confirm Password is not same");
        return false;
    }
}

