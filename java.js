function validarnumero(){
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (numero >= 0 && numero <= 9){
        resultado.textContent = "Valor Correto!";
        resultado.style.color = "green";
    }else{
        resultado.textContent = "Valor incorreto!";
        resultado.style.color = "red";
    }
}