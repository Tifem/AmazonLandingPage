import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage(){
    try{
        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            loadCart(() => {
                // reject('error3')
                resolve('value3')
            });
        });

    }catch (error) {
        console.log('Unexpected error. please try again later');

    }

    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve()
//         });
//     })

// ]).then(() =>{
//     renderOrderSummary();
//     renderPaymentSummary();
// });


/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });

}).then(() => {
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve()
        });
    });

}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
})

*/

// loadProducts(() =>{
//     loadCart(() =>{
//         renderOrderSummary();
//         renderPaymentSummary();
//     })
// });

//async await is a shortcut for promise. promise works directly with fetch
//async makes a function return promise
//await let us wait for a promise to finish befor going to the next line
//await let us write an asynchronous code like a normal code