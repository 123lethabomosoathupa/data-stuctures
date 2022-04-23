var nums = [];
var totalOrderAmt = 0;
var cart = [];
var order = [];

class stockItem{
    constructor(id, name, price){
        this.stockId = id;
        this.stockName = name;
        this.stockPrice = price;
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
function add_selection(x) { 
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
  
  function remove_selection(x) {
    if (quantities[x] > 0) {
      console.log(x);
      quantities[x] = quantities[x] - 1;
      totals[x] = stocks[x].stockPrice * quantities[x];
      totalOrderAmt -= stocks[x].stockPrice;
  
      display_all();
    }
  }

function displayTotal() {
    document.getElementById("total").innerHTML =
        "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}

var stock01 = new stockItem(01, "Bar One", 13);
var stock02 = new stockItem(02, "Red Bull", 20);
var stock03 = new stockItem(03, "Monster Energy", 20);
var stock04 = new stockItem(04, "2litre Coke", 25);
var stock05 = new stockItem(05, "2litre Sprite", 25);
var stock06 = new stockItem(06, "2litre Stoney", 25);
var stock07 = new stockItem(07, "Lunch Bar", 13);
var stock08 = new stockItem(08, "5 statr", 13);
var stock09 = new stockItem(09, "Predator Endergy Drink", 11);
var stock10 = new stockItem(10, "Gummy Worms", 18);

var stocks = [stock01, stock02, stock03, stock04, stock05, stock06, stock07, stock08, stock09, stock10];

function display_all() {
    var myTable =
    "<table><th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable +=
        "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable +=
        "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable +=
        "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable +=
        "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable +=
        "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < stocks.length; i++) {
        myTable +=
            "<tr><td style='width: 100px; text-align: right;'>" + stocks[i].stockName + "</td><";
        myTable +=
            "<td style='width: 100px; text-align: right;'>" + stocks[i].stockPrice.toFixed(2) + "</td>";
        myTable +=
            "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable +=
            "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable +=
            "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable +=
            "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";

    document.getElementById("demo").innerHTML = myTable;
}