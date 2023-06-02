//функция возврата дробной части числа
function getDecimal(num){
    switch (num){
        case(num>=0):
        return num - math.floor(num); //Если число меньше нуля - вычитай потолок,
        break;                        //Если больше - вычитай пол.
        case(num<0):
        return num - math.ceil(num);
        break;
    }
}