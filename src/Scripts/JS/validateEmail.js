export default function validateNewsletter (data) {

    let form = document.querySelector("#newsletter-form")
    // newsletter__input
    let errorEmail = form.querySelector(".emailinput__error");


    // EMAIL
    if(data.email.length < 5){
        errorEmail.style.display = "block";
        errorEmail.innerHTML = "Email is missing";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.email.focus();
        return false;
    }else{
        if(validateEmail(data.email)){ //NB! se Regex nederst!
            errorEmail.style.backgroundColor = "transparent";
            errorEmail.innerHTML = "";
            return true;
        }else{
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "Incorrect formatting";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.email.focus();
            return false;
           }
    }
}


function validateEmail(email){
    let regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
    return regEx.test(String(email).toLowerCase()); 
};
