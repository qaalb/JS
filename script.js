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

// alert("votre imc est de :" + " " + imc)



                                                                // LES BOUCLES ///



// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }







// let i = 10
// while (i >= 0) {
//     console.log(i)
//     i--
// }






// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }







// function somme(n) {
//     let total = 0
//     for (let i = 1; i <= n; i++) {
//         total += i
//     }
//     return total
// }

// console.log(somme(10))







// function multiplication(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log (n + " x " + i + " = " + (n*i))
//     }
// }

// multiplication(123456789);







// let tableau = ["mehdi", "med", "meh"]
// for (let i = 0; i < tableau.length; i++) {
//     console.log(tableau[i])
// }







// let tableauu = ["mehdii", "medd", "mehh"]
// for (let prenom of tableauu) {
//     console.log(prenom)
// }







// let tableauuu = ["mehdii", "medd", "mehh"]
// for (let prenom in tableauuu) {
//     console.log(prenom + ": " + tableauuu[prenom])
// }




                                                                    // LES FONCTIONS //




// function direBonjour(mehdi) {
//     return `Bonjour, ${mehdi} !`
// }







// function calculatrice(a, b, operateur) {
//     if (operateur === "+") {
//         return a + b;
//     } else if (operateur === "-") {
//         return a - b;
//     } else if (operateur === "*") {
//         return a * b;
//     } else if (operateur === "/") {
//         if (b === 0) {
//             return "Erreur: Division par zéro"
//         } else {
//             return a / b

//         }
//     } else {
//         return "Opérateur non valide"
//     }
// }

// console.log(calculatrice(12, 2, "-"))
// console.log(calculatrice(8, 8, "+"))
// console.log(calculatrice(10, 4, "*"))
// console.log(calculatrice(14, 2, "/"))




// function puissance(nombre, exposant) {
//     return nombre ** exposant
// }

// console.log(puissance(2, 3))





// function estPair(nombre) {
//     return nombre % 2 === 0;
//   }

//   console.log(estPair(9))
//   console.log(estPair(8))




// function calculerTVA(prixHT, tauxTVA) {
//     return prixHT * (1 + tauxTVA / 100)
//   }
  
// console.log(calculerTVA(100, 20))
// console.log(calculerTVA(50, 5))





// function convertirTemperature(celsius) {
//     return celsius * 9/5 + 32;
// }

// console.log(convertirTemperature(25))





// const PI = 3.14;

// function perimetreCercle(rayon) {
//     return 2 * PI * rayon;
// }

// function aireCercle(rayon) {
//     return PI * rayon * rayon;
// }

// const rayon = 5;

// console.log("Périmètre du cercle avec rayon " + rayon + " : " + perimetreCercle(rayon));
// console.log("Aire du cercle avec rayon " + rayon + " : " + aireCercle(rayon));







                                                                        // LES TABLEAUX


// let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(nombres)




// const nombres = [10, 20, 30, 40, 50];
// console.log(nombres[0], nombres[nombres.length - 1]);




// const nombres = [10, 20, 30, 40, 50];
// nombres[nombres.length - 1] = 0;
// console.log(nombres);




// const nombres = [10, 20, 30, 40, 50];
// nombres.push(11, 12);
// nombres.shift();
// console.log(nombres);




// const recherche = () => {

// let arr = [1, 2, 3, 4, 5];
// let isIncluded = arr.includes(2); // Vérifie si le tableau contient 2
// console.log(isIncluded); // Affiche true
// }

// recherche()



// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); // Affiche [1, 2, 3, 4, 5, 6]




// var marque = [apple, samsung, dell, hp, lg, acer]

// function marques() {
//     console.log("Liste des marques : " + marque.join(', '));
// }

// marques();

// var choix = prompt("Quelle marque préférez-vous ?");

// var index = marques.indexOf(choix.toLowerCase());

// if (index !== -1) {
//     marques.splice(index, 1);
//     console.log("ok");
// } else {
//     console.log("indisponible");
// }

// marques();





                                                                // SYNTHESE 1






// let etudiants = parseInt(prompt("combien d'étudiants sont dans la classe ?"))
// let eval = parseInt(prompt("combien d'évaluations seront saisies pour chaque étudiant ?"))

// for (let i = 0; i < etudiants; i++) {
//     let notes = []
//     let sommenote = 0
    
//     for (let j = 0; j < eval; j++) {
//         let note = parseFloat(prompt(`entrez la note ${j + 1} de l'étudiant ${i + 1}:`))
//         notes.push(note)
//         sommenote += note
//     }
    
//     let moyenne = sommenote / eval
//     let sommemoy = 0
//     sommemoy += moyenne
    
//     let appreciation
//     if (moyenne > 18) {
//         appreciation = "Excellent"
//     } else if (moyenne >= 15) {
//         appreciation = "Très bien"
//     } else if (moyenne >= 12) {
//         appreciation = "Bien"
//     } else {
//         appreciation = "Peut mieux faire"
//     }
    
//     alert(`étudiant ${i + 1} :\nMoyenne = ${moyenne}\nAppréciation = ${appreciation}`)
// }

// let moyenneg = sommemoy / etudiants
// alert(`Moyenne générale de la classe = ${moyenneg}`)






                                                                //Synthese 2


                                                            

let listeCourses = [];

while (true) {
    let choix = prompt("1: Ajouter | 2: Retirer | 3: Afficher | 4: Vider | 5: Quitter");

    if (choix === '1') {
        let item = prompt("Ajouter :");
        listeCourses.push(item);
    } else if (choix === '2') {
        let item = prompt("Retirer :");
        let index = listeCourses.indexOf(item);
        if (index > -1) listeCourses.splice(index, 1);
        else alert("Élément non trouvé.");
    } else if (choix === '3') {
        alert("Liste de courses : " + (listeCourses.length ? listeCourses.join(", ") : "Vide"));
    } else if (choix === '4') {
        listeCourses = [];
        alert("Liste vidée.");
    } else if (choix === '5' || choix === 'q') {
        alert("Au revoir !");
        break;
    } else {
        alert("Choix invalide.");
    }
}


