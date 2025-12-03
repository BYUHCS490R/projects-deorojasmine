document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            const first = document.getElementById('firstname').value.trim();
            const last = document.getElementById('lastname').value.trim();
            const ageValue = document.getElementById('age').value;
            const age = parseInt(ageValue, 10);

            if (!first || !last) {
                alert("Please provide your full name (first and last).");
                event.preventDefault();
                return;
            }

            if (isNaN(age) || age < 18) {
                alert("You must be 18 years or older to submit this form.");
                event.preventDefault();
                return;
            }

            const data = {
                firstName: first,
                lastName: last,
                age: age
            };

            console.log(data);

            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json",true);
            xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form submitted successfully!");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myForm').reset();
                    document.getElementById('myForm').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }
            };
            xhr.send(JSON.stringify(FormData));
        });