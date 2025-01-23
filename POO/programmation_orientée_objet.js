class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    saluer() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

const personne1 = new Personne("Alice, 30");
personne1.saluer();


class comptebancaire {
    #solde;

    constructor(montantInitial = 0) {
        this.#solde = montantInitial;
    }

    get solde() {
        return this.#solde
    }

    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
        } else {
            console.log("Le montant de dépôt doit être positif.");
        }
    }

    retirer(montant) {
        if (montant > 0) {
            if (this.#solde >= montant) {
                this.#solde -= montant;
            } else {
                console.log("Solde insuffisant pour effectuer ce retrait.");
            }
        } else {
            console.log("Le montant de retrait doit être positif.");
        }
    }
}

const compte = new comptebancaire();
compte.deposer(500);
console.log(compte.solde);
compte.retirer(200);
console.log(compte.solde);
compte.retirer(400);
console.log(compte.solde);



class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        console.log("Cet animal fait un bruit.");
    }
}

class Chien extends Animal {
    parler() {
        console.log(`Le chien ${this.nom} aboie.`);
    }
}

class Chat extends Animal {
    parler() {
        console.log(`Le chat ${this.nom} miaule.`);
    }
}

const rex = new Chien("rex");
rex.parler();

const minou = new Chat("minou");
minou.parler();

const animaux = [new Chien("Rex"), new Chat("Minou"), new Animal("Un animal")]
animaux.forEach(Animal => Animal.parler());

class employe {
    constructor(nom, poste, salaire) {
        this.nom = nom;
        this.poste = poste;
        this.salaire = salaire;
    }

    afficherDetails() {
        console.log(`Nom : ${this.nom}, Poste : ${this.poste}, Salaire : ${this.salaire}`);
    }
}

class Manager extends employe {
    constructor(nom, poste, salaire, equipe) {
        this.nom = nom;
        this.poste = poste;
        this.salaire = salaire;
        this.equipe = equipe;
    }

    afficherDetails() {
        console.log(`Nom : ${this.nom}, Poste : ${this.poste}, Salaire : ${this.salaire}, Équipe : ${this.equipe(", ")}`);
    }
}

const manager = new Manager("Alice", "Directrice", 8000, ["Bob", "Charlie"]);
manager.afficherDetails();
