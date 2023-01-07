// var productsli = document.querySelectorAll(".filterProducts ul li")
// var allProduct = document.getElementById("allProducts");
// var shirts = document.getElementById("shirts");
// var trackpants = document.getElementById("trackpants");
// var watches = document.getElementById("watches");
// var sockes = document.getElementById("sockes");
// var shoes = document.getElementById("shoes");
// var sortt = document.getElementById("sort");

// var allproductsarr = document.getElementsByClassName("product");
// var allshirtsarr = document.getElementsByClassName("shirt");
// var allshoessarr = document.getElementsByClassName("shoes");
// var alltrackpantsarr = document.getElementsByClassName("trackpants");
// var allwatchesarr = document.getElementsByClassName("watch");
// var allsockesarr = document.getElementsByClassName("socks");

// function displynon () {
//     for(var i=0;i<allproductsarr.length;i++){
//         allproductsarr[i].style.display="none";
//         // sortt.style.display="none";
//     }
//     for(var i=0;i<productsli.length;i++){
//         productsli[i].classList.remove("active")
//     }
// }
// /*********allProductshow*** */
// allProduct.onclick = function(){
//     for(var i=0;i<allproductsarr.length;i++){
//         allproductsarr[i].style.display="inline-block";
//     }
//     this.classList.add("avtive");
//     console.log("allProductshow");
// }
// /*********allshirtsarr****/
// shirts.onclick = function() {
//     displynon();
//     for(var i=0;i<allshirtsarr.length;i++){
//         allshirtsarr[i].style.display="inline-block";
//     }
//     this.classList.add("active");
//     console.log("allshirts");
// }
// /*********allshoessarr****/
// shoes.onclick = function() {
//     displynon();
//     for(var i=0;i<allshoessarr.length;i++){
//         allshoessarr[i].style.display="inline-block";
//     }
//     this.classList.add("active");
//     console.log("allshoessarr");
// }
// /*********allshoessarr****/
// trackpants.onclick = function() {
//     displynon();
//     for(var i=0;i< alltrackpantsarr.length;i++){
//          alltrackpantsarr[i].style.display="inline-block";
//     }
//     this.classList.add("active");
//     console.log(" alltrackpantsarr");
// }
// /**********allwatchesarr ***/
// watches.onclick = function() {
//     displynon();
//     for(var i=0;i< allwatchesarr .length;i++){
//          allwatchesarr [i].style.display="inline-block";
//     }
//     this.classList.add("active");
//     console.log(" allwatchesarr ");
// }
// /******allsockesarr *******/
// sockes.onclick = function() {
//     displynon();
//     for(var i=0;i< allsockesarr.length;i++){
//          allsockesarr[i].style.display="inline-block";
//     }
//     this.classList.add("active");
//     console.log(" allsockesarr");
// }
/*<div class="product">
            <a href="./productdetails.html"><img src="assets/images//product-1.jpg" alt="" /></a>
            <h5>Res Printed T-Shirt</h5>
           
            <p>$50.00</p>
                        <input type="number" class="form-control w-50 mb-2 " placeholder="quantity"/>
            <button>Add to cart</button>
          </div>*/ 
let user = getCookie('loggedUser');
if(user){
    userType= JSON.parse(user).type;
}
user=JSON.parse(user);
User.login(user.username,user.password,userType);
var productsContainer = document.getElementById("products");
for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML+=`<div class="product">
    <a href="./productdetails.html"><img src="assets/images//product-1.jpg" alt="" /></a>
    <h5>${products[i].productName}</h5>
   
    <p>$${products[i].piecePrice}</p>
                <input id="cartQuantity${products[i].id}" type="number" class="form-control w-50 mb-2 " placeholder="quantity"/>
    <button id="Cart${products[i].id}">Add to cart</button>
  </div>`
}
for (let i = 0; i < products.length; i++) {
    let addCart = document.getElementById(`Cart${products[i].id}`);
    addCart.addEventListener("click",function(){
        if(document.getElementById(`cartQuantity${products[i].id}`).value){
            loggedUser.addToCart(1,document.getElementById(`cartQuantity${products[i].id}`).value);
        }
        else{
            console.log("please enter quantity");
        }
    })
}
for (let i = 0; i < categories.length; i++) {
    document.getElementById("categories").innerHTML+=`<li id="${categories[i].categoryName}" >
    <a href="#">${categories[i].categoryName}</a>
    </li> `    
}
document.getElementById("allProducts").addEventListener("click",function(){
    for (let i = 0; i < products.length; i++) {
        productsContainer.innerHTML+=`<div class="product">
        <a href="./productdetails.html"><img src="assets/images//product-1.jpg" alt="" /></a>
        <h5>${products[i].productName}</h5>
       
        <p>$${products[i].piecePrice}</p>
                    <input id="cartQuantity${products[i].id}" type="number" class="form-control w-50 mb-2 " placeholder="quantity"/>
        <button id="Cart${products[i].id}">Add to cart</button>
      </div>`
    }
    for (let i = 0; i < products.length; i++) {
        let addCart = document.getElementById(`Cart${products[i].id}`);
        addCart.addEventListener("click",function(){
            if(document.getElementById(`cartQuantity${products[i].id}`).value){
                loggedUser.addToCart(products[i].id,document.getElementById(`cartQuantity${products[i].id}`).value);
            }
            else{
                console.log("please enter quantity");
            }
        })
    }
})
for (let i = 0; i < categories.length; i++) {
    let category = document.getElementById(`${categories[i].categoryName}`);
    category.addEventListener("click",function(){
        productsContainer.innerHTML=``;
        let categoryProduct = loggedUser.categoryProducts(categories[i].categoryName);
        for (let j = 0; j < categoryProduct.length; j++) {
            productsContainer.innerHTML+=
            `<div class="product">
            <a href="./productdetails.html"><img src="assets/images//product-1.jpg" alt="" /></a>
            <h5>${categoryProduct[j].productName}</h5>
           
            <p>$${categoryProduct[j].piecePrice}</p>
                        <input id="cartQuantity${categoryProduct[j].id}" type="number" class="form-control w-50 mb-2 " placeholder="quantity"/>
            <button id="Cart${categoryProduct[j].id}">Add to cart</button>
          </div>`
        }
        for (let j = 0; j < categoryProduct.length; j++) {
            let addCart = document.getElementById(`Cart${categoryProduct[j].id}`);
            addCart.addEventListener("click",function(){
                if(document.getElementById(`cartQuantity${categoryProduct[j].id}`).value){
                    loggedUser.addToCart(categoryProduct[j].id,document.getElementById(`cartQuantity${categoryProduct[j].id}`).value);
                }
                else{
                    console.log("please enter quantity");
                }
            })
        }
        
    })

}
document.getElementById("search").addEventListener("keyup",function(){
    let result = loggedUser.searchProducts(document.getElementById("search").value);
    productsContainer.innerHTML=``;
    if(result.length){
        for (let i = 0; i < result.length; i++) {
            productsContainer.innerHTML+=
            `<div class="product">
            <a href="./productdetails.html"><img src="assets/images//product-1.jpg" alt="" /></a>
            <h5>${result[i].productName}</h5>
           
            <p>$${result[i].piecePrice}</p>
                        <input id="cartQuantity${result[i].id}" type="number" class="form-control w-50 mb-2 " placeholder="quantity"/>
            <button id="Cart${result[i].id}">Add to cart</button>
          </div>`
        }
    }
    else{
        productsContainer.innerHTML=`<h2>NO RESULTS FOR YOUR SEARCH</h2>`
    }

})
for (let i = 0; i < orders.length; i++) {
    document.getElementById("orders").innerHTML+=`<tr>
    <td>
        ${orders[i].orderId}
    </td>
    <td>
        ${orders[i].createdAt}
    </td>
    <td>
        ${orders[i].shippingtype}
    </td>
    <td>
    ${orders[i].paymentOption}
    </td>
    <td>
        ${orders[i].totalPrice}
    </td>
    <td>
        ${orders[i].orderStatus}
    </td>
    <td>
    <button class="btn btn-primary" id=${orders[i].orderId+"1"}>delete</button>
    </td>
</tr>`
};
for (let i = 0; i < orders.length; i++) {
    document.getElementById(orders[i].orderId+"1").addEventListener("click",function(){
        if(orders[i].orderStatus=="pending"){
            loggedUser.cancelOrder(orders[i].orderId);
            for (let i = 0; i < orders.length; i++) {
                document.getElementById("orders").innerHTML+=`<tr>
                <td>
                    ${orders[i].orderId}
                </td>
                <td>
                    ${orders[i].createdAt}
                </td>
                <td>
                    ${orders[i].shippingtype}
                </td>
                <td>
                ${orders[i].paymentOption}
                </td>
                <td>
                    ${orders[i].totalPrice}
                </td>
                <td>
                    ${orders[i].orderStatus}
                </td>
                <td>
                <button class="btn btn-primary" id=${orders[i].orderId+"1"}>delete</button>
                </td>
            </tr>`;                
            }

        console.log(done);
        }
        else{
            alert("this order can't be deleted");
        }
    })    
}