


setInterval(function () {
    const data = new Date();
    const zeroFormat = n => {
        return ('0' + n).slice(-2) 
    }
    const horas = zeroFormat(data.getHours());
    const minutos = zeroFormat(data.getMinutes());
    const horaFormatada = horas + ":" + minutos ;
    const dia = zeroFormat(data.getDate());

    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    const ano = data.getFullYear();
    
    const dataFormatada = dia + " de " + mes + " de "  + ano;
    
    
    document.querySelector('#horario').innerHTML = horaFormatada;
    document.querySelector('.data').innerHTML = dataFormatada;
}, 1000);

function criarBolinhas(param,qtde){
    let divs = []
    for (let i=0;i<qtde;i++){
        let div = document.createElement('div')
        div.classList.add(param) 
        divs.push(div)

    }
    return divs
}

const colunas = document.getElementsByClassName('coluna1');
for (let d=0; d< colunas.length;d++){
    let div = criarBolinhas('bolinha-Vermelha',6)
    for (let g=0;g<div.length;g++){
        colunas[d].appendChild(div[g]);
    }
   
}
const colunas2 = document.getElementsByClassName('coluna2');
for (let d=0; d< colunas2.length;d++){
    let div = criarBolinhas('bolinha-Verde',6)
    for (let g=0;g<div.length;g++){
        colunas2[d].appendChild(div[g]);
    }
}

const infos =document.querySelector('.infos')


infos.addEventListener('click', () =>{
    if (infos.checked){
        document.querySelector('.chamadas').classList.remove('d-none');
    }else{
        document.querySelector('.chamadas').classList.add('d-none');
    }
})