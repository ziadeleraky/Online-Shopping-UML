var loginAdmin = document.getElementById('loginAdmin');
loginAdmin.addEventListener('click',function () {
    let userName=document.getElementById('userName').value;
    let password = document.getElementById('password').value
    let status=User.login(userName,password,'admin');
    if(status=="SUCCESS"){
        console.log(status);
        location.assign('admin.html')
    }
    else{
        document.getElementById("alertingLogin").classList.remove('d-none')
    }
})