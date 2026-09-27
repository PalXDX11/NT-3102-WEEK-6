$(document).ready(function() { 
 
    // Hide validation messages when the page loads
    $(".validation-message").css("visibility", "hidden");
 
 
    // =============================
    // REGISTER VALIDATION
    // =============================
 
    $("#registerForm").submit(function(event) { 
 
        event.preventDefault(); 
 
        let valid = true; 
 
        let fullname = $("#fullname").val().trim(); 
        let email = $("#email").val().trim(); 
        let password = $("#password").val().trim(); 
        let confirmPassword = $("#confirm-password").val().trim(); 
 
 
        // Hide old messages but keep their space
        $(".validation-message").css("visibility", "hidden");
 
 
        // Full Name
        if (fullname === "") { 
 
            $("#fullname-error")
                .text("Please enter your full name.")
                .css("visibility", "visible"); 
 
            valid = false; 
        } 
 
 
        // Email
        if (email === "") { 
 
            $("#email-error")
                .text("Please enter your email.")
                .css("visibility", "visible"); 
 
            valid = false; 
 
        } else if (!email.includes("@")) { 
 
            $("#email-error")
                .text("Please enter a valid email address.")
                .css("visibility", "visible"); 
 
            valid = false; 
        } 
 
 
        // Password
        if (password === "") { 
 
            $("#password-error")
                .text("Please enter your password.")
                .css("visibility", "visible"); 
 
            valid = false; 
        } 
 
 
        // Confirm Password
        if (confirmPassword === "") { 
 
            $("#confirm-password-error")
                .text("Please confirm your password.")
                .css("visibility", "visible"); 
 
            valid = false; 
 
        } else if (confirmPassword !== password) { 
 
            $("#confirm-password-error")
                .text("Passwords do not match.")
                .css("visibility", "visible"); 
 
            valid = false; 
        } 
 
 
        // If everything is valid
        if (valid) { 
 
            alert("Registration form is valid!"); 
 
        } 
 
    }); 
 
 
    // Remove Full Name message when typing
    $("#fullname").on("input", function() { 
 
        if ($(this).val().trim() !== "") { 
            $("#fullname-error").css("visibility", "hidden"); 
        } 
 
    }); 
 
 
    // Remove Email message when typing
    $("#email").on("input", function() { 
 
        if ($(this).val().trim() !== "") { 
            $("#email-error").css("visibility", "hidden"); 
        } 
 
    }); 
 
 
    // Remove Password message when typing
    $("#password").on("input", function() { 
 
        if ($(this).val().trim() !== "") { 
            $("#password-error").css("visibility", "hidden"); 
        } 
 
    }); 
 
 
    // Remove Confirm Password message when typing
    $("#confirm-password").on("input", function() { 
 
        if ($(this).val().trim() !== "") { 
            $("#confirm-password-error").css("visibility", "hidden"); 
        } 
 
    }); 
 
 
    // =============================
    // LOGIN VALIDATION
    // =============================
 
    $("#loginForm").submit(function(event) {

        event.preventDefault();

        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        let valid = true;


        // Hide previous messages but keep their space
        $("#login-email-error").css("visibility", "hidden");
        $("#login-password-error").css("visibility", "hidden");
        $("#login-error").css("visibility", "hidden");


        // Email validation
        if (email === "") {

            $("#login-email-error")
                .text("Please enter your email.")
                .css("visibility", "visible");

            valid = false;
        }


        // Password validation
        if (password === "") {

            $("#login-password-error")
                .text("Please enter your password.")
                .css("visibility", "visible");

            valid = false;
        }


        // Stop if fields are empty
        if (!valid) {
            return;
        }


        // Dummy account
        if (
            email === "paul123@gmail.com" &&
            password === "paul123"
        ) {

            // Successful login
            window.location.href = "landing.html";

        } else {

            // Wrong email or password
            $("#login-error")
                .text("Invalid email or password.")
                .css("visibility", "visible");

        }

    });


    // Hide login email message when typing
    $("#email").on("input", function() {

        if ($(this).val().trim() !== "") {
            $("#login-email-error").css("visibility", "hidden");
        }

        $("#login-error").css("visibility", "hidden");

    });


    // Hide login password message when typing
    $("#password").on("input", function() {

        if ($(this).val().trim() !== "") {
            $("#login-password-error").css("visibility", "hidden");
        }

        $("#login-error").css("visibility", "hidden");

    });

});