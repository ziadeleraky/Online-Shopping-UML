
/***************order ********/
class Order {
    constructor(orderId,orderStatus,createdAt,shippingDate,paymentOption){
     this.orderId=orderId,
     this.orderStatus = orderStatus,
     this.createdAt = createdAt,
     this.shippingDate = shippingDate,
     this.paymentOption = paymentOption
    }
   
   
     orderDetails=function(){
         return this

     }
 }


var order1 = new Order(1,"hold","10-12-2022","15-12-2022","visa")
console.log(order1.orderDetails())



// function Order1(orderId,orderStatus,createdAt,shippingDate,paymentOption){
//     var orderrId = orderId   //private member
//     this.setorderId =function(orderId){this.orderId=orderId}
//      this.getorderId = function(){
//          return orderrId
//      }
//  }
 
// var order1 = new Order1(1,"hold","10-12-2022","15-12-2022","visa")
// console.log(order1.getorderId())
