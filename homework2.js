// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

const divByTwo = numsArray.filter(divNum => {
    if (divNum % 2 === 0) {
        return divNum;
    }
})

let summ = 0;

divByTwo.forEach(numm => {
    summ += numm;
}
)

console.log(summ + "\n");

// Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
]
const names = [];
const names18Plus = people.forEach(ages => {
    if (ages.age >= 18) {
        names.push(ages.name);
    }
}
)

// ! const names = people
// !    .filter(person => person.age >= 18)
// !     .map(person => person.name);
console.log(names + "\n");




// напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];

let longestString = "";
for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
        longestString = strings[i];
    }
}
console.log(longestString + "\n");

// напишите программу которая возьмёт из данного массива наисенования книг которые вышли в этом году
// и добавит их в новый массив

const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];

const lastYear = [];
const theBooks = books.forEach(years => {
    if(years.release === 2023) {
        lastYear.push(years.title)
    }
})
console.log(lastYear + "\n");

// Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

const largest = 0;
numbers.forEach(num => {
if (num % 3 === 0 && num > largest){
largest = num;
}
})


// const divByThree = numbers.filter(numBy3 => {
//    if(numBy3 % 3 === 0) {
//        return numBy3;
//    }
// })
//console.log(divByThree + "\n");

// напишите программу которая найдёт самого старшего человека в данном массиве с объектами
// и сохранит его в переменную oldestPerson
const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

let oldestNumber = 0;
let oldestPerson = "";


for (let i = 0; i < people2.length; i++) {
    if (people2[i].age > oldestNumber) {
        oldestNumber = people2[i].age;
        oldestPerson = people2[i].name;
    }
}
console.log(oldestPerson);
