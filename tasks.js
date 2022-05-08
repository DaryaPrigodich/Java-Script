// Пример стрелочных функций:
 let f11 = (f1, f2) => {console.log('Summ=', f1 + f2)}

// или:

 let f3 = 10
 let f4 = 20

 let f22 = (f3 < f4) ?
        (ff1,ff2) => console.log('mess - ', ff1 + ff2) :
        (ff1,ff2) => console.log('mess - ', ff1 - ff2)
    f22(10,15)
    
//1.Скрипт - возводим 3 в 5 степень
let i = 1;
let result = 1;
while (i < 6) {
     result = result *3
     i++
}
console.log(result)

// 2.Преобразовать задачу 1 в функцию принимающую на вход степень в которую будет возводиться число 3

function stepen(num)  { 
    return 3**num
    }
console.log(stepen(5))

// 3. Скрипт -  выводит 4 строки в консоль, чтоб в первой строке было !, во второй !! и т.д.

let word = '!'
let result2 = ''
for (let i = 1; i<=4; i++){
    result2+=word
    console.log(result2)
}


function rame(item_1, item_2){
    let mess = ('hi!!!')
console.log(mess, item_1 + item_2)
}
rame(11, 22)

