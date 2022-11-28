const zeroFormat = n => {
    return ('0' + n).slice(-2) 
}

setInterval(function () {
    const data = new Date();
  
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



const infos =document.querySelector('.infos');
const btime = document.querySelector('.b-time');

btime.addEventListener('click',showTime);
function showTime(){
    if (btime.checked){
        document.querySelector('.container-time').classList.remove('d-none');     
        seta(0);   
    }else{
        document.querySelector('.container-time').classList.add('d-none');   
        seta(0);
    }
}



let contad;
let segundos= 0
let minutos =0
infos.addEventListener('click',gg);

document.querySelector('.desconect').addEventListener('click',() =>{
    infos.checked = false;
    gg();
});

function gg(){
    if (infos.checked){
        document.querySelector('.chamadas').classList.remove('d-none');
        contador();
        seta(1);   
    }else{
        document.querySelector('.chamadas').classList.add('d-none');
        clearInterval(contad);
        segundos = 0
        minutos = 0
        document.querySelector('.horas').innerHTML =  zeroFormat(minutos)+ ":"+zeroFormat(segundos);
        seta(1);
    }
}

function seta(i){
    const seta = document.getElementsByClassName('seta')[i];
    if (seta.classList.contains('bi-caret-down-fill')){
        seta.classList.remove('bi-caret-down-fill');
        seta.classList.add('bi-caret-up-fill');
    }else{
        seta.classList.remove('bi-caret-up-fill');
        seta.classList.add('bi-caret-down-fill');
     
    }
}

function contador(){
    contad = setInterval(function () {
        segundos++
        if (segundos == 60){
            segundos = 0
            minutos++
        }
        document.querySelector('.horas').innerHTML =  zeroFormat(minutos)+ ":"+zeroFormat(segundos);
    }, 1000);
}

// -----------------------------------------------------------

const frases = ['Descubra quem você é','Não perca a esperança!','Seja sua a motivação... ','Tenha segurança de si...','Faça sempre o melhor!!','Tenha coragem, não pare', 'Não espere, execute...','Aprenda a lidar com tudo.','Há tempo para mudar!!!','A força está com você....','Respire, você é forte !!!']

function createBall(quantidade){

    for (let i=0;i<quantidade;i++){
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('desc-time');
    
        let ball = document.createElement('div');
        ball.classList.add('ball-green');
    
        let divText = document.createElement('div');
    
        let p1 = document.createElement('p');
        p1.innerText = frases[Math.floor(Math.random() * 10)];    

        const data = new Date();  
        const horas = zeroFormat(data.getHours());
        const minutos = zeroFormat(data.getMinutes());
        const horaFormatada = horas + ":" + minutos ;
        const dia = zeroFormat(data.getDate());    
        const ano = data.getFullYear();
        
        const dataFormatada = dia + "/" + (data.getMonth()+1) + "/"  + ano;
        let p2 = document.createElement('p');
        p2.innerText = dataFormatada+ ' - '+horaFormatada;
    
        divText.classList.add('text-time');
        divText.appendChild(p1);
        divText.appendChild(p2);
    
    
        mainDiv.appendChild(ball);
        mainDiv.appendChild(divText);
        const container = document.querySelector('.container-time')
        container.appendChild(mainDiv);

        if (i != quantidade-1){
            let line = document.createElement('div');
            line.classList.add('black-line');    
            container.appendChild(line);
        }
      
    }
 

}
createBall(5);

/*Dropdown*/
const button = document.querySelector('#button');
const select = document.querySelector("#dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.querySelector('#select-label');

button.addEventListener("click", function (e) {
	e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
	select.classList.toggle("hidden");
}

options.forEach(function(option) {
	option.addEventListener("click", function (e) {
		setSelectTitle(e);
	});
});

function setSelectTitle(e) {
	const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
	selectLabel.innerText = labelElement;
	toggleHidden();
};