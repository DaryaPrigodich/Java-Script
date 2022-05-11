// Циклы

let rom = 6;
while (rom) {
    console.log ('hi-', rom);
    rom--;    
}

let num = 9;    
for (; num < 15; num++) {
    console.log (num);
    if (num == 13) break
}

let lon = 0;
for (; lon < 5; lon++)  {
    if (lon == 2) continue;
    console.log(lon);
}


let dad = 0
while (dad < 5) {
    console.log(dad + 'dasha')
    dad++
}



for (let temperature = 0; temperature < 10; temperature++) {
    if (temperature < 3) {
        console.log('temperature = ', temperature  ,'cold')
  } else if (temperature >= 3 && temperature < 7) {
        console.log('temperature = ', temperature  ,'good')
 }  else {
        console.log('temperature = ', temperature  ,'hot')
 }}



let names = ['Kate' ,
            'Alex' ,
            'Ivan' ,
            'Ignat' ,
            'Andrey' ,
            'Vika']
for (item_1 of names){
    if (item_1 == 'Ignat') {
        break;
    }
    console.log(item_1)
}
