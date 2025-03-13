document.addEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("loginForm");
    const email=document.getElementById("email");
    const passWord=document.getElementById("pass");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        email.classList.remove("is-invalid");
        passWord.classList.remove("is-invalid");

        let isValid=true;

        if(!email.value || !/\S+@\S+\.\S+/.test(email.value)){
            email.classList.add("is-invalid")
            isValid=false;
        }

        if(!passWord.value || passWord.value.length<8){
            passWord.classList.add("is-invalid")
            isValid=false;
        }

        if(isValid){
            alert("Login Succesfull..")
            form.reset();
        }
    })
})



// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("loginForm");
//     const email = document.getElementById("email");
//     const password = document.getElementById("pass");
  
//     form.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       // Reset validation states
//       email.classList.remove("is-invalid");
//       password.classList.remove("is-invalid");
  
//       let isValid = true;
  
//       // Email validation
//       if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//         email.classList.add("is-invalid");
//         isValid = false;
//       }
  
//       // Password validation
//       if (!password.value || password.value.length < 6) {
//         password.classList.add("is-invalid");
//         isValid = false;
//       }
  
//       if (isValid) {
//         alert("Form submitted successfully!");
//         form.reset();
//       }
//     });
//   });
  