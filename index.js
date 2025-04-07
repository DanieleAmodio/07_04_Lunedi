let stringa=prompt("inserisci stringa ")
let frase = upperfirst(stringa)
console.log(frase)

function upperfirst(valore) {
     let mod=""
     let mod1pt=""
     let resto=""
     mod=valore.split(" ")
     console.log(mod)
     mod1pt=mod[0].split("")
     console.log(mod1pt)
     mod1pt=mod1pt[0].toUpperCase()
     console.log(mod1pt)
     resto=mod1pt.substring(1)
     console.log(resto)
     mod1pt+=resto
      return mod1pt
}

/*function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};*/