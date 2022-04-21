function checkCredentials(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    var details = JSON.parse(localStorage.getItem("details"));
    console.log(details.name);
    console.log(details.password);
     if(!details)
     {
         alert("User is not registered here ");
        return false;
     }
    if(name == details.name && password == details.password){
        return true;
    }
    else{
        alert("Invalid Name or Password!");
        return false;
    }
}