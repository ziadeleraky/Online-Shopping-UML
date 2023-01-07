
var cart=[]
class Cart {
    constructor(){
        this.cart=[];
    }
    /*************viewCart*****************/
    viewCart = function() {
       for(let i=0 ;i<cart.length ;i++){
              var cartId = cart[i]['prodId']
                var cartName = cart[i]['productName']
                var cartQuantity= cart[i]['quantity']
                var cartPrice = cart[i]['piecePrice']
                var carttotalPrice = cart[i]['totalPrice']
               
                console.log( `your order is productId ${cartId} & productName ${cartName} & productQuantity ${cartQuantity} & piecePrice ${cartPrice} & productforall ${carttotalPrice}`);
       }
    }
    /*********addyoCart***************/
    addtoCart = function(prodId,quantity){  //cart [{productid,quantity,}]
        //if there is product found
        for(let i=0 ;i<cart.length ;i++){
            var cartId = cart[i]['prodId']
            if(cartId==prodId){     
                return this.editCart(prodId,quantity) ;}
        }

        for(let i=0 ;i<products.length ;i++){
          // var objectValue = Object.values(products[i])
            var productId = products[i]['id']
             var prodquantity ;
             var totalPrice=0;
            if(productId==prodId){
                var productName = products[i]['productName']
                var productQuantity= products[i]['productQuantity']
                var piecePrice = products[i]['piecePrice']
                var productCategory = products[i]['productCategory']
                if((productQuantity-quantity)<0 || (quantity>productQuantity)){
                    console.log("sorry this qunatity not found")
                    return;
                }     
                totalPrice += (quantity * piecePrice)
                products[i]['productQuantity']=productQuantity-quantity
                cart.push({prodId,productName,quantity,piecePrice,totalPrice,productCategory})
               
            }
        }
    }  
    /****************deletfromCart*****************/
    deletfromCart = function(cartId){
        for(let i=0 ;i<cart.length ;i++){
            
            var cartdeletedId = cart[i]['prodId']
            if(cartdeletedId == cartId){
                // var productId = products[i]['id']
                var cartName = cart[i]['productName']
                var cartQuantity= cart[i]['quantity']
  
                products[i]['productQuantity'] += cartQuantity
               cart.splice(i,1)
          

                return;
            }

        }
    }
    deleteallCart = function(){
        if(cart.length>0){ 
            for(let i=0 ;i<cart.length ;i++){
                var cartQuantity= cart[i]['quantity']
                products[i]['productQuantity'] += cartQuantity
        }
        cart=[];
        }
       
    }
    /**************editCart*************/
    editCart = function(prodId,newquantity){
        var prodquantity;
        for(let i=0 ;i<cart.length ;i++){
            var cartupdatedId = cart[i]['prodId']
            if(cartupdatedId == prodId ){
                var cartName = cart[i]['productName']
                var cartQuantity= cart[i]['quantity']
                var cartPrice = cart[i]['piecePrice']
                var carttotalPrice = cart[i]['totalPrice']
                if((products[1]['productQuantity']-newquantity)<0){
                    console.log("sorry error found")
                 //   prodquantity=productQuantity
                 return;
                }
                prodquantity=Math.abs(cartQuantity-newquantity) //to get diff to update products

                cartQuantity = newquantity;
               carttotalPrice= cartQuantity * cartPrice;

              //  console.log( `your order is productId ${cartupdatedId} & productName ${cartName} & productQuantity ${cartQuantity} & piecePrice ${cartPrice} & productforall ${carttotalPrice}`);   
                cart[i]['totalPrice'] = carttotalPrice;
               cart[i]['quantity']=cartQuantity;
              
               products[i]['productQuantity'] -= prodquantity;

                return;
            }
    }

    }
}
/***************order ********/
class Order {
    static orderIDs;
    constructor(orderId,orderStatus,createdAt,shippingDate,paymentOption,shippingtype){
     this.orderId=Order.orderIDs,
     this.orderStatus = orderStatus,
     this.createdAt = createdAt,
     this.shippingDate = shippingDate,
     this.paymentOption = paymentOption,
     this.shippingtype = shippingtype,
     this.totalPrice=0,
     this.index=0;

     
     /****check on paymentOption */

     for(let i=0 ;i<paymentData.length ;i++){
          var paymentmethod = paymentData[i]['method']
          if(paymentmethod==this.paymentOption){
            var paymentId = paymentData[i]['paymentId']
            console.log( `your paymentmethod ${paymentmethod} & paymentId ${paymentId}`);    
           
          }
        }

        /****check on paymentOption */

     for(let i=0 ;i<shippingData.length ;i++){
        var shippingtype = shippingData[i]['type']
        if(shippingtype==this.shippingtype){
            this.index=i;
          var shippingId = shippingData[i]['shippingId']
          var shippingcost = shippingData[i]['cost']
          console.log( `your shippingId ${shippingId} & shippingtype ${paymentmethod} & shippingcost ${shippingcost}`);    
          
        }}
    
    }    
    /*********orderDetails************/
     orderDetails=function(){
        for(let i=0 ;i<cart.length ;i++){
                var carttotalPrice = cart[i]['totalPrice']
                this.totalPrice +=carttotalPrice;
        }
         return this 
     }

     addOrder= function(){
       // this.orderDetails();
        var addobj ; 
      
      return addobj;
     }

     checkout = function(){
        return this.orderDetails().totalPrice+shippingData[this.index]['cost'];
     }
 }
Order.orderIDs=0;

 var cart1= new Cart();
 cart1.addtoCart(1,3)
 cart1.addtoCart(2,5)
 cart1.viewCart();

var order1 = new Order(1,"hold","10-12-2022","15-12-2022","Visa","fast")
//console.log(order1.orderDetails())
console.log(order1.addOrder())
//console.log(order1.addOrder(1,"menna"))
console.log(order1.checkout())
