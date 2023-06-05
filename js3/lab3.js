import {fib} from './lab2.js';

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
       
    



//функция возврата строки с первым заглавным символом
export function ucFirst(str){
    if (!str) return str; //Проверка на пустую строку
    return str[0].toUpperCase() + str.slice(1); // создаём новую строку на основе предыдущей
}  


//функция проверки строки
export  function checkSpam(str){
    let lowerStr = str.toLowerCase(); // строка переводится в нижний регистр
    return  lowerStr.includes("xxx") || lowerStr.includes("viagra");
}

//функция усечения строки
export  function truncate(str, maxlength){
    return (str.length > maxlength) ? //Если строка превосходит maxlength -
    str.slice(0, maxlength - 1) + '…' : str; // убираем на один символ больше при обрезании строки
}

//функция преобразования строки
export  function camelize(str){
    let strArr = str.split("-");
    let strNew = "";
     for (let i = 0; i <= strArr.length - 1; i++){
      if (i == 0) {
         strNew = strArr[0];
      } else strNew += ucFirst(strArr[i]);
      
      } return strNew;

}

// функция массива чисел фибоначи
export function fibs(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(fib(i)); // для каждой итерации добавляет в массив i-е число фибоначи вплоть до n
    }
    return arr;
}


export function arrReverseSorted(arr){
    return arr.sort((a, b) => b - a);
}

export function unique(arr) {
    let result = [];
  
    for (let str of arr) { //проверяем массив с результатом. Если элемент из arr есть в результате - игнорируем его
      if (!result.includes(str)) { // иначе - включаем в массив
        result.push(str);
      }
    }
  
    return result;
  }