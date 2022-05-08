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
    } 
}



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