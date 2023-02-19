const nameField = document.getElementById('name');
const jobRole = document.getElementById('other-job-role');
const title = document.getElementById('title');
const color = document.getElementById('color');
const design = document.getElementById('design');
const option = document.querySelectorAll('option');
const activities = document.getElementById('activities');
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const email = document.getElementById('email');
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');
const basicInfo = document.querySelector('.basic-info');
const legendElement = basicInfo.firstElementChild;
const activitiesBox = document.querySelector('#activities-box');
const creditCardBox = document.querySelector('.credit-card-box');
let activitiesTotal = 0;
const checkboxesInput = document.querySelectorAll('input[type="checkbox"]');

document.querySelector('#activities').addEventListener('change', event => {
    (event.target.checked) ? activitiesTotal++ : activitiesTotal--;
});

nameField.focus();
jobRole.style.display = 'none';

title.addEventListener('change', () => {
    if (title.value === 'other') {
        jobRole.style.display = 'block';
        console.log('other');
    }
});

color.disabled = true;
design.addEventListener('change', () => {
    let selectTheme = design.firstElementChild
    console.log(selectTheme);
    selectTheme.style.display = 'none';
    design.firstElementChild =
        color.disabled = false;
    let selectedHidden = color.firstElementChild;
    // console.log(design);
    if (design.value === 'js puns') {
        for (let i = 0; i < option.length; i++) {
            selectTheme.style.display = 'none';
            option[i].style.display = 'block';
            let selectedHidden = color.firstElementChild;
            // console.log(selectedHidden[i]);
            let jspunsOption = option[i].getAttribute('data-theme');
            // console.log(jspunsOption);
            // console.log(selectedHidden);
            if (jspunsOption === 'heart js') {

                console.log(option[i]);
                selectedHidden.style.display = 'none';
                selectTheme.style.display = 'none';
                option[i].style.display = 'none';
            }

        }
    }



    if (design.value === 'heart js') {
        for (let i = 0; i < option.length; i++) {
            let selectTheme = design.firstElementChild
            console.log(selectTheme);
            option[i].style.display = 'block';
            let heartjsOption = option[i].getAttribute('data-theme');
            if (heartjsOption === 'js puns') {
                selectedHidden.style.display = 'none';
                selectTheme.style.display = 'none';
                option[i].style.display = 'none';

            }
        }
    }

});


const checkboxes = document.querySelectorAll('.activities input');
const paragraphActivitiesCost = document.querySelector('.activities-cost');
// console.log(checkboxes);
// console.log(paragraphActivitiesCost);
let totalCostOfActivities = 0;


document.querySelector('.activities').addEventListener('change', e => {
    const clicked = e.target;
    let clickedType = clicked.getAttribute('data-cost');
    clickedType = Number(clickedType);
    // console.log(typeof (clickedType));
    if (clicked.checked) {
        totalCostOfActivities += clickedType;
    }
    if (clicked.checked === false) {
        totalCostOfActivities -= clickedType;
    }
    console.log(totalCostOfActivities);
    // paragraphActivitiesCost.innerHTML('hell o' );
    paragraphActivitiesCost.innerHTML = `Total: $${totalCostOfActivities}`;
    // console.log(paragraphActivitiesCost);
});

// console.log(design);
// console.log(payment);


paypal.style.display = 'none';
bitcoin.style.display = 'none';

// console.log(payment);
let creditCardInitial = payment.children
creditCardInitial = creditCardInitial[1];

creditCardInitial.setAttribute('selected', 'selected');
// console.log(creditCardInitial);

document.getElementById('payment').addEventListener('change', event => {
    let target = event.target;
    if (payment.value === 'credit-card') {
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';
        console.log('yes');
    } else if (payment.value === 'paypal') {
        // let paypal = document.getElementById('payment').value
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (payment.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';
        creditCard.style.display = 'none';
    }
});

form.addEventListener("submit", e => {
    // event.preventDefault()

    function validationPass(element) {
        element.parentElement.classList.add('valid');
        element.parentElement.classList.remove('non-valid');
        element.parentElement.lastElementChild.style.display = 'none';
    }

    function validationFail(element) {
        element.parentElement.classList.add('not-valid');
        element.parentElement.classList.remove('valid');
        element.parentElement.lastElementChild.style.display = 'block';
    }

    function checkName(){
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameField.value);
        if (nameIsValid === true) {
            validationPass(nameField);
        } else {
            validationFail(nameField);
        }
        return nameIsValid;
    }

    function emailValidator(){
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
        if (emailIsValid === true){
            validationPass(email);
        } else {
            validationFail(email);
        }
    }

    function checkActivities() {
        const activitiesChecked = activitiesTotal > 0;
        if (activitiesChecked === true) {
            validationPass(activitiesBox);
        } else {
            validationFail(activitiesBox);
        }
        return activitiesChecked;
    }

    function checkCreditCard(){
        const creditCardChecked = /\d{13,16}/.test(creditCardNumber.value);
        if (creditCardChecked === true){
            validationPass(creditCardBox);
    } else {
            validationFail(creditCardBox);
    }
    return creditCardChecked;
    }

    function checkZipCode (){
        const creditCardZipCode = /\d{5}/.test(zipCode.value);
        if (creditCardZipCode === true){
            validationPass(creditCardBox);
        } else {
            validationFail(creditCardBox);
        }
        return creditCardZipCode;
    }

    function checkZipCVV (){
        const creditCardCVV = /\d{3}/.test(cvv.value);
        if (creditCardCVV === true){
            validationPass(creditCardBox);
        } else {
            validationFail(creditCardBox);
        }
        return creditCardCVV;
    }

    if (!checkName()) {
        console.log('Invalid name prevented submission');
        e.preventDefault();
    }

    if (!emailValidator()) {
        console.log('Invalid email prevented submission');
        e.preventDefault();
    }

    if (!checkActivities()) {
        console.log('Invalid activities total prevented submission');
        e.preventDefault();
    }

    if (!checkCreditCard()) {
        console.log('Invalid credit card prevented submission');
        e.preventDefault();
    }

    if (!checkZipCode()) {
        console.log('Invalid credit card zip code prevented submission');
        e.preventDefault();
    }

    if (!checkZipCVV()) {
        console.log('Invalid credit card CVV code prevented submission');
        e.preventDefault();
    }


});

function accessibility(){
    for (let i = 0; i < checkboxesInput.length; i++){
        activitiesBox.addEventListener("focus", (e) =>{
            console.log('focus ON');
            checkboxesInput[i].parentElement.classList.add('focus');
        });
        activitiesBox.addEventListener("blur", e =>{
            checkboxesInput[i].parentElement.classList.remove('focus');
            console.log('remove Focus');

        });
    }
}

accessibility();