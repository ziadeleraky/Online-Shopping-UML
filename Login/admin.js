let user = getCookie('loggedUser');
if(user){
    userType= JSON.parse(user).type;
}
user=JSON.parse(user);
User.login(user.username,user.password,userType);
let productsContainer=document.getElementById('products');
for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML+=`          
    <tr>
    <td>${products[i].id}</td>
    <td>${products[i].productName}</td>
    <td>${products[i].productQuantity}</td>
    <td>${products[i].piecePrice}</td>
    <td>${products[i].productCategory}</td>
    <td>
    <button class="btn btn-primary" id=${"deleteProd"+products[i].id}>delete</button>
    </td>
    <td>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal" id=${"update"+products[i].id}>edit</button>
    </td>
    
  </tr>`    
}
for (let i = 0; i < products.length; i++) {
    document.getElementById("deleteProd"+products[i].id).addEventListener('click',function(){
        loggedUser.deleteProduct(products[i].id);
        document.getElementById('products').innerHTML=``;
        for (let j = 0; j < products.length; j++) {
            document.getElementById('products').innerHTML+=`<tr>
            <td>${products[j].id}</td>
            <td>${products[j].productName}</td>
            <td>${products[j].productQuantity}</td>
            <td>${products[j].piecePrice}</td>
            <td>${products[j].productCategory}</td>
            <td>
                <button class="btn btn-primary" id=${"deleteProd"+products[j].id}>delete</button>
            </td>
            <td>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal" id=${"update"+products[j].id}>edit</button>
            </td>
        </tr>`
    
        }
    })        
}
let selectCategory = document.getElementById('productCategory')
for (let i = 0; i < categories.length; i++) {
    selectCategory.options[selectCategory.options.length] = new Option(categories[i].categoryName, categories[i].categoryName);
}
document.getElementById("addProduct").addEventListener("click",function(){
    loggedUser.addProduct(document.getElementById('productName').value ,document.getElementById('productQuantity').value , document.getElementById('productPrice').value ,document.getElementById('productCategory').value )
    productsContainer.innerHTML=``;
    for (let i = 0; i < products.length; i++) {
        productsContainer.innerHTML+=`          
        <tr>
        <td>${products[i].id}</td>
        <td>${products[i].productName}</td>
        <td>${products[i].productQuantity}</td>
        <td>${products[i].piecePrice}</td>
        <td>${products[i].productCategory}</td>
        <td>
        <button class="btn btn-primary" id=${"deleteProd"+products[i].id}>delete</button>
        </td>
        <td>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal" id=${"update"+products[i].id}>edit</button>
        </td>
        
      </tr>`    
    }
})
var productHoldId=0;
for (let i = 0; i < products.length; i++) {
    document.getElementById("update"+products[i].id).addEventListener('click',function(){
        productHoldId=products[i].id;
    })    
}
document.getElementById("updateProduct").addEventListener('click',function(){
    loggedUser.updateProduct(productHoldId,document.getElementById('updateProductName').value ,document.getElementById('updateProductQuantity').value , document.getElementById('updateProductPrice').value);
    document.getElementById('products').innerHTML=``;
    for (let j = 0; j < products.length; j++) {
        document.getElementById('products').innerHTML+=`<tr>
        <td>${products[j].id}</td>
        <td>${products[j].productName}</td>
        <td>${products[j].productQuantity}</td>
        <td>${products[j].piecePrice}</td>
        <td>${products[j].productCategory}</td>
        <td>
            <button class="btn btn-primary" id=${"deleteProd"+products[j].id}>delete</button>
        </td>
        <td>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModal" id=${"update"+products[j].id}>edit</button>
        </td>
    </tr>`

    }
})

///categories
var categoryContainer = document.getElementById('categories')
for (let i = 0; i < categories.length; i++) {
    categoryContainer.innerHTML+=`          
    <tr>
    <td>${categories[i].id}</td>
    <td>${categories[i].categoryName}</td>
    <td>
    <button class="btn btn-primary" id=${"deletecat"+categories[i].id}>delete</button>
    </td>
    <td>
    <button class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#updateCategoryModal" id=${"edit"+categories[i].id}>edit</button>
    </td>
    
  </tr>`    
}
for (let i = 0; i < categories.length; i++) {
    document.getElementById("deletecat"+categories[i].id).addEventListener('click',function(){
        loggedUser.deleteCategory(categories[i].id);
        document.getElementById('categories').innerHTML=``;
        for (let j = 0; j < categories.length; j++) {
            document.getElementById('categories').innerHTML+=`<tr>
            <td>${categories[j].id}</td>
            <td>${categories[j].categoryName}</td>
            <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateCategoryModal" id=${"deletecat"+categories[j].id}>delete</button>
            </td>
            <td>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateCategoryModal" id=${"edit"+categories[j].id}>edit</button>
            </td>
        </tr>`
    
        }
    })        
}
document.getElementById("addCategory").addEventListener("click",function(){
    loggedUser.addCategory(document.getElementById('categoryName').value )
    categoryContainer.innrHTML=``;
    for (let i = 0; i < categories.length; i++) {
        categoryContainer.innerHTML+=`<tr>
        <td>${categories[i].id}</td>
        <td>${categories[i].categoryName}</td>
        <td>
            <button class="btn btn-primary" id=${"deletecat"+categories[i].id}>delete</button>
        </td>
        <td>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateCategoryModal" id=${"edit"+categories[i].id}>edit</button>
        </td>

    </tr>`
    }
})
var categoryHoldId=0;
for (let i = 0; i < categories.length; i++) {
    document.getElementById("edit"+categories[i].id).addEventListener('click',function(){
        categoryHoldId=categories[i].id;
    })    
}
document.getElementById("updateCategory").addEventListener('click',function(){
    loggedUser.updateCategory(categoryHoldId,document.getElementById('updateCategoryName').value );
    document.getElementById('categories').innerHTML=``;
    for (let j = 0; j < categories.length; j++) {
        categoryContainer.innerHTML+=`<tr>
        <td>${categories[j].id}</td>
        <td>${categories[j].categoryName}</td>
        <td>
            <button class="btn btn-primary" id=${"deletecat"+categories[j].id}>delete</button>
        </td>
        <td>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateCategoryModal" id=${"edit"+categories[j].id}>edit</button>
        </td>

    </tr>`

    }
})





///USERS
var usersContainer = document.getElementById('users');
for (let i = 0; i < users.length; i++) {
    usersContainer.innerHTML+=`          
    <tr>
    <td>${users[i].id}</td>
    <td>${users[i].name}</td>
    <td>${users[i].username}</td>
    <td>${users[i].email}</td>
    <td>${users[i].type}</td>
    <td>
    <button class="btn btn-primary" id=${"delete"+users[i].id}>delete</button>
    </td>
  </tr>`    
}
for (let i = 0; i < users.length; i++) {
    document.getElementById("delete"+users[i].id).addEventListener('click',function(){
        loggedUser.deleteUser(users[i].id);
        document.getElementById('users').innerHTML=``;
        for (let j = 0; j < users.length; j++) {
            document.getElementById('users').innerHTML+=`<tr>
            <td>${users[j].id}</td>
            <td>${users[j].name}</td>
            <td>${users[j].username}</td>
            <td>${users[j].email}</td>
            <td>${users[j].type}</td>
            <td>
                <button class="btn btn-primary" id=${"delete"+users[j].id}>delete</button>
            </td>

    
        </tr>`
    
        }
    })        
}
document.getElementById("addUser").addEventListener("click",function(){
    loggedUser.addUser(document.getElementById('name').value,document.getElementById('userName').value,document.getElementById('email').value,document.getElementById('password').value,document.getElementById('userType').value )
    usersContainer.innerHTML=``;
    for (let i = 0; i < users.length; i++) {
        usersContainer.innerHTML+=`<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].type}</td>

        <td>
            <button class="btn btn-primary" id=${"delete"+users[i].id}>delete</button>
        </td>

    </tr>`
    }
})
for (let i = 0; i < orders.length; i++) {
    document.getElementById("ordersAdmin").innerHTML+=`<tr>
    <td>
        ${orders[i].orderId}
    </td>
    <td>
        ${orders[i].userId}
    </td>
    <td>
        ${orders[i].totalPrice}
    </td>
    <td>
    ${orders[i].shippingtype}
    </td>
    <td>
        ${orders[i].paymentOption}
    </td>
    <td>
        ${orders[i].orderStatus}
    </td>
    
    <td>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editOrderModal" id=${"updateOrd"+orders[i].orderId}>edit</button>
    </td>
</tr>`
};
var orderHoldId=0;
for (let i = 0; i < orders.length; i++) {
    document.getElementById("updateOrd"+orders[i].orderId).addEventListener('click',function(){
        orderHoldId=orders[i].orderId;
        console.log(orderHoldId);
    })    
}
document.getElementById("changeOrderStatus").addEventListener("click",function(){
    loggedUser.changeOrderStatus(orderHoldId,document.getElementById("orderStatus").value);
    document.getElementById("ordersAdmin").innerHTML=``;
    for (let i = 0; i < orders.length; i++) {
        document.getElementById("ordersAdmin").innerHTML+=`<tr>
        <td>
            ${orders[i].orderId}
        </td>
        <td>
            ${orders[i].userId}
        </td>
        <td>
            ${orders[i].totalPrice}
        </td>
        <td>
        ${orders[i].shippingtype}
        </td>
        <td>
            ${orders[i].paymentOption}
        </td>
        <td>
            ${orders[i].orderStatus}
        </td>
        
        <td>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editOrderModal" id=${"update"+orders[i].orderId}>edit</button>
        </td>
    </tr>`
    };
    
})
