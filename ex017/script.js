function tabuada(){
    let num = document.querySelector('#txtn');
    let tab = document.querySelector('#seltab');

    if(num.value.length !== 0){
        let n = Number(num.value);
        let c = 1;

        tab.innerHTML = ''; // limpar select ao clicar novamente em gerar tabuada
        tab.setAttribute('size', '10'); // cria 10 options ao clicar em gerar tabuada

        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item);
            c++;
        }
    } else {
        alert('Número inválido !')
        
    }
}