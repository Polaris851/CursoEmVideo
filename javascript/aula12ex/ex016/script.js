function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var Fano = document.getElementById('idade');
    var res = document.querySelector('div#res');
    if(Fano.value.length == 0 || Fano > ano ) {
        alert('Verifique os dados e verifique novamente!')
    } else {
        var sex = document.getElementsByName('radsex');
        var idade = ano - Number(Fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(sex[0].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'menina.png');
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'adfem.png');
            } else if(idade < 55) {
                //adulto
                img.setAttribute('src', 'mulher.png');
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png');
            }
        } else if(sex[1].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'menino.png');
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'admas.png');
            } else if(idade < 55) {
                //adulto
                img.setAttribute('src', 'homem.png');
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`;
        res.appendChild(img);
    }
    
}