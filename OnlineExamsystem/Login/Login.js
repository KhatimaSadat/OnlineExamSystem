function handleRegister (){
            const login = document.getElementById('first_form');
            const register = document.getElementById('secound_form')
            if (register.style.display === 'none') {
                login.style.display = 'none';
                register.style.display = 'block';
                
            } else {
                login.style.display = 'block';
                register.style.display = 'none';
            }
           
            }
         function preventSubmit() {
              
                // e.prevent.default;
                let email = document.getElementById("email").value;
                let Password = document.getElementById("password").value;

                if (email == "") {
                   
                    alert("pleaze fill the email");
                    return false;
                }
                else if (Password == "") {
                    alert("pleaze fill the password");
                    return false;
                }
                else {
                    
                   RedirectToHome();
                    return false;    
                }

            }
            function RedirectToHome(){
                 
                 window.location.href = "../index.html";
                
            }
            function preventSubmitR(){
                let phone = document.getElementById("tel").value;
                let patt = new RegExp("[0][7][0-9]{8}");
            if (patt.test(phone)) {
                window.location.href = "./Login.html"
                    return false;
            }

            else {
                    
                   alert("phone number is not from Afganistan") ;
                   return false;  
                }

            }