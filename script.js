let email = document.querySelector('#email-icon');

const changeIcon = () =>{
    if(email.className != "fa-solid fa-envelope-open fa-3x"){
        email.className = "fa-solid fa-envelope-open fa-3x"
    }else{
        email.className = "fa-solid fa-envelope fa-3x";
    }
}

email.addEventListener('mouseover', changeIcon);

email.addEventListener('mouseout', changeIcon);