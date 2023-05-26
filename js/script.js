//Creare un box in cui l'utente possa scrivere una parola

// function checkpalindroma(parola){
//     let palindroma = parola.split('').reverse().join('');

//     if(palindroma.toLowerCase() === parola.toLowerCase()){
//         return true;
//     }

//     return false;
// }

// let word = prompt('Inserisci una parola');

// let check = checkpalindroma(word);

// let message = '';

// if(check){
//     console.log('la parola è palindroma');
//     alert('la parola è palindroma');
//     message = ('la parola è palindroma');
// }
// else{
//     console.log('la parola non è palindroma');
//     alert('la parola non è palindroma');
//     message = ('la parola non è palindroma');


// }


//////////////////////////////////

function randomnumber(){
    return Math.floor(Math.random() * 6);
}

function checkOddEven(num){
    if(num % 2 === 0){
        return 1
    }
    else{
        return 2
    }

}

let choice = prompt('Inserire "pari" o "dispari"');

let number = parseInt(prompt('inserire un numero compreso tra 1 e 5'));

while(choice !== 'pari' && choice !== 'dispari'){
    choice = prompt('inserire nuovamente parola chiave "pari" o "dispari"')
}

while(isNaN(number) || number <1 || number>5){
    number = prompt('Inserisci nuovamente il numero');
}


let pc_number = randomnumber();

let somma = pc_number + number;

let check_odd_even = checkOddEven(somma);

if(check_odd_even === choice){
    alert('Vincitore - utente');
}
else{
    alert('Vincitore - computer');

}