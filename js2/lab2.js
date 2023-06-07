"use strict";
//функция возведения числа x в степень n
function pow(x, n){
    return x**n; //возвращается x в степени n
} 

//функция суммы чисел от 1 до n
function sumTo(n){
    return (n*(n+1))/2 //формула суммы чисел

}

//функция факториала числа n
function factorial(n){
    if (n<=0)
    {
        return 1n;
    }
    else{
        return ( BigInt (n) *  BigInt(factorial(n-1))); //возвращает произведение числа n и факториала n-1
    }
}

//n-ое число фибоначи
function fib(n){
    a = BigInt(1);
    b=BigInt(1);
    if (n== BigInt(0))
    {
        return BigInt(0);
    }
    else
    {
        for (i = BigInt(3); i<=n; i++)
        {
            c = a+b; //цикл для числа как суммы двух предыдущих его чисел
            a=b;
            b=c;
        }
        return b;
    }
}

//сравнение числа x и числа y из анонимной функции
function compare(x){
return function(y){ //сама анониная функция
    if (y>x) return true;
    else if (y<x) return false;
    else if (y==x) return null;
}
}
//функция суммы всех своих аргументов
function sum(){
    var result = 0;
    for (var i = 0; i < arguments.length; i++)
    {
        result+=arguments[i]
    }
    return result;
}