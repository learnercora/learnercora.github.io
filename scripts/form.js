const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const forpwmessage = document.querySelector("#forpwmessage");
const forpw2message = document.querySelector("#forpw2message");
const email = document.querySelector("#email");
const foremailmessage = document.querySelector("#foremailmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

pw1.addEventListener("focusout", checkPasswordRule);
pw2.addEventListener("focusout", checkSamePassword);
email.addEventListener("focusout", checkEmailRule);


function checkPasswordRule() {
    const rule = /^[A-Za-z0-9]{8,}$/
    if (!rule.test(pw1.value)) {
        forpwmessage.textContent = "❗At least 8 characters long and can only be alpha-numeric!";
		forpwmessage.style.display = "block";
        pw1.style.backgroundColor = "#fff0f3";
        pw1.value = "";
        pw1.focus();
    } else {
        forpwmessage.style.display = "none";
        pw1.style.backgroundColor = "#fff";
        pw2.focus();
    }
}

function checkSamePassword() {
	if (pw1.value !== pw2.value) {
		forpw2message.textContent = "❗Password do not match!";
		forpw2message.style.display = "block";
		pw2.style.backgroundColor = "#fff0f3";
		pw2.value = "";
		pw2.focus();
	} else {
		forpw2message.style.display = "none";
		pw2.style.backgroundColor = "#fff";
	}
}

function checkEmailRule() {
    const rule = /^[a-zA-Z0-9._%+-]+@byui\.edu$/
    if (!rule.test(email.value)) {
        foremailmessage.textContent = "❗The email address must come from the byui.edu domain.";
		foremailmessage.style.display = "block";
        email.style.backgroundColor = "#fff0f3";
        email.value = "";
        email.focus();
    } else {
        foremailmessage.style.display = "none";
        email.style.backgroundColor = "#fff";
    }
}

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}