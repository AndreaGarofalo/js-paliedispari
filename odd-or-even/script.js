console.log("JS OK");

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1 prendo gli elementi dal dom
// 2 creo una funzione che reagisce al click del bottone
// 3 registo le scelte dell'utente in variabili
// 4 creo una funzione che generi un numero casuale
// 5 sommo i due numeri
// 6 controllo che il risultato sia dispari o meno
// 7 dichiaro chi ha vinto

// 1 prendo gli elementi dal dom
const form = document.getElementById("form");
const select = document.getElementById("select");
const option = document.querySelectorAll("option");
const number = document.getElementById("number");
const tagetElement = document.getElementById("taget");
const button = document.getElementById("button");

// 2 creo una funzione che reagisce al click del bottone
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // 3 registo le scelte dell'utente in variabili
  const userChoice = select.options[select.selectedIndex].value;
  const userNumber = number.value;

  console.log(userChoice, userNumber);

  // 4 creo una funzione che generi un numero casuale
  function getRandomNumber(min, max) {
    max++;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  }
  const pcNumber = getRandomNumber(1, 5);
  console.log(pcNumber);

  // 5 sommo i due numeri
  const result = parseInt(userNumber) + pcNumber;
  console.log(result);

  // 6 controllo che il risultato sia dispari o meno
});
