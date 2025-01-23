class Afficheur {
    constructor(id, nom, localite, message) {
        this.id = id;
        this.nom = nom;
        this.localite = localite;
        this.message = message;
    }

    afficherInfos() {
        return `${this.nom} (${this.id}) - Localité: ${this.localite}, Message: "${this.message}"`;
    }
}

class Dashboard {
    constructor() {
        this.afficheurs = new Map();
    }

    ajouterAfficheur(id, nom, localite, message) {
        if (this.afficheurs.has(id)) {
            console.log(`L'id ${id} existe déjà.`);
        } else {
            const nouvelAfficheur = new Afficheur(id, nom, localite, message);
            this.afficheurs.set(id, nouvelAfficheur);
            this.afficherTousLesAfficheurs();
        }
    }

    supprimerAfficheur(id) {
        if (this.afficheurs.delete(id)) {
            console.log(`Afficheur avec id ${id} supprimé.`);
            this.afficherTousLesAfficheurs();
        } else {
            console.log(`Aucun afficheur trouvé avec l'id ${id}.`);
        }
    }

    mettreAJourMessage(id, nouveauMessage) {
        if (this.afficheurs.has(id)) {
            const afficheur = this.afficheurs.get(id);
            afficheur.message = nouveauMessage;
            this.afficherTousLesAfficheurs();
        } else {
            console.log(`Aucun afficheur trouvé avec l'id ${id}.`);
        }
    }

    afficherTousLesAfficheurs() {
        const dashboardDiv = document.getElementById('dashboard');
        dashboardDiv.innerHTML = '';

        this.afficheurs.forEach((afficheur) => {
            const afficheurDiv = document.createElement('div');
            afficheurDiv.innerHTML = `
                <p>${afficheur.afficherInfos()}</p>
                <input type="text" id="update-message-${afficheur.id}" placeholder="Nouveau message">
                <button onclick="updateMessage(${afficheur.id})">Mettre à jour</button>
                <button onclick="deleteAfficheur(${afficheur.id})">Supprimer</button>
            `;
            dashboardDiv.appendChild(afficheurDiv);
        });
    }
}

const dashboard = new Dashboard();

document.getElementById('form-afficheur').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = parseInt(document.getElementById('id').value);
    const nom = document.getElementById('nom').value;
    const localite = document.getElementById('localite').value;
    const message = document.getElementById('message').value;

    dashboard.ajouterAfficheur(id, nom, localite, message);

    document.getElementById('form-afficheur').reset();
});

function deleteAfficheur(id) {
    dashboard.supprimerAfficheur(id);
}

function updateMessage(id) {
    const nouveauMessage = document.getElementById(`update-message-${id}`).value;
    dashboard.mettreAJourMessage(id, nouveauMessage);
}
