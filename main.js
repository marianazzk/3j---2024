const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent = ""
const tempoObjetivo1= new Date(2024,8,11,22);
const tempoObjetivo2= new Date(2024,9,12,21);
const tempoObjetivo3= new Date(2024,10,13,20);
const tempoObjetivo4= new Date(2024,11,14,19);
const agora= new Date ();
let segundos;
let minutos;
let horas;
let dias;
tempo[0].textContent = tempoObjetivo1-agora;
segundos=(tempoObjetivo1-agora)/1000
minutos=segundos/60
horas=minutos/60
dias=horas/24
segundos= Math.floor(segundos);
minutos= Math.floor(minutos);
horas= Math.floor(horas);
dias= Math.floor(dias);
segundos = segundos%60
minutos = minutos%60
horas = horas%60
tempo[0].textContent= `faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
console.log(tempo);
for(let i = 0; 1 < botoes.length ; i++){ 
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
