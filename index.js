/*let stringa=prompt("inserisci stringa ")
let frase = upperfirst(stringa)
console.log(frase)

function upperfirst(valore) {
    return valore.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };*/   


/*function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};*/

function controllaemail(stringa) {
  let valore = /.*@.*\..*/
  return valore.test(stringa)
}
let risultato=controllaemail("stringa@outlook.com")
console.log(risultato)