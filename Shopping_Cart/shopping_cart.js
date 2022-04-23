var nums = [];
var totalOrderAmt = 0;
var cart = [];
var order = [];

class stock_items {
    constructor(stock_id, stock_name, price,) {
        this.stock_id = stock_id;
        this.stock_name = stock_name;
        this.price = price;
    }
}

class cart_item {
    constructor(id, description, quantity) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
    }
}

class order_item {
    constructor(order_id, stock_id, quantity) {
        this.order_id = order_id;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
}

let items = [
    new stock_items(1, "Cheese Burger", 46),
    new stock_items(2, "French Toast", 35),
    new stock_items(3, "Pinewood Burger", 38),
    new stock_items(4, "Anchovy Toast", 23),
    new stock_items(5, "BBQ CHICKEN Tramezzi", 56),
    new stock_items(6, "Bacon and Egg Tramezzi", 59),
    new stock_items(7, "Coke", 12),
    new stock_items(8, "Stoney", 12),
    new stock_items(9, "Sprite", 12),
    new stock_items(10, "Fanta(Orange/Grape)", 12)
];

function add_selection(i) { 
    if (cart.length == 0) {
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
        display_all();
        return;
    } else {
        for (j = 0; j < cart.length; j++) {
            if (cart[j].id == items[i].stock_id) { 
                cart[j].quantity += 1;
                display_all();
                return;
            }
        }
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
    }
    display_all();
    return;
}

function subtract_selection(x) {

}

var order_number = 1;
var orders = [];
var checkout_list = [];

function displayTotal() {
    document.getElementById("total").innerHTML = "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}




function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";

    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";


    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + items[i].stock_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].stock_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].price + "</td>";

        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";

    }

    myTable += "</table>";


    var myCart = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Subtract</th>";


    for (i = 0; i < cart.length; i++) {
        myCart += "<tr><td style='width: 100px; text-align: right;'>" + cart[i].id + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].description + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].quantity + "</td>";
        myCart += "<td><button onclick='subtract_selection(" + i + ")'>Subtract</button></td>";
    }

    myCart += "</table>";

    document.getElementById("demo").innerHTML = myTable;
    document.getElementById("cart").innerHTML = myCart;


    window.onload = function () {
        display_all();
    }
}
