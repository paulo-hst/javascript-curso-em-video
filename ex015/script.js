function verificar(){
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.querySelector('#txtano');
    const res = document.querySelector('#res');

    const anoEntrada = Number(fano.value);
    console.log(anoEntrada)

    if(anoEntrada == 0 || anoEntrada > ano || anoEntrada < 1900){
        alert('ERRO!!! Verifique os dados e tente novamente');
        
    } else{
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        
        const img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'src/bebe-m.png');
            } else if(idade < 21){
                img.setAttribute('src', 'src/jovem-m.png');
            } else if(idade < 50){
                img.setAttribute('src', 'src/adulto-m.png');
            } else{
                img.setAttribute('src', 'src/idoso-m.png');
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'src/bebe-f.png');
            } else if(idade < 21){
                img.setAttribute('src', 'src/jovem-f.png');
            } else if(idade < 50){
                img.setAttribute('src', 'src/adulto-f.png');
            } else{
                img.setAttribute('src', 'src/idoso-f.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }

    

}