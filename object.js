// let personne = {
//     nom: "Toyota",
//     prenom: "Corolla",
//     age: 2020, }
// personne.age=2021

//   console.log(personne["age"]);

//   let personne = {
//     nom: "Toyota",
//     prix: "Corolla",
//     fabricant: {
//         nomm : "wael",
//         addresse: "7836gfdgfdgd"
//     } }
// personne.age=2021

//   console.log(personne.fabricant["nomm"]);
    
//   let etudiants = [
//     {nom: "Toyota", prenom: "Corolla", note:  "1/20"},
//     {nom: "aaaaaaaa", prenom: "bbbbbbbb", note:  "5/20"},
//     {nom: "euuuuuuuuuuuuu", prenom: "duuuuuuuuuu", note:  "5/20"},
//   ];

//   console.log(etudiants[1]["nom"]);

  let personne = {
    nom: "Toyota",
    prix: "7788415",
    fabricant: {
        nomm : "wael",
        addresse: "7836gfdgfdgd"
    } }
personne.age=2021
delete personne.prix;

  console.log(personne["prix"]);