let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

function checkAge (age_1) {
if (age_1 < age_2) {
    console.log("You don't have access cause you age is " + age_1 + "It's less then")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome")
} else if (age_1 > age_3) {
    console.log("Keep calm and look cultura channel")
} else console.log ("Technical work")
}

checkAge (12)
checkAge (24)
checkAge (66)
checkAge ('dd')
