const contactForm = document.querySelector("#contact-form");
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let year = document.querySelector("#year");
let make = document.querySelector("#make");
let model = document.querySelector("#model");
let reason = document.querySelector("#reason");
let errorMessage = document.querySelector("#error-message")

let submitButton = document.querySelector("#submit");

function SendMail() {
    let userName = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;



    //window.location.href = "mailto:mbugua@ualberta.ca?subject="+userName+"&body="+email;
    //window.location.href = `mbugua@ualberta.ca?cc=nickmbugua%40gmail.com&subject=${userName}&body=`;
}




contactForm.addEventListener("submit", (e) => {
    e.preventDefault();


    if (userName.value == "" && email.value == "") {
        console.log("Error");

    } else {
        window.location.href = `mailto:realperformance@charter.net?subject="${userName.value} ${year.value} ${make.value} ${model.value}"&body=Email: ${email.value}%0DPhone Number: ${phoneNumber.value}%0DClient: ${userName.value}%0DRequest: ${reason.value}`;

        console.log(formData);
    }

});
