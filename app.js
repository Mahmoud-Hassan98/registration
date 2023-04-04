
let form = document.getElementById("student");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
  form.reset();
});

function validateForm() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("phoneNumber").value;

    // Validate username
    if (username.includes(" ")) {
        alert("Username cannot contain spaces");
        return false;
    }

    // Validate password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }

    // Validate email
			const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
			if (!emailRegex.test(email)) {
				alert("Please enter a valid email address.");
				return false;
            }
             

			// Validate phone number
			const phoneRegex = /^07\d{8}$/;
			if (!phoneRegex.test(phone)) {
				alert("Please enter a valid phone number starting with '07' and containing 10 digits.");
				return false;
			}

	// Check if username exists in session storage
    const existingUser = sessionStorage.getItem(username);
    if (existingUser) {
        alert("This username already exists. Please choose a different username.");
        return false;
    }

    const existingemail = sessionStorage.getItem(email);
    if (existingemail) {
        alert("This email already exists. Please choose a different email.");
        return false;
    }




    // Save form data to session storage
    const formData = {
        username: username,
        password: password,
        email: email,
        phone: phone
    };
    sessionStorage.setItem(username, JSON.stringify(formData));
    sessionStorage.setItem(email, JSON.stringify(formData));
    alert("Registration successful!");
    return true;
}




        