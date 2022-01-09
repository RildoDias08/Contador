var currentNumber = document.getElementById("currentNumber");
var contador = 0;

function incremento(){
    contador++;
    currentNumber.innerHTML = contador;
}

function decremento(){
    contador--;
    if(contador >= 0){
        currentNumber.innerHTML = contador;
    }else{
        alert('Não é feita a contagem de numeros negativos!');
    }
}