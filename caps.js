'use strict';

const {fakeOrderHandler} = require('./apps/driver');





setInterval(() => {
    fakeOrderHandler()
}, 5000);