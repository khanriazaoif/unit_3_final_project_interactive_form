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
let activitiesTotal = 0;

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
    event.preventDefault()

    function checkName() {
        const nameValue = nameField.value;
        const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
        if (!nameIsValid) {
            const p = document.createElement('p');
            p.className = 'warning';
            legendElement.insertAdjacentElement("afterend", p);
            const warning = document.querySelector('.warning')
            warning.innerHTML = `Please provide your correct name`;
            warning.style.color = 'red';
            console.log(`name is not valid`);
            legendElement.style.color = 'red';
            // legendElement.innerHTML = `Basic Info (incorrect name field)`;
        }
        return nameIsValid;
    }

    function checkEmail() {
        const emailValue = email.value;
        console.log(emailValue);
        const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
        if (!emailIsValid) {
            const p = document.createElement('p');
            p.className = 'warning';
            legendElement.insertAdjacentElement("afterend", p);
            const warning = document.querySelector('.warning')
            warning.innerHTML = `Please provide a correct email address`;
            warning.style.color = 'red';
            // const emailWarningParagraph = document.querySelector('warning');

            // console.log(emailWarningParagraph);
            console.log('email not valid');
            legendElement.style.color = 'red';
            // legendElement.innerHTML = `Basic Info (incorrect email field)`;
        }
    }

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

    function checkActivities() {
        const activitiesChecked = activitiesTotal > 0;
        if (activitiesChecked === true) {
            validationPass(activitiesBox);
        } else {
            validationFail(activitiesBox);
        }
        return activitiesChecked;
    }

    console.log(checkActivities());

    checkEmail();
    checkName();
    checkActivities();

    if (!checkActivities()) {
        console.log('Invalid language total prevented submission');
        e.preventDefault();
    }
});

//
// activities.addEventListener("change", e => {
//     event.preventDefault()
//     function checkActivities() {
//         const target = e.target
//         console.log(target);
//         if (checkboxes) {
//             console.log('you checked a checkbox')
//         } else {
//             console.log('you did not');
//         }
//         const checkActivitiesValid = checkboxes > 0;
//         console.log(checkActivitiesValid);
//
//         return checkActivitiesValid;
//     }
//
//     checkActivities();
// });

