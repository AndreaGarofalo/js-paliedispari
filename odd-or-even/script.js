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
// 7 confronto se il risultato di pari o dispari corrisponda alla scelta dell'utente
// 8 dichiaro chi ha vinto

// 1 prendo gli elementi dal dom
const form = document.getElementById("form");
const select = document.getElementById("select");
const option = document.querySelectorAll("option");
const number = document.getElementById("number");
const targetElement = document.getElementById("target");
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
  function isOdd(number) {
    if (number % 2 === 0) {
      return (isOdd = "even");
    } else if (number % 2) {
      return (isOdd = "odd");
    }
  }
  const oddOrPair = isOdd(result);
  console.log(oddOrPair);
  // 7 confronto se il risultato di pari o dispari corrisponda alla scelta dell'utente
  let message;

  if (oddOrPair === userChoice) {
    message = "Hai vinto!";
  } else {
    message = "Ha vinto il PC!";
  }

  // 8 dichiaro chi ha vinto
  targetElement.innerText = `Il pc ha fatto ${pcNumber}. La somma è ${result}. ${message}`;
});
