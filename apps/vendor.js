'use strict';

const {faker} = require('@faker-js/faker')


function createOrder(){
let fakeOrder  = {
    store: "PC's Store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }
  return fakeOrder;
}

module.exports = {createOrder}




























