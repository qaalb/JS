function verifierUtilisateur(utilisateur) {
    return new Promise((resolve, reject) => {
        const age = utilisateur.age;
        
        if (age >= 18) {
            resolve("Utilisateur majeur"); } 
        else {
            reject("Utilisateur mineur"); }
    });
}

const utilisateur = {nom: "mehdi", age: 18};

verifierUtilisateur(utilisateur)
.then(text => {console.log(text);})
.catch(texte => {console.log(texte);})

console.log("hello monde monde monde monde monde monde monde ")
