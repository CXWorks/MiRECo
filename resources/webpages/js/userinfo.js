/**
 * Created by cxworks on 16-11-29.
 */

function getPhone() {
    if (localStorage.phone==undefined){
        window.location.replace('/mireco/loginandregister/loginCard.html');
        return undefined;
    }
    return localStorage.phone;
}

function getName() {
    if (localStorage.name==undefined){
        window.location.replace('/mireco/loginandregister/loginCard.html');
        return undefined;
    }
    return localStorage.name;
}

function getImg() {
    if (localStorage.img==undefined){
        window.location.replace('/mireco/loginandregister/loginCard.html');
        return undefined;
    }
    return localStorage.img;
}

function getInterest() {
    if (localStorage.interest==undefined){
        window.location.replace('/mireco/loginandregister/loginCard.html');
        return undefined;
    }
    return localStorage.interest;
}