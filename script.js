function factorial(n){
    if (isNaN(n))
        alert ("Que haces bobo?")
    else if (n < 0)
        alert ("negativos? solo los test de embarazo");
    else if (n===0 || n===1)
        return 1;
    else
        return n * factorial (n-1);
}
   
let n = prompt("ingrese un valor: ");
console.log(factorial(n));