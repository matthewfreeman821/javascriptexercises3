var myArray = [1, 2, 3, -4, -5, 6, 7, -8, -9, 10];
var positiveArray = [];
var evenArray = [];
var squareArray = [];
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];
var coolCities = [];
var citiesNames = [];
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
var goodJob = [];

myArray.forEach(function (num) {
    if (num >= 0) {
        positiveArray.push(num);
    }
});


myArray.forEach(function (num) {
    if (num % 2 == 0) {
        evenArray.push(num);
    }
});

myArray.forEach(function (num) {
    num = num * num;
    squareArray.push(num);
});


people.forEach(function (name) {
    console.log('Good job, ' + name + '!')
})

function hello () {
    console.log('Hello, world!')
};

function call3Times(fun) {
    fun();
    fun();
    fun();
};

call3Times(hello);


function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
};

function strMultiply(str, times) {
    repeatedString = [];
    //use range function to repeat given str and put into repeatedString
    return repeatedString;
};