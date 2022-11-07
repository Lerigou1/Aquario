function calculadora() {
    var altura = parseFloat(document.getElementById("altura").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var volume = altura*largura*comprimento
    var aquecedor = (volume)/1000;
    var bomba = (aquecedor)*6;
    var inputs = document.querySelectorAll("input");

    inputs.forEach(item => {
        if (item.value <= 0) {
            document.getElementById("volume").innerHTML = 'Valor digitado Inválido';
        }
    });
    if (volume >= 1000) {
        var litros = volume/1000;
        document.getElementById("volume").innerHTML = litros.toFixed(2) + ' L';
    }
    if (bomba <= 50) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 50L/h';
    }
    else if (bomba > 50 && bomba <= 100) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 100L/h';
    }
    else if (bomba > 100 && bomba <= 150) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 150L/h';
    }
    else if (bomba > 150 && bomba <= 200) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 200L/h';
    }
    else if (bomba > 200 && bomba <= 500) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 500L/h';
    }
    else if (bomba > 500 && bomba <= 1000) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 1000L/h';
    }
    else if (bomba > 1000 && bomba <= 5000) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 5000L/h';
    }
    else if (bomba > 5000 && bomba <= 10000) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 10000L/h';
    }
    else if (bomba > 10000 && bomba <= 50000) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 50000L/h';
    }
    else if (bomba > 50000 && bomba <= 100000) {
        document.getElementById("bomba").innerHTML = 'A Bomba necessária para seu aquário é a de 100000L/h';
    }
    if (aquecedor <= 50) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 50W';
    }
    else if (aquecedor > 50 && aquecedor <= 100) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 100W';
    }
    else if (aquecedor > 100 && aquecedor <= 150) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 150W';
    }
    else if (aquecedor > 150 && aquecedor <= 200) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 200W';
    }
    else if (aquecedor > 200 && aquecedor <= 500) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 500W';
    }
    else if (aquecedor > 500 && aquecedor <= 1000) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 1000W';
    }
    else if (aquecedor > 1000 && aquecedor <= 5000) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 5000W';
    }
    else if (aquecedor > 5000 && aquecedor <= 10000) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 10000W';
    }
    else if (aquecedor > 10000 && aquecedor <= 50000) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 50000W';
    }
    else if (aquecedor > 50000 && aquecedor <= 100000) {
        document.getElementById("aquecedor").innerHTML = 'O Aquecedor necessário para seu aquário é a de 100000W';
    }
}