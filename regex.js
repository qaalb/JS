const Regex = /^[a-z]+@[a-z]{2,}\.[a-z]{2,4}$/;

function testerEmail(email) {
    if (Regex.test(email)) {
        return "True";
    } else {
        return "False";
    }
}


const tester = [
    "francois@free.fr",
    "mehdi@icloud.fr"
];

tester.forEach(email => {
console.log(`${email}: ${testerEmail(email)}`);
});
