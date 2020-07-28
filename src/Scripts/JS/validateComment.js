export default function validateComment (data) {

    let form = document.querySelector("#comment-form")
    let errorName = form.querySelector(".nameinput__error");
    let errorEmail = form.querySelector(".emailinput__error");
    let errorContent = form.querySelector(".contentinput__error");
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
        }else{
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "Incorrect formatting";
            // form.email.style.backgroundColor = "#ffaaaa";
            form.email.focus();
            return false;
           }
    }
    
    if(data.comment.length < 5 ){
        // console.log(data.content)
        errorContent.style.display = "block";
        errorContent.innerHTML = "Your message is missing";
        // form.mailinput.style.backgroundColor = "#ffaaaa";
        form.comment.focus();
        return false;
    } else {
        errorContent.style.backgroundColor = "transparent";
        errorContent.innerHTML = "";
        return true;
    }
}


function validateEmail(email){
    let regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
    return regEx.test(String(email).toLowerCase()); 
};
