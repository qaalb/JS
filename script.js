// var a = "wael";
// var _a = "wael";
// var .a = "wael";
// var -a = "wael";
// var $a = "wael";
// var 1a = "wael";

// console.log(a, _a, .a, -a, $a, &a);

// let age = 17

// if (age >=18) {
//     console.log("autorisé a voter") }
//     else {
//     console.log("pas autorisé a voter")
    
// }

// let age = 19

// if (age > 18) {
//     console.log("autorisé a voter") }
//      else if (age === 18) {
//         console.log("premiere annee de vote !")}
//     else {
//      console.log("pas autorisé a voter")
    
// }

// var day = 1

// switch(day) {
//     case 1:
//         console.log("Lundi")
//         break;
//     case 2:
//         console.log("mardi")
//         break;
//     case 3:
//         console.log("mercredi")
//         break;
//     case 4:
//         console.log("jeudi")
//         break;
//     case 5:
//         console.log("vendredi")
//         break;
//     case 6:
//         console.log("samedi")
//         break;
//     case 7:
//         console.log("dimanche")
//         break;    
// }

// let x = 10
// let y = "10"

// console.log(x == y)
// console.log(x != y)
// console.log(x === y)
// console.log(x !== y)
// console.log(x < y)
// console.log(x > y)
// console.log(x <= y)
// console.log(x >= y)

// nb1 = 15
// if (nb1%3 ===0 && nb1%5 ===0){
//     console.log("Multiple de 3 et 5")
// } else {
//     console.log("ce n'est pas un multiple de 3 et 5")
// }


// let age = 21
// let sexe = "féminin"

// if (sexe === "féminin" && age >= 21 && age <= 40) {
//     console.log("Bienvenue madame")
// } else {
//     console.log("pas bienvenue vous ne remplissez pas les critères")
// }

// let prix_table = 150
// let prix_armoire = 350
// let nombre = 10

// let total_armoir = prix_armoire * nombre
// console.log("le prix total pour 10 armoire est " +total_armoir+ " euros")

// if (prix_armoire > prix_table) {
//     console.log("le prix de l'armoire est plus élévé",prix_armoire)
// } else if (prix_table > prix_armoire) {
//     console.log("prix de la table plus elevé",prix_table)
// } else {
//     console.log("le prix de la table et l'amoire est pareil")
// }

// alert("HELLO WORLD")

// let nomutilisateur = prompt("quel est votre nom?")
// let confirmatin = confirm("c'est bien votre nom ?" + " " + nomutilisateur)

// if (confirmatin) {
//     alert("bienvenue" + " " + nomutilisateur)
// } else {
//     alert("nom incorrect")
// }

// function calculerIMC(poids, taille) {
//     taille = taille / 100
//     return poids / (taille * taille)
// }

// let poids = parseFloat(prompt("quel est votre poids en kg","92"))
// let taille = parseFloat(prompt("quel est votre taille en m","190"))
// let imc = calculerIMC(poids, taille)

// alert("votre imc est de :" + " " + imc.toFixed(2))

for (let i = 1; i <= 10; i++){
    console.log(i)
}

let i = 10
while (i >= 0) {
    console.log(i)
    i--
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

function somme(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

console.log(somme(10))

function multiplication(n) {
    for (let i = 1; i <= 10; i++) {
        console.log (n + " x " + i + " = " + (n*i))
    }
}

multiplication(123456789);

let tableau = ["mehdi", "med", "meh"]
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i])
}

let tableauu = ["mehdii", "medd", "mehh"]
for (let prenom of tableauu) {
    console.log(prenom)
}