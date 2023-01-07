let paymentData = [];
class Payment {
  static paymentId = 0;
  
  constructor(method) {
    Payment.paymentId++;
    this.paymentId = Payment.paymentId;
    this.method = method;
    paymentData.push(this);
  }
  
  viewPaymentMethod(method) {
    if (paymentData.length == 0) {
      throw new Error("there are no payment methods");
    } else {
      let flag = 0;
      for (const key in paymentData) {
        if (paymentData[key]["method"].toLowerCase() == method.toLowerCase()) {
          return paymentData[key];
        }
      }
      if (flag == 0) {
        throw new Error("Not Found");
      }
    }
  }
  
  static viewِAllPaymentMethod() {
    if (paymentData.length == 0) {
      throw new Error("there are no payment methods");
    } else {
      return paymentData;
    }
  }
}
let p = new Payment("Cash");
let p2= new Payment("Visa");
console.log(p.viewPaymentMethod("cash"));
console.log(Payment.viewِAllPaymentMethod());