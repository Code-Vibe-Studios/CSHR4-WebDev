

document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {name,email,password};

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert("Registration Successful");
        }else{
            alert("Registration Failed");
        }
    })
    .catch(error => console.error(error));
});