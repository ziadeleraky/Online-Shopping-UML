var register = document.getElementById("register")
register.addEventListener('click',function(){
    let userName = document.getElementById("userName").value;
    let name=   document.getElementById('name').value;
    let email=   document.getElementById('email').value;
    let password=   document.getElementById('password').value;
    //User.register(name,userName,email,password,'client');
    if(User.register(name,userName,email,password,'client')==true){
        console.log(loggedUser);
    }
})