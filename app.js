

// Проверка на полиндром


// Первый шаг — преобразование символов входной строки в нижний регистр. Это гарантия того, что программа будет сравнивать именно сами символы, а не регистр или еще что-то.

// Второй шаг — реверс строки. Это сделать несложно: необходимо преобразовать ее в массив посредством метода .split() (библиотека String). Потом мы переворачиваем массив, используя .reverse() (библиотека Array). Последний этап — преобразование обратного массива в строку при помощи .join() (библиотека Array).






// const palindrome = str => {
//     // turn the string to lowercase
//     str = str.toLowerCase()
//     // reverse input string and return the result of the
//     // comparisong
//     return str === str.split('').reverse().join('')
//   }
//   document.write(palindrome('АлА'));





////////////////////////////////////////////////////////////////**

//
// FizzBuzz


// Постановка

// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.




//   const A = num => {

//     for  (let i=1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             document.writeln('FizBuz')
//         }

//         else if (i % 5 === 0) {
//             document.writeln('Buz')
//         }


//         else if (i % 3 === 0) {
//             document.writeln('Fiz')
//         }
//         else {
//             document.writeln(i)
//         }
//     }
// }
// document.write(A(100))






// //////////////////////////////////////////
// Поиск гласных

// Достаточно простая задача, которая часто попадается на собеседованиях.

// Постановка

// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».



// const findVowels = str => {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for(let char of str.toLowerCase()) {
//       if(vowels.includes(char)) {
//         count++
//       }
//     }
//     return count
//   }

//   document.write('колличество гласных: '+ findVowels('hello'))




//   const glassn = str => {

// let count = 0
// const arr = ['a', 'o', 'u', 'i', 'e']
// for(let char of str.toLowerCase()) {
//     if (arr.includes(char)) {
//         count++
//     }
// }
//     return count


//   }

//   document.write(glassn("hello"))