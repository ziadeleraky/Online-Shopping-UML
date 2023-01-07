function setCookie(cookieName , cookieValue , expiryDate){
    //console.log(expiryData);
    cookieName = cookieName.trim();
    if(expiryDate!=undefined){
        document.cookie=""+cookieName+"="+cookieValue+";expires="+expiryDate;
    }
    else{
        document.cookie=""+cookieName+"="+cookieValue/*+";expires="+expiryDate*/;

    }
}
function getCookie(cookieName){
    cookieName = cookieName.trim();
    var cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        cookies[i]=cookies[i].split("=");
        cookies[i][0]=cookies[i][0].trim();
        cookies[cookies[i][0]]=cookies[i][1];
    }
    return cookies[cookieName];
}
function allCookieList(){
    var cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        cookies[i]=cookies[i].split("=");
        cookies[i][0]=cookies[i][0].trim();
        cookies[cookies[i][0]]=cookies[i][1];
    }
    return cookies;
}
function hasCookie(cookieName){
    var cookies = document.cookie.split(";");
    var hasACookie=0;
    for (let i = 0; i < cookies.length; i++) {
        cookies[i]=cookies[i].split("=");
        cookies[i][0]=cookies[i][0].trim();
        cookies[cookies[i][0]]=cookies[i][1];
    }
    for (let  x in cookies) {
        if(x == cookieName){
            hasACookie=1;
        };
    }
    return hasACookie;
}
function deleteCookie(cookieName) {
    var pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth()-2);
    var cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            cookies[i]=cookies[i].split("=");
            cookies[i][0]=cookies[i][0].trim();
            cookies[cookies[i][0]]=cookies[i][1];
            cookies[i]=undefined;
        }
        for (let  x in cookies) {
            
            if(x == cookieName){
                document.cookie = ""+cookieName+"="+cookies[cookieName]+";expires="+pastDate;
                //cookies[x] = ""+cookieName+"="+cookies[cookieName]+";expires="+todayDate;
            };
        }
    //document.cookie = ""+cookieName+"="+cookies[cookieName]+";expires="+todayDate;
}