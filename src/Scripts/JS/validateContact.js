export default function validateContactForm (data) {

    let form = document.querySelector("#comment-form")
    let errorName = form.querySelector(".nameinput__error");
    let errorEmail = form.querySelector(".emailinput__error");
    let errorDomain = form.querySelector(".websiteinput__error");
    let errorMessage = form.querySelector(".messageinput__error");
    // console.log(data);
    // FIRST NAME
    if(data.name == "") {
        errorName.style.display = "block";
        errorName.innerHTML = "Your name is missing";
        form.name.focus();
        return false;
    }else if(data.name.length < 2) {
        errorName.style.display = "block";
        errorName.innerHTML = "Name is too short";
        form.name.focus();
        return false;
    }else if(!isNaN(data.name)) {
        errorName.style.display = "block";
        errorName.innerHTML = "A number? Was that a typo?";
        form.name.focus();
        return false;
    } else {
        errorName.style.display = "none";
        errorName.innerHTML = "";
    }

    // EMAIL
    if(data.email.length < 6){
        errorEmail.style.display = "block";
        errorEmail.innerHTML = "Email is missing";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.email.focus();
        return false;
    }else{
        if(validateEmail(data.email)){ //NB! se Regex nederst!
            errorEmail.style.backgroundColor = "transparent";
            errorEmail.innerHTML = "";
        }else{
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "Incorrect formatting";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.email.focus();
            return false;
           }
    }
    
    if(data.website.length < 1){
        errorDomain.style.display = "block";
        errorDomain.innerHTML = "Your domain is missing";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.website.focus();
        return false;
    }else{
        if(validateDomain(data.website)){ //NB! se Regex nederst!
            errorDomain.style.backgroundColor = "transparent";
            errorDomain.innerHTML = "";
        }else{
            errorDomain.style.display = "block";
            errorDomain.innerHTML = "must be a web domain format";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.website.focus();
            return false;
           }
    }

    if(data.message.length < 5 ){
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Your message is missing";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.website.focus();
        return false;
    }else{
        errorMessage.style.backgroundColor = "transparent";
        errorMessage.innerHTML = "";
        return true;
    }
}


function validateEmail(email){
    let regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
    return regEx.test(String(email).toLowerCase()); 
};

function validateDomain(domain) {
    let regEx = /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi;
    if((domain.match(regEx))){
        return true;
    } else {
        return false;
    }
}