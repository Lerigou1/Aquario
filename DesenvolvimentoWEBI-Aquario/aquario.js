function calculadora() {
    var altura = parseFloat(document.getElementById("altura").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var volume = altura*largura*comprimento
    var aquecedor = (volume)/1000;
    var bomba = (aquecedor)*6;
    var inputs = document.querySelectorAll("input");

    inputs.forEach(volume => {
        if (volume.value <= 0) {
            document.getElementById("volume").innerHTML = 'Valor digitado Inválido';
        }
    });
    if (volume >= 1000) {
        var litros = volume/1000;
        document.getElementById("volume").innerHTML = litros.toFixed(2) + ' L';
    }
    else if (volume < 1000 && volume > 0) {
        document.getElementById("volume").innerHTML = volume.toFixed(2) + ' cm³';
    }
    else if (volume <= 0) {
        document.getElementById("volume").innerHTML = 'Valor digitado Inválido';
    }
    let v = 0;
    let a = 50;
    while (true) {
        v += 1;
        if (a+v > aquecedor) {
            document.getElementById("aquecedor").innerHTML = 'Aquecedor: '+a*v+'W';
            break;
        }   
    }
    let c = 0;
    let b = 50;
    while (true) {
        c += 1;
        if (b+c > bomba) {
            document.getElementById("bomba").innerHTML = 'Bomba: '+b*c+'L/h';
            break;
        }
    }
    if (parseFloat(altura.value) = 0) {
        alert("Campo 'Altura' vazio");
    }
    if (parseFloat(comprimento.value) = 0) {
        alert("Campo 'Comprimento' vazio");
    }
    if (parseFloat(largura.value) = 0) {
        alert("Campo 'Largura' vazio");
    }
}