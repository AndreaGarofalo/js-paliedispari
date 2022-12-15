console.log("JS OK");

// Palidroma
// Chiedere all’utente di inserire una parola tramiite un form
// Creare una funzione per capire se la parola inserita è palindroma

// 1 prendo gli elementi dal DOM
// 2 creo una funzione che prende il click del button
// 3 raccolgo le risposte dell'utente in variabili
// 4 creo una funzione in cui inverto la posizione delle lettere della parola
// 5 confronto la parola prima e dopo l'inversione delle lettere

// 1 prendo gli elementi dal DOM
const targetElement = document.getElementById("target");
const form = document.getElementById("form");
const wordField = document.getElementById("word");
const button = document.getElementById("button");

// 2 creo una funzione che prende il click del button

form.addEventListener("submit", function (e) {
  // blocco il comportamento naturale del form
  e.preventDefault();

  // 3 raccolgo le risposte dell'utente in variabili
  const word = wordField.value.trim();
  console.log(word);

  // 4 creo una funzione in cui inverto la posizione delle lettere della parola
  function reverseWord(word) {
    let result = "";

    for (let i = word.length - 1; i >= 0; i--) {
      result += word[i];
    }
    return result;
  }
  const reversedWord = reverseWord(word);
  console.log(reversedWord);

  // 5 confronto la parola prima e dopo l'inversione delle lettere
  let isPalindrome = `La parola ${word} non è palindroma`;
  if (reversedWord === word) {
    isPalindrome = `La parola ${word} è palindroma`;
  }
  console.log(isPalindrome);
  targetElement.innerText = isPalindrome;
});
