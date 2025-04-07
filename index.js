let num1=parseInt(prompt("inserisci il primo numero "))
let num2=parseFloat(prompt("inserisci il secondo numero"))
let risultato = operazione(num1,num2)
console.log(risultato)

function operazione(val1,val2) {
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
