//Declare Variables
let fm = document.getElementById('contact');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

function formValidator(ev) {
    //prevent default behaviour of HTML form on submit event
    //whenver used, it should come as the first line of code in event handler
    ev.preventDefault();

    //strat with these 2 empty bucket in the beginning
    let errors = [];
    let data = {};

    //Trim the whitespace
    fn.value = fn.value.trim();
    em.value = em.value.trim();
    msg.value = msg.value.trim();

    /*+-----------+    
    | FULL NAME |
    +-----------+*/
    if (fn.value !== '') {
        data.fname = fn.value;
    } else {
        errors.push(`Full name is missing!`);
    }

    /*+-------+    
    | EMAIL | 
    +-------+*/
    //Get the value or write out the error message.
    if (em.value !== '') {
        if (pattern.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push('Email is invalid');
        }
    } else {
        errors.push('Email is missing.');
    }

    /*+-------+    
     | Message | 
     +-------+*/
    if (msg.value !== '') {
        data.message = msg.value;
    } else {
        errors.push('Message is missing!');
    }

    /*+-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+*/
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        fname.value = '';
        email.value = '';
        message.value = '';
    }
}
fm.addEventListener('submit', formValidator);