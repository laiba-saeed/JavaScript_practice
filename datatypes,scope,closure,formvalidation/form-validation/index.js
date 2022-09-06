var form = document.signupform;

function submitHandler(event) {
    // preventDefault() => Prevent the page from reloading on submission
    event.preventDefault();
    // Select email, password, mobilenumber from input value
    var email = form.email.value;
    var password1 = form.password1.value;
    var password2 = form.password2.value;
    var mobile = form.mobile.value;

    // Check => Form will not be submitted as long as all the inputs have been filled
    if(email === "" || password1 === "" || password2 === "" || mobile === "") {
        alert("Required Fields can't be empty");
        // don't need to proceed further
        return false;
    }
    if(password1.length < 8) {
        form.password1.classList.add("error");
        alert("Password must be atleast 8 characters");
        return false;
    }
    if(password2.length < 8) {
        form.password2.classList.add("error");
        alert("Password must be atleast 8 characters");
        return false;
    }
    if(password1 != password2)  
    {   
        // form.password1.classList.add("error");
        // form.password2.classList.add("error");
        alert("Passwords did not match");  
    }
    if(isNan(mobile)) {
        alert("Invalid Mobile Number");
        return false; 
    }
}

form.addEventListener("submit", submitHandler);