// function changerTexte() {
//     document.getElementById('paragraphe').innerHTML = 'aaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';


// }


// changerTexte()
monParagraphe = document.getElementById('paragraphe')

// console.log(monParagraphe)
monParagraphe.innerHTML = 'aaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
// // monParagraphe.hidden =false
// monParagraphe.style.visibility = "hidden"
// // monParagraphe.style.visibility = "Visible"


maListe = document.getElementById('10metrique')

const mot = maListe.getElementsByTagName ('li')[1]

mot.style.visibility = "hidden"

mot.remove();


