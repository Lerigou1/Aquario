function calculadora() {
    var altura = parseFloat(document.getElementById("altura").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var volume = altura*largura*comprimento;
    let litros = volume/1000;
    document.getElementById("volume").innerHTML = 'Volume: '+ litros + ' L';
    let div = Math.ceil(litros/50);
    let aquecedor = div*50
    var bomba = (litros)*6;
    var inputs = document.querySelectorAll("input");
    
    document.getElementById("aquecedor").innerHTML = 'Aquecedor: '+ aquecedor + ' W';
    document.getElementById("bomba").innerHTML = 'Bomba: '+ bomba.toFixed(0) + ' L/h';

    inputs.forEach(itens => {
        if (itens.value <= 0) {
            document.getElementById("volume").innerHTML = 'Valor digitado Inválido';
        }
    });
    if (parseFloat(document.getElementById("altura").value) <= 0) {
        alert("Campo 'Altura' vazio ou Valor Inválido");
    }
    else if (parseFloat(document.getElementById("largura").value) <= 0) {
        alert("Campo 'Largura' vazio ou Valor Inválido");
    }
    else if (parseFloat(document.getElementById("comprimento").value) <= 0) {
        alert("Campo 'Comprimento' vazio ou Valor Inválido");
    }
}