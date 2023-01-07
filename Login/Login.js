var loginClient = document.getElementById('loginClient');
loginClient.addEventListener('click',function () {
    let userName=document.getElementById('userName').value;
    let password = document.getElementById('password').value
    let status= User.login(userName,password,'client');
    if(status=="SUCCESS"){
        console.log(status);
        console.log('zzz');
        location.assign('client/index.html')
    }
    else{
        document.getElementById("alertingLogin").classList.remove('d-none')
    }
})