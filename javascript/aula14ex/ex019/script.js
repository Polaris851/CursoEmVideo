function contar() {
    var ini = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var pas = document.getElementById('passo');
    var res = document.getElementById('res');
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!';
        alert('[ERRO] faltam dados!');
    } else{
        res.innerHTML = 'Contando: <br>';
        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(pas.value);
        if(p <= 0) {
            alert('Passo invalido! Considerando o PASSO 1');
            p = 1;
        } 
        if(i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449`;
            }
        } else {
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} &#x1F449`;
            }
        }
        res.innerHTML += '&#x1F3C1';
    }
}