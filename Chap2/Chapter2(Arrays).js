//Question 1

function studentGrades() {

    this.grades = [];
    this.add = add;
    this.average = average;
}

function add(grades){
    this.grades.push(grades);
}

function average() {

    var total = 0;
for (var i = 0; i < this.grades.length; ++i) {
    total += this.grades[i];
return total / this.grades.length
}

}

var thisGrades = new studentGrades();
thisGrades.add(32);
thisGrades.add(78);
thisGrades.add(54);
thisGrades.add(32);
thisGrades.add(90);
thisGrades.add(90);
console.log(thisGrades.average());



// Question 2

function concat(accumulatedString, item) {
    return accumulatedString + item;
    }
    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduce(concat);
    print(sentence); 

function concat(accumulatedString, item) {
        return accumulatedString + item;
        }
        var words = ["the ", "quick ","brown ", "fox "];
        var sentence = words.reduceRight(concat);
        print(sentence);



//Question 3

function weekTemps() {
    this.dataStoreW = [];
    this.addW = addW;
    this.averageW = averageW;
    }
    function addW(temp) {
    this.dataStore.push(temp);
    }
    function averageW() {
    var totalW = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    totalW += this.dataStore[i];
    }
    return totalW / this.dataStore.length;
    }
    var thisWeek1 = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(61);
    thisWeek.add(65);
    thisWeek.add(65);
    thisWeek.add(65);
    thisWeek.add(65);


    console.log(thisWeek1.averageW());

    var thisWeek2 = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(67);
    thisWeek.add(62);
    thisWeek.add(45);
    thisWeek.add(75);
    thisWeek.add(35);   

    console.log(thisWeek2.average());

    var thisWeek3 = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(67);
    thisWeek.add(62);
    thisWeek.add(45);
    thisWeek.add(75);
    thisWeek.add(35);   

    // Question 4

var sentence = "James";
var words = sentence.split("");
for (var i = 0; i < words.length; ++i) {
print("word " + i + ": " + words[i]);
}





