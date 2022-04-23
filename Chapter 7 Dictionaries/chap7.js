//Example 7-1. The Dictionary class

function Dictionary() {
 this.add = add;
 this.datastore = new Array();
 this.find = find;
 this.remove = remove;
 this.showAll = showAll;
}
function add(key, value) {
 this.datastore[key] = value;
}
function find(key) {
 return this.datastore[key];
}
function remove(key) {
 delete this.datastore[key];
}
function showAll() {
 for (var key of Object.keys(this.datastore)) {
 console.log(key + " -> " + this.datastore[key]);
 }
}

var pbook = new Dictionary();

pbook.add("Mike", "123");
pbook.add("John", "929");
pbook.add("Allen", "543");


//Example 7-3. Updated Dictionary class definition


function Dictionary() {
 this.add = add;
 this.datastore = new Array();
 this.find = find;
 this.remove = remove;
 this.showAll = showAll;
 this.count = count;
 this.clear = clear;
}
function add(key, value) {
 this.datastore[key] = value;
}
function find(key) {
 return this.datastore[key];
}
function remove(key) {
 delete this.datastore[key];
}
function showAll() {
 for (var key of Object.keys(this.datastore)) {
 console.log(key + " -> " + this.datastore[key]);
 }
}
function count() {
 var n = 0;
 for (var key of Object.keys(this.datastore)) {
 ++n;
 }
 return n;
}
function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
        }
}

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());
