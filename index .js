// variables
const form = document.getElementById('form')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const number = document.getElementById('num')
const salesLocation = document.getElementById('location')
const businessType = document.getElementById('selectedbusiness')
const averageSales = document.getElementById('sales')
const radio = document.querySelectorAll("input[name='interestinBMS']:checked")
const checkBox = document.getElementById('checkbox')
const mailErr = document.getElementById('mailerr')
const numErr = document.getElementById('numerr')
const fnameErr = document.getElementById('fnameerr')
const lnameErr = document.getElementById('lnameerr')
const mailPattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
const numPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const namePattern = /^[a-z ,.'-]+$/i;
const submit = document.getElementById('submit')

// validations for input-fields
email.addEventListener('keyup', function(){
    if(email.value.match(mailPattern)){
        // mailErr.innerHTML="Your email address is valid"
        // mailErr.style.color = "#00ff00"
        mailErr.innerHTML = ''
    }else{
        mailErr.innerHTML ="please enter valid email address"
        mailErr.style.color = "#ff0000"
    }
})

number.addEventListener('keyup', function(){
    if(number.value.match(numPattern)){
        // mailErr.innerHTML="Your email address is valid"
        // mailErr.style.color = "#00ff00"
        numErr.innerHTML = ''
    }else{
        numErr.innerHTML ="please enter valid phone number"
        numErr.style.color = "#ff0000"
    }
})

firstName.addEventListener('keyup', function(){
    if(firstName.value.match(namePattern)){
        // mailErr.innerHTML="Your email address is valid"
        // mailErr.style.color = "#00ff00"
        fnameErr.innerHTML = ''
    }else{
        fnameErr.innerHTML ="please enter valid name"
        fnameErr.style.color = "#ff0000"
    }
})

lastName.addEventListener('keyup', function(){
    if(lastName.value.match(namePattern)){
        // mailErr.innerHTML="Your email address is valid"
        // mailErr.style.color = "#00ff00"
        lnameErr.innerHTML = ''
    }else{
        lnameErr.innerHTML ="please enter valid name"
        lnameErr.style.color = "#ff0000"
    }
})

// storing inputs in local storage
submit.addEventListener('click', function(){
    const firstN = localStorage.setItem("firstName", firstName.value)
    const lastN = localStorage.setItem("lastName", lastName.value)
    const mail = localStorage.setItem("email", email.value)
    const phoneNum = localStorage.setItem("number", number.value)
    const salesL = localStorage.setItem("salesLocation", salesLocation.value)
    const bType = localStorage.setItem("businessType", businessType.value)
    const salesAve = localStorage.setItem("averageSales", averageSales.value)
    const check = localStorage.setItem("checkBox", checkBox.value)
})

