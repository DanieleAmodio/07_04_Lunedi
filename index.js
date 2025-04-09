let parola=prompt("inserisci la parola ")
let mod=cutString(parola)
console.log(mod)

function cutString(stringa){
  stringa=stringa.slice(1,stringa.length -1) 
   return stringa
}
     




/*function controllaemail(stringa) {
  let valore = /.*@.*\..*/
  /*return valore.test(stringa)
}
let risultato=controllaemail("stringa@outlook.com")
console.log(risultato)*/ //regex