let ini = document.querySelector('#txti');
let fim = document.querySelector('#txtf');
let passo = document.querySelector('#txtp');
let res = document.querySelector('#res');

function contar(){

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'IMPOSSÍVEL CONTAR! ';
    } else {
        res.innerHTML = 'Contando: ';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        
        // Crescente
        if(i < f){
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`;         
            }
        // Decrescente 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;         
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        
        resetInput();
    }
}

// limpar inputs
function resetInput(){
    ini.value = '';
    fim.value = '';
    passo.value = '';
}