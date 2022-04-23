//Example 5.1

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
   }
   function enqueue(element) {
    this.dataStore.push(element);
   }
   function dequeue() {
    return this.dataStore.shift();
   }
   function front() {
    return this.dataStore[0];
   }
   function back() {
    return this.dataStore[this.dataStore.length-1];
   }
   function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
   }
   function empty() {
    if (this.dataStore.length == 0) {
    return true;
    }
    else {
    return false;
    }
   }

   var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


//Example 5.2

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

var dancers = [
    "F Allison McMillan",
    "M Frank Opitz",
    "M Mason McMillan",
    "M Clayton Ruff",
    "F Cheryl Ferenback",
    "M Raymond Williams",
    "F Jennifer Ingram",
    "M Bryan Frazer",
    "M David Durr",
    "M Danny Martin",
    "F Aurora Adney"
]

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

var males = new Queue();
var females = new Queue();

function run() {
    getDancers();
    dance();
    noDancePartner();
}

function getDancers() {
    var names = [];
    for (var idx = 0; idx < dancers.length; idx++) {
        var person = dancers[idx].split(" ")
        var firstName = person[1];
        var lastName = person[2];

        names[idx] = firstName + " " + lastName;
    }

    for (var i = 0; i < dancers.length; ++i) {
        var person = dancers[i].split(" ");
        var sex = person[0];
        var name = names[i];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance() {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log("\tand the male dancer is: " + person.name);
        console.log("\n");
    }
}

function noDancePartner() {
    console.log("\n");
        if (!females.empty()){
            console.log(females.front().name + "is waiting to dance.");
        }
        if (!males.empty()){

        }console.log(males.front().name + "is waiting to dance.")
    }

run();


//exercise 5.3

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
 print("There are " + maleDancers.count() +
 " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
 print("There are " + femaleDancers.count() +
 " female dancers waiting to dance.");
}

//example 5.4

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
    if (digit == 1) {
    queues[nums[i]%10].enqueue(nums[i]);
    }
    else {
    queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
    }
   }
   function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
    nums[i++] = queues[digit].dequeue();
    }
    }
   }
   function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
    putstr(arr[i] + " ");
    }
   }

   var queues = [];
   for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
   }
   var nums = [];
   for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
   }
   console.log("Before radix sort: ");
   dispArray(nums);
   distribute(nums, queues, 10, 1);
   collect(queues, nums);
   distribute(nums, queues, 10, 10);
   collect(queues, nums);
   console.log("\n\nAfter radix sort: ");
   dispArray(nums);   

