function __(id){
    return document.getElementById(id);
}

function checkEmail(email)
{
    if(email == '' || email == undefined || email == null || typeof email !== 'string')
        return false;
    return /^[a-zA-z0-9.-]{4,}@[a-zA-z]+\.com$/.test(email);
}
function checkPassword(psw)
{
    if(psw == '' || psw == undefined || psw == null || typeof psw !== 'string' || psw.length < 8 || !psw.match(/[@!#$%^&*()]+/))
        return false;
    return true;
}
function login(e)
{
    //get email value
    let email = __('email').value;
    let psw = __('password').value
    //check email pattern
    // debugger
    if(checkEmail(email)){
        __('email-error').innerText = ""
        if(checkPassword(psw)){
            __('password-error').innerText = "";
            if(__('rememberme').checked){
                //store data in the local storage if remember me checked                
                localStorage.setItem('email', email)
                localStorage.setItem('password', psw)
            }else{                
                if(localStorage.getItem('email'))
                    localStorage.removeItem('email')
                if(localStorage.getItem('password'))
                    localStorage.removeItem('password')
                sessionStorage.setItem("email", email)
                sessionStorage.setItem("password", psw)
            }
            if(email.indexOf('emp') >= 0){
                e.preventDefault();
                location.href = "employee/index.html";
            }else if(email.indexOf('super') >= 0){
                e.preventDefault();
                location.href = "supervisor/index.html";
            }
        }else{
            __('password-error').innerText = "*Password must be greather than 8 character and contains at least one special character @!#$%^&*()"
            e.preventDefault();
        }
    }else{
        __('email-error').innerText = "*please enter a valid email address."
        e.preventDefault();
    }
    

    
}