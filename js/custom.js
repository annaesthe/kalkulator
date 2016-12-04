"use strict"

function inputClick(value) {
//  console.log('funkcja wywowłana');
    var pole = document.getElementById('view').value; //tu jest wartość naszego pola
   
    //sprawdzamy czy znaki są różne od =, AC i kropki to odwołujemy się do ostatniego elementu i dopisujemy wartość value
    if (value != 'AC' && value != '=' && value != '.') { 
         document.getElementById('view').value += value; 
        
    // zerujemy wartość
        
    } else if (value == 'AC') {
         document.getElementById('view').value = '';
        
    // jeśli ostatni znak jest różny od kropki to doda nam kropkę
    }  else if (value == '.') {
         if(pole.slice(-1) != '.') { //sprawdza czy ostatnia jest kropka i wycina ostatnie jeśli jest to kropka
             document.getElementById('view').value += value;
         }
        
    } else {
        
       if (isNaN(pole.slice(-1)) || pole.indexOf('/0')> -1) {
        document.getElementById('view').value = 'Error!'; 
     } else {
         document.getElementById('view').value = eval(pole);
     }
   }
 }

//
// else {
//        document.getElementById('view').value = eval(pole);
//        
//    }
