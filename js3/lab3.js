"use strict";
import { fib } from './lab2.js';

/**
 * Возвращает дробную часть числа num.
 *
 * @param {number} num число, от которого нужно найти дробную часть.
 * @return {number} дробная часть числа.
 */

//функция возврата дробной части числа
export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }
    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}


/**
 * Возвращает строку str с заглавным первым символом.
 *
 * @param {string} str строка, которую нужно преобразовать.
 * @return {string} str с заглавным первым символом.
 */


//функция возврата строки с первым заглавным символом
export function ucFirst(str) {
    if (!str) return str; //Проверка на пустую строку
    return str[0].toUpperCase() + str.slice(1); // создаём новую строку на основе предыдущей
}

/**
 * Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 *
 * @param {string} str проверяемая строка.
 * @return {boolean} true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 */

//функция проверки строки
export function checkSpam(str) {
    let lowerStr = str.toLowerCase(); // строка переводится в нижний регистр
    return lowerStr.includes("xxx") || lowerStr.includes("viagra");
}

/**
 * Проверяет длину строки str.
 * если она превосходит maxlength – заменяет 
 * конец str на символ многоточие "…"
 * 
 * @param {string} str Проверяемая строка.
 * @param {number} maxlength максимальная длина строки.
 * @return {string} str, усеченная строка.
 */

//функция усечения строки
export function truncate(str, maxlength) {
    return (str.length > maxlength) ? //Если строка превосходит maxlength -
        str.slice(0, maxlength - 1) + '…' : str; // убираем на один символ больше при обрезании строки
}

/**
 * Дефисы в строке удаляются, а все слова 
 * после них получают заглавную букву.
 * 
 * @param {string} str Проверяемая строка.
 * @return {string} StrNew, преобразованная строка.
 */

//функция преобразования строки
export function camelize(str) {
    let strArr = str.split("-");
    let strNew = "";
    for (let i = 0; i <= strArr.length - 1; i++) {
        if (i == 0) {
            strNew = strArr[0];
        } else strNew += ucFirst(strArr[i]);

    } return strNew;

}

/**
 * Возвращает массив, заполненный числами 
 * Фибоначчи до n-го числа (не включая его).
 * 
 * @param {number} n натуральноее число, количество чисел Фибоначчи.
 * @return {Array} arr, массив с числами Фибоначчи.
 */
export function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}

/**
 * Возвращает массив из элементов, отсортированный по убыванию.
 *
 * @param {Array} arr массив элементов.
 * @return {Array} arr, массив, отсортированный по убыванию.
 */

export function arrReverseSorted(arr) {
    return arr.slice().sort(function (a, b) { //slice() создает копию исходного массива, метод sort() сортирует новый массив в порядке убывания с помощью функции сравнения
        return b - a;//принимает два аргумента a и b и возвращает результат вычисления b - a. Если результат вычисления отрицательный, то элемент a будет располагаться перед элементом b в массиве
    });
}

/**
* Возвращает массив уникальных, не повторяющихся значений.
*
* @param {Array} arr массив элементов.
* @return {Array} arr, массив с уникальными значениями.
*/

export function unique(arr) {
    let result = [];

    for (let str of arr) { //проверяем массив с результатом. Если элемент из arr есть в результате - игнорируем его
        if (!result.includes(str)) { // иначе - включаем в массив
            result.push(str);
        }
    }

    return result;
}