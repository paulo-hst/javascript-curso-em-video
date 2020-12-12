function carregar(){
    const msg = document.querySelector('div#msg');
    const img = document.querySelector('img#imagem');

    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    //hora = 15;
    msg.innerHTML = `Agora são ${hora}h${minutos}`;

    if(hora >= 0 && hora < 12){
        img.src = 'src/fotomanha.jpg';
        document.body.style.background = 'yellow';
    }else if(hora >= 12 && hora < 18){
        img.src = 'src/fototarde.jpg';
        document.body.style.background = '#570';
    }else{
        img.src = 'src/fotonoite.jpg';
        document.body.style.background = '#000000';
    }
}