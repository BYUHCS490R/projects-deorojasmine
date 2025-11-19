document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const first = document.getElementById("firstname").value.trim();
  const last = document.getElementById("lastname").value.trim();
  const ageValue = document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("pass").value;
  const phone = document.getElementById("phone").value.trim();
  const eventDate = document.getElementById("date").value;
  const state = document.getElementById("state").value;
  const comments = document.getElementById("comments").value.trim();

  
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "";

  
  const termsAccepted = document.querySelector('input[name="terms"]').checked;

  

  
  if (!first || !last || !email) {
    alert("Please fill in your first name, last name, and email.");
    return;
  }

  
  const age = parseInt(ageValue, 10);
  if (isNaN(age) || age < 18) {
    alert("You must be 18 years or older to sign up for this event.");
    return;
  }

  
  if (password.length < 6) {
    alert("Please choose a password that is at least 6 characters long.");
    return;
  }

  
  if (!termsAccepted) {
    alert("Please agree to the event guidelines before submitting.");
    return;
  }

  
  const formData = {
    firstName: first,
    lastName: last,
    age: age,
    email: email,
    password: password,
    phone: phone,
    eventDate: eventDate,
    state: state,
    gender: gender,
    comments: comments,
    termsAccepted: termsAccepted
  };

  
  console.log("Form data object:", formData);

  
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "submit.json", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        
        const response = JSON.parse(xhr.responseText);
        console.log("Server response:", response);

        
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = response.message;

        
        alert("Form submitted successfully!");

        
        document.getElementById("myForm").reset();
        document.querySelector('#myForm input[type="submit"]').disabled = true;
      } else {
        alert("There was a problem submitting the form. Please try again.");
      }
    }
  };

  
  xhr.send(JSON.stringify(formData));
});