function copyPwd() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

let password = document.getElementById('password');

function generatePassword (){
    var len = Math.floor(Math.random() * 128)+8;
    var pwd;
    var chars =` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM`;
    var upper = /[A-Z]/;
    var lower = /[a-z]/;
    var sp = /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/
    var num = /[0-9]/
    do{
        pwd = '';
        for(var i = 0; i < len;i++){
            pwd += chars[Math.floor(Math.random() * chars.length)]
        }
    }while(upper.test(pwd) && lower.test(pwd)&&sp.test(pwd)&&num.test(pwd));
    password.innerText = pwd;
}