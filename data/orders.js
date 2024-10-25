export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrders(order){
    order.unshift(orders);
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}