function Register() {
    var xmlhttp;
    var userId = document.getElementById("username");
    var password = document.getElementById("password");
    var nickname = document.getElementById("nickname");
    var userTip = document.getElementById("userValidate");
    var passwordTip = document.getElementById("passwordValidate");
    var nicknameTip = document.getElementById("nicknameValidate");
    var reg = /^[A-Za-z0-9]{6,16}$/.test(password.value);

    //Get csrf token
    var csrfToken = $("meta[name='_csrf']").attr("content");
    var csrfHeader = $("meta[name='_csrf_header']").attr("content");
    console.log(csrfToken);
    console.log(csrfHeader);

    if(userId.value===""){
        validateElement(userTip, " Enter username", "text-danger");
    }else{
        cleanValidate(userTip);
    }
    if(password.value===""){
        validateElement(passwordTip, " Enter password", "text-danger");
    }else{
        cleanValidate(passwordTip);
    }
    if(!reg){
        validateElement(passwordTip, " numbers with letters [6,12]", "text-danger");
    }
    if(nickname.value===""){
        validateElement(nicknameTip, " Enter nickname", "text-danger");
    }else{
        cleanValidate(nicknameTip);
    }
    if(userId.value===""||password.value===""||nickname.value===""||reg===false){return;}
    xmlhttp=new XMLHttpRequest();
    var data = JSON.stringify({"username":userId.value, "password": password.value, "nickname": nickname.value});
    xmlhttp.onreadystatechange=function () {
        if(xmlhttp.readyState===4 && xmlhttp.status===409){
            cleanValidate(passwordTip);
            cleanValidate(nicknameTip);
            validateElement(userTip, " User Exists", "text-success");
        }
        if(xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            cleanValidate(userTip);
            cleanValidate(passwordTip);
            validateElement(nicknameTip, " Success registered", "text-success");
            userId.value="";
            password.value="";
            nickname.value="";
        }
    };
    xmlhttp.open("POST","/register",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader(csrfHeader,csrfToken);
    xmlhttp.send(data);
}

function validateElement(tip, text, textColor){
    tip.innerHTML=text;
    tip.className=textColor+" col-md-8 offset-md-2 ";
    tip.style.cssText="margin-top:-7px; margin-bottom:10px; font-size: 12px;";
}

function cleanValidate(idVar){
    idVar.innerText="";
    idVar.className="";
    idVar.style.cssText="";
}