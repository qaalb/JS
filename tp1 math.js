let a = 3
let b = -6
let c = -2

let delta = b**2 - 4*a*c

if (delta < 0) {
    console.log("pas de solution réelle") 
}
else if (delta === 0 ) {
    let x0 = -b / (2*a)
    console.log("unique solution : x0= +x0")
}
else {
    let x1 = (-b - math.sqrt(a) / (2 * a))
    let x2 = (-b + math.sqrt(a) / (2 * a))
    console.log("deux solution distinctes : x1= +x1 et x2= +x2") }