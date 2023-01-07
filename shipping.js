let shippingData = [];

class Shipping {
  static shippingId = 0;
  
  constructor(type, cost) {
    Shipping.shippingId++;
    this.shippingId = Shipping.shippingId;
    this.type = type;
    this.cost = cost;
    shippingData.push(this);
  }
  
  viewShipping(type) {
    if (shippingData.length == 0) {
      throw new "there are no shipping Data"();
    } else {
      let flag = 0;
      for (const key in shippingData) {
        if (shippingData[key]["type"].toLowerCase() == type.toLowerCase()) {
          return shippingData[key];
        }
      }
      if (flag == 0) {
        throw new Error("Not Found");
      }
    }
  }
  
  static viewِAllShipping() {
    if (shippingData.length == 0) {
      throw new Error("there are no shipping  Data");
    } else {
      return shippingData;
    }
  }
}

let ship = new Shipping("fast", 25);
let ship2 = new Shipping("very fast", 25);
console.log(ship.viewShipping("fast"));
console.log(Shipping.viewِAllShipping());