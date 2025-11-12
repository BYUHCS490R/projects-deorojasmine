document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault();
        const first = document.getElementById("firstName").value;
        const last = document.getElementById("lastName").value;
        const age = document.getElementById("age").value;

        if (!first || !last) {
            alert("Please provide your full name.");
            return
        }
        if (!first || !last) {
            alert("You must be 18 years or older to submit this form");
            return
        }

        const data = {
            firstName: first,
            lastName: last,
            age: age
        }

        console.log(data);
    });