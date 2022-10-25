const contactForm = document.querySelector("#contact-form");
let userName = document.querySelector("#name");
let phoneNumber = document.querySelector("#phone-number");
let year = document.querySelector("#year");
let make = document.querySelector("#make");
let model = document.querySelector("#model");
let reason = document.querySelector("#reason");
let errorDiv = document.querySelector("#error-message");
let submitButton = document.querySelector("#submit");
let regEx = (/^[a-z A-Z()-]+$/);
let phoneRegEx =(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)
var currentYear = currentDate.getFullYear();
console.log(currentYear);

let errorH3 = document.createElement("h3");
let emptyError = document.createTextNode("Please add your full name");
let yearError = document.createTextNode("Invalid Year");


contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let message =[];
    if (userName.value == "" ) {
        console.log("Error");
        message.push("Please add your full name!");
    }
    if (!userName.value.match(regEx))
    {
        message.push("Please entry an valid name!");
    }
    if(!phoneNumber.value.match(phoneRegEx))
    {
        message.push("Please entry an valid Phone Number!");
    }
   
     if ((year.value) > currentYear) {
        console.log(year.value);
        message.push("Please entry an valid Year!");

    }
    if (!make.value.match(regEx))
    {
        message.push("Please entry an valid vehicle manufacturer!");
    }
    if (!make.value.match(/^[a-zA-Z 0-9() -]+$/))
    {
        message.push("Please entry an valid vehicle model name!");
    }
    if (message.length >0){
        e.preventDefault();
        errorDiv.innerHTML = message.join('</br>')
    }
    else {
        window.location.href = `mailto:mbugua@ualberta.ca?subject="${userName.value.trim()} ${year.value.trim()} ${make.value.trim()} ${model.value.trim()}"&body=%0DPhone Number: ${phoneNumber.value.trim()}%0DClient: ${userName.value.trim()}%0DRequest: ${reason.value}`;
        errorDiv.innerHTML = "";
        userName.value="";
        phoneNumber.value='';
        year.value="";
        make.value ="";
        model.value="";
        reason.value="";
       
    }

});
