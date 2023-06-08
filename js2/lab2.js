"use strict";

/**
 * Возвращает a, возведённое в b-ную степень.
 *
 * @param {number} a Возводимое в степень число.
 * @param {number} b Степень, должна быть натуральным числом.
 * @return {number} a ** b, возведённое в n-ную степень.
 */

//функция возведения числа x в степень n
function pow(x, n) {
    return x ** n; //возвращается x в степени n
}

/**
 * Возвращает сумму чисел от 1 до n включительно.
 * @param {number} n Число, до которого вычисляется сумма, должно быть натуральным числом.
 * @return {number} sum, сумму чисел от 1 до n включительно.
 */

//функция суммы чисел от 1 до n
function sumTo(n) {
    return (n * (n + 1)) / 2 //формула суммы чисел

}

/**
 * Возвращает факториал числа n!.
 * @param {number} n Число, факториал которого вычисляется, должно быть натуральным числом.
 * @return {number} res, факториал числа n!.
 */

//функция факториала числа n
function factorial(n) {
    if (n <= 0) {
        return 1n;
    }
    else {
        return (BigInt(n) * BigInt(factorial(n - 1))); //возвращает произведение числа n и факториала n-1
    }
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n Порядковый номер числа Фибоначчи, должен быть натуральным числом.
 * @return {number} b, n-е число Фибоначчи.
 */

function fib(n) {
    let a = 1n;
    let b = 1n;
    if (n == 0n) {
        return 0n;
    }
    else {
        for (let i = 3n; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

/**
 * Возвращает результат сравнения значений y и x.
 * @param {number} x Первый аргумент, должен быть целочисленным.
 * @param {number} y Второй аргумент, должен быть целочисленным.
 * @return {function} Анонимная функция, которая вернет true, false или null
    
 }} Результат сравнения.
 */

//сравнение числа x и числа y из анонимной функции
function compare(x) {
    return function (y) { //сама анониная функция
        if (y > x) return true;
        else if (y < x) return false;
        else if (y == x) return null;
    }
}

/**
 * Возвращает сумму всех своих аргументов.
 * @param {number} Значения аргументов.
 * @return {number} result, сумма всех своих аргументов.
 */


//функция суммы всех своих аргументов
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result;
}