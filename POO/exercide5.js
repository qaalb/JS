class Employe {
    constructor(nom, poste, salaire) {
        this.nom = nom;
        this.poste = poste;
        this.salaire = salaire;
    }

    afficherDetails() {
        console.log(`Nom : ${this.nom}, Poste : ${this.poste}, Salaire : ${this.salaire}`);
    }
}

class Manager extends Employe {
    constructor(nom, poste, salaire, equipe) {
        super(nom, poste, salaire);
        this.equipe = equipe;
    }

    afficherDetails() {
        console.log(`Nom : ${this.nom}, Poste : ${this.poste}, Salaire : ${this.salaire}, Équipe : ${this.equipe(", ")}`);
    }
}

const manager = new Manager("Alice", "Directrice", 8000, ["Bob", "Charlie"]);
manager.afficherDetails();
