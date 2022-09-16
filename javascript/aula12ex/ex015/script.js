function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var dia = new Date();
    var hora = dia.getHours();
    msg.innerHTML = `Agora são ${hora} horas.<br>`; 
    if( hora >= 0 && hora < 12){
        //Bom dia!
        msg.innerHTML += `Bom dia!`;
        img.src = 'manha.png';
        document.body.style.background = '#ffae41';
    } else if(hora <= 18) {
        //Boa tarde!
        msg.innerHTML += `Boa tarde!`;
        img.src = 'tarde.png';
        document.body.style.background = '#cd7851';
    } else {
        //Boa noite!
        msg.innerHTML += `Boa noite!`;
        img.src = 'noite.png';
        document.body.style.background = '#875e85';
    }
}