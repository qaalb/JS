document.getElementById("monBouton").addEventListener("click", function() {
    var nouveauP = document.createElement("p")
    nouveauP.textContent = "mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdie mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdimehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdie mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi mehdi"
    document.getElementById("div1").appendChild(nouveauP)
});

document.getElementById("monBouton").addEventListener("click", function() {
    var p1 = document.getElementById("p1")
        p1.remove()
});

document.getElementById("monBouton").addEventListener("click", function() {
    var p2 = document.getElementById("p2");
    if (p2) {
        var tete = document.createElement("h2");
        tete.textContent = "idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem idhem";
        p2.parentNode.replaceChild(tete, p2);
    }
});

document.getElementById("monBouton").addEventListener("click", function() {
    var p2 = document.getElementById("p2");
    if (p2) {
        document.getElementById("div2").appendChild(p2);
    }
});

document.getElementById("monBouton").addEventListener("click", function() {
    var p2 = document.getElementById("p2");
    if (p2) {
        var clone = p2.cloneNode(true);
        document.getElementById("div2").appendChild(clone);
    }
console.log(clone)
});
