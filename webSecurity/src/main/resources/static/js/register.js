function Register() {
    var xmlhttp;
    var userId = document.getElementById("username");
    var password = document.getElementById("password");
    var nickname = document.getElementById("nickname");
    var userTip = document.getElementById("userValidate");
    var passwordTip = document.getElementById("passwordValidate");
    var nicknameTip = document.getElementById("nicknameValidate");
    var reg = /^[A-Za-z0-9]{6,16}$/.test(password.value);
    if(userId.value===""){
        validateElement(userTip, " Enter username", "text-danger", "glyphicon glyphicon-info-sign");
    }else{
        cleanValidate(userTip);
    }
    if(password.value===""){
        validateElement(passwordTip, " Enter password", "text-danger", "glyphicon glyphicon-info-sign");
    }else{
        cleanValidate(passwordTip);
    }
    if(!reg){
        validateElement(passwordTip, " numbers with letters [6,12]", "text-danger", "glyphicon glyphicon-info-sign");
    }
    if(nickname.value===""){
        validateElement(nicknameTip, " Enter nickname", "text-danger", "glyphicon glyphicon-info-sign");
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
            validateElement(userTip, " User Exists", "text-success", "glyphicon glyphicon-remove-sign");
        }
        if(xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            cleanValidate(userTip);
            cleanValidate(passwordTip);
            validateElement(nicknameTip, " Success registered", "text-success","glyphicon glyphicon-ok");
            userId.value="";
            password.value="";
            nickname.value="";
        }
    };
    // xmlhttp.open("POST","/register",true);
    xmlhttp.open("GET","http://yanshenghong.com/api/myWeb/getBlogsBasic",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(data);
}

function validateElement(tip, text, textColor, sign){
    tip.innerHTML=text;
    tip.className=textColor+" col-md-6 col-md-offset-3 "+sign;
    tip.style.cssText="margin-top:-7px; margin-bottom:10px; font-size: 12px;";
}

function cleanValidate(idVar){
    idVar.innerText="";
    idVar.className="";
    idVar.style.cssText="";
}