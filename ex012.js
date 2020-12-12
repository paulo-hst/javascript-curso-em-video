console.log('\nExercício 012 - JavaScript - Curso em Vídeo\n')

const agora = new Date();
const hora = [agora.getHours(), agora.getMinutes()];

console.log(`Agora são exatamente ${hora[0]}h${hora[1]}.`);

if(hora[0] < 12){
    console.log('Bom dia!')    
}else if(hora[0] <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}   

console.log()