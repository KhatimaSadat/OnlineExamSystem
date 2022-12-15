function preventSubmit(){
   let user= document.getElementById("username").value;
   let lastname= document.getElementById("lastname").value;
   let email= document.getElementById("email").value;
   let message= document.getElementById("message").value;
   if(user==""){
    alert("type your username");
    return false;
   }
   else if(lastname==""){
    alert("type your last name");
    return false;

   }
   else if(email==""){
    alert("type your email");
    return false;

   }

   else if(message==""){
    alert("type your message");
    return false;

   }
   else{
    return true;
   }
   
}

function welcomeTheUser(){
    alert("welcome to our website");
}
