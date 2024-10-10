// console.log("Hello, Node.js!");

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Bienvenue sur mon serveur!');
// });

// server.listen(3000, () => {
//   console.log('Serveur démarré sur http://localhost:3000');
// });


const fs = require('fs');

// Lire le fichier input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur de lecture du fichier:', err);
        return;
    }

    // Convertir le contenu en majuscules
    const upperCaseContent = data.toUpperCase();

    // Écrire le contenu en majuscules dans output.txt
    fs.writeFile('output.txt', upperCaseContent, (err) => {
        if (err) {
            console.error('Erreur d\'écriture du fichier:', err);
            return;
        }

        console.log('Le fichier output.txt a été créé avec succès.');
    });
});
