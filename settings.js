const fs = require('fs');
fs.readFile('settings.json', 'utf8', (err, jsonString) => {
if (err) {
console.log('Error reading file from disk:', err);
return;
}
try {
const obj = JSON.parse(jsonString);
const chaine = obj['chaine 7']['chaine'];
const multicast = obj['chaine 7']['multicast'];
const port = obj['chaine 7']['port'];
console.log(`La chaîne 7 est la chaine ${chaine}, elle a
l’adresse multicast ${multicast}, son port est ${port}`);
} catch(err) {
console.log('Error parsing JSON string:', err);
}
});

const tableau = {
    'chaine': 'TF1',
    'multicast': '239.1.1.1',
    'port': 1234
    };
    const objet_json = JSON.stringify(tableau);
    console.log(JSON.parse(objet_json));