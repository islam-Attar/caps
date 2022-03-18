'use strict';

const eventEmitter = require('../lib/events');
const {createOrder} = require('./vendor');


 eventEmitter.on('pick up', pickUpHandler)
 eventEmitter.on('in-transit', inTransitHandler)
 eventEmitter.on('delivered', deliveredHandler)


function inTransitHandler(payload){

    console.log('EVENT',payload);
}


function fakeOrderHandler(){
    console.log('New order is ready to be picked up!');
    eventEmitter.emit('pick up', {
    event: "pick up",
    time: new Date().toString(),
    payload: createOrder()
        
    })
}

function deliveredHandler(payload){
  console.log(`EVENT`, payload);
}

 function pickUpHandler(payload){

  console.log('EVENT', payload);
  console.log(`DRIVER: picked up ${payload.payload.orderID} `);
  
  setTimeout(() => {

      payload.time = new Date().toString()
      payload.event = 'in-transit'

    eventEmitter.emit('in-transit', payload) 
  }, 1000);

  setTimeout(() => {

    payload.time = new Date().toString().split('(')
    payload.event = 'delivered'
    console.log(`DRIVER: delivered up ${payload.payload.orderID}`);
    console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
  eventEmitter.emit('delivered', payload) 
}, 3000);
 }


module.exports = {fakeOrderHandler}