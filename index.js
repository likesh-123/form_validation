const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const showpassword = document.querySelector('#show-pass');
const showpassword2 = document.querySelector('#show-pass2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

showpassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
})

showpassword2.addEventListener("click", () => {
    const type2 = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type2);
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPassword = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const regPhone = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (!regName.test(firstName.value))
        setError(firstName, 'Please remove spaces, numeric and special characters');
    else
        setSuccess(firstName);

    if (!regName.test(lastName.value))
        setError(lastName, 'Please remove spaces, numeric and special characters');
    else
        setSuccess(lastName);

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (!regPhone.test(phone.value))
        setError(phone, 'Invalid Phone Number!');
    else
        setSuccess(phone);

    if (passwordValue === '' || !isValidPassword(passwordValue)) {
        setError(password, 'Invalid Password!')
    } else {
        setSuccess(password);
    }

    if (password2Value !== passwordValue) {
        setError(password2, 'Password does not match');
    }
    else if (password2Value === '' || !isValidPassword(password2Value)) {
        setError(password2, 'Invalid Password!')
    } else {
        setSuccess(password2);
    }

};
