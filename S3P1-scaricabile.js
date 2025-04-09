/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* let num1=parseInt(prompt("inserisci il primo numero "))
let num2=parseFloat(prompt("inserisci il secondo numero"))
let risultato = crazySum(num1,num2)
console.log(risultato)

function crazySum(val1,val2) {
    let calcolo=0
    switch (val1) {
        case val2:
            console.log("i valori inseriti sono uguali la loro somma sara moltiplicata per tre ")
          calcolo= (val1+val2)*3
        break; 
        default:
            console.log("i valori sono diversi")
           calcolo=val1+val2
        break;  
    }
      return calcolo
}
 */ 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* let num1=parseInt(prompt("inserisci il numero "))
let risultato = boundary(num1)
console.log(risultato)

function boundary(val1) {
    let esito = false
    if(val1>20 && val1<100) {
        esito=true
        console.log(`il valore inserito ${val1} è compreso tra 20 e 100 `)
    } else if(val1===400) {
        esito=true
        console.log(`il valore inserito ${val1} è uguale a 400 `)
    } else {
      console.log(`il valore inserito ${val1} non e compreso nelle condizioni richieste  `)
    } 
      return esito
}
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* let parola=prompt("inserisci la parola da invertire ")
let parolaInvertita = reverseString(parola)
console.log(parolaInvertita)

function reverseString(valore) {
     let inversione= valore.split("")
     console.log(inversione)
     inversione= inversione.reverse()
     console.log(inversione)
     inversione= inversione.join("")
      return inversione
}
 */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* let stringa=prompt("inserisci stringa ")
let frase = upperfirst(stringa)
console.log(frase)

function upperfirst(valore) {
    return valore.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };    */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* let n=prompt("inserisci quanti numeri generare  ")
let generatore = giveMeRandom(n)
console.log(generatore)

function giveMeRandom(n) {
  let contenitore=[]
  for (i=0;i<n;i++) {
    contenitore[i]=Math.floor((Math.random() * 10) + 1);
    console.log(contenitore[i])
  } return contenitore
  };    */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* let l1=prompt("inserisci la base del triangolo ")
let l2=prompt("inserisci il lato del triangolo ")
let calcoloAreaTriangolo = areaTriangolo(l1,l2)
console.log (`L'area del triangolo si calcola base * altezza ${l1}*${l2} = ${calcoloAreaTriangolo}`)

function areaTriangolo(val1,val2) {
  let area= val1*val2
  return area
  } */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* let numero=prompt("inserisci un numero  ")
let differenzaabs = crazyDiff(numero)
console.log (differenzaabs)

function crazyDiff(val) {
  const num = 19
  let diff = (val - 19)
  console.log(diff)
  diff=Math.abs(diff)
  if (diff>19) { 
    console.log(`la differenza tra ${val} e 19 e superiore al 19, quindi verrà moltiplicato per tre   `)
    diff*=3
  } 
  return diff
  } */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* let stringa=prompt("inserisci la stringa  ")
let mod= codify(stringa)
console.log (mod)

function codify(valore) {
   if (valore.startswith("code")) {
       return valore
    } 
   return `code` + valore
  } */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* let numero=prompt("inserisci un numero ")
numero=Math.abs(numero)
let controllo=check3and7(numero)
console.log(controllo)

function check3and7(num){
  if((num%3===0)||(num%7===0)) {
    return true
  } else {return false}
} */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* let parola=prompt("inserisci la parola ")
let mod=cutString(parola)
console.log(mod)

function cutString(stringa){
  stringa=stringa.slice(1,stringa.length -1) 
   return stringa
} */
