welcomeMessage();

function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null)   {
        document.getElementById("welcome-speech").innerHTML = "Hello " + name +", Welcome to My Portfolio!";
        console.log("Hello " + name +", Welcome to My Portfolio!");
    }

    
}

function valiadteForm() {
    let name = document.forms["contact-form"]["name"].value;
    let email = document.forms["contact-form"]["email"].value;
    let message = document.forms["contact-form"]["message"].value;
}