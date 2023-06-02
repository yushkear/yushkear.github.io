import {fib} from './lab2.js';

//функция возврата дробной части числа
export  function getDecimal(num){
    switch (num){
        case(num>=0):
        return num - math.floor(num); //Если число меньше нуля - вычитай потолок,
        break;                        //Если больше - вычитай пол.
        case(num<0):
        return num - math.ceil(num);
        break;
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
    return ( lowerStr.includes("xxx") ||str.includes("viagra") );
}

//функция усечения строки
export  function truncate(str, maxlength){
    return (str.length > maxlength) ? //Если строка превосходит maxlength -
    str.slice(0, maxlength - 1) + '…' : str; // убираем на один символ больше при обрезании строки
}

//функция преобразования строки
export  function camelize(str){
    return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'

}

// функция массива чисел фибоначи
export function fibs(n){
    let arr = [];
    for(i in n){
        arr.push(fib(i+1)); // для каждой итерации добавляет в массив i-е число фибоначи вплоть до n
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