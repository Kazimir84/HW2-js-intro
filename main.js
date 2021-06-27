console.log('------------- # 4');
let a = 2;
let b = 4;
let sum = a + b;
let increment = b - a;
let split = b / a;
let multiply = a * b;
console.log ('Сумма двух значений a+b = ', sum);
console.log ('Разница двух значений b-a = ', increment);
console.log ('Результат деления значений b/a = ', split);
console.log ('Результат умножения двух значений a*b = ', multiply);

console.log('------------- # 5');
for (let i = 1; i <= 5; i++){
    console.log(i);
};
console.log('------------- # 6');
for (let i = 5; 0 < i; i--){
    console.log(i);
};
console.log('------------- # 7');
function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else {
        console.log ('У вас средний балл');
    };
};
getMarkInfo(10);
console.log('------------- # 8');
function getDayInfo(position){
    switch (position) {
        case 0:
            console.log ('Sunday');
            break;
        case 1:
            console.log ('Monday');
            break;
        case 2:
            console.log ('Tuesday');
            break;
        case 3:
            console.log ('Wednesday');
            break;
        case 4:
            console.log ('Thursday');
            break;
        case 5:
            console.log ('Friday');
            break;
        case 6:
            console.log ('Saturday');
            break;
        default:
            console.log ('Wrong data');
            break;
    };
};
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);
console.log('------------- # 9');
let arr = ['a', 'b', 'c'];
arr.push(1,2,3);
console.log(arr);
console.log('------------- # 10');
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr);
console.log('------------- # 11');
function sum2(n){
    n = Number(prompt('Введите корректное, абсолютное, целое число от 1', 1));
    console.log (typeof(n));
   if (n >= 1){
       n = n * (n + 1) / 2;
       alert('Сумма чисел от 1 до введенного Вами числа = ' + n);
       console.log(n);       
   } else {
       console.log('Введите корректное, абсолютное, целое число от 1');
       alert('Введите корректное, абсолютное, целое число от 1');
   };
};
sum2();

