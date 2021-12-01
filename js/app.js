/* 
SE FOR EDITAR BOA SORTE PRA ENTENDER :)
ASS: JOÃO ENRIQUE
*/

function calcularIMC()
{
    var IMC = 0.0
    var input = document.querySelector("#peso");
    var peso = input.value;

    var input1 = document.querySelector("#altura");
    var altura = input1.value;

    IMC = peso/(altura*altura)

    IMC.toFixed(2);  

if (IMC<18.5) 
{
    document.getElementById("classificacao").innerHTML = 'Você está abaixo do peso';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "#f2dede"
    fundoErro.style.color = "#a94442"
    fundoErro.style.color = "#a94442"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
} 

else if (IMC>=18.5 && IMC<25) 
{
    document.getElementById("classificacao").innerHTML = 'Você está com o peso normal';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "green"
    fundoErro.style.color = "green"
    fundoErro.style.color = "#fff"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
    var subtitulo = document.querySelector(".subtitulo")
    subtitulo.style.color = "#fff"
} 

else if(IMC>=25 && IMC<30)
{
    document.getElementById("classificacao").innerHTML = 'Você está com sobrepeso';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "#f2dede"
    fundoErro.style.color = "#a94442"
    fundoErro.style.color = "#a94442"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
}

else if(IMC>=30 && IMC<35)
{
    document.getElementById("classificacao").innerHTML = 'Você tem obesidade Grau I';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "#f2dede"
    fundoErro.style.color = "#a94442"
    fundoErro.style.color = "#a94442"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
}

else if(IMC>=35 && IMC<39.9)
{
    document.getElementById("classificacao").innerHTML = 'Você tem obesidade Grau II';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "#f2dede"
    fundoErro.style.color = "#a94442"
    fundoErro.style.color = "#a94442"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
}

else if(IMC>=39.9)
{
    document.getElementById("classificacao").innerHTML = 'Você tem obesidade Grau III ou Mórbida';//mostra os meses
    var fundoErro = document.querySelector(".fundoErro")
    fundoErro.style.backgroundColor = "#f2dede"
    fundoErro.style.color = "#a94442"
    fundoErro.style.color = "#a94442"
    fundoErro.style.padding = "10px"
    fundoErro.style.marginTop = "10px"
    fundoErro.style.BorderRadius = "20px"
}

document.getElementById("imc").innerHTML = 'Seu IMC é ' + IMC + '';//mostra os meses
}


function sairIMC()
{
    //boato para calulcar imc
    var botao = document.querySelector("#sairIMC");
    botao.style.display = "none"
    var miniatura = document.querySelector("#miniaturaIMC")
    miniatura.style.opacity = "1"
    miniatura.style.opacity.hover = "1"

}

function entrarIMC()
{
    //aparecer app do IMC
    var botao = document.querySelector("#sairIMC");
    botao.style.display = "block"

    //tirar app da idade
    var botao = document.querySelector("#sairIdade");
    botao.style.position = "absolute"
    var miniatura = document.querySelector("#miniaturaIdade")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

    //tirar app da calculadora
    var botao = document.querySelector("#sairCalculadora");
    botao.style.position = "absolute"
    var miniatura = document.querySelector("#miniaturaCalculadora")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"
}


function sairIdade()
{
    //boato para calulcar idade
    var botao = document.querySelector("#sairIdade");
    botao.style.display = "none"
}

function entrarIdade()
{
    //aparecer app da idade
    var botao = document.querySelector("#sairIdade");
    botao.style.display = "block"
    var miniatura = document.querySelector("#miniaturaIdade")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

    //tirar app da calculadora
    var botao = document.querySelector("#sairCalculadora");
    botao.style.position = "absolute"
    var miniatura = document.querySelector("#miniaturaCalculadora")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

    //tirar app da IMC
    var botao = document.querySelector("#sairIMC");
    botao.style.position = "absolute"
    var miniatura = document.querySelector("#miniaturaIMC")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

}

function sairCalculadora()
{
    //boato para calulcar idade
    var botao = document.querySelector("#sairCalculadora");
    botao.style.display = "none"

}

function entrarCalculadora()
{
    //tirar app da idade
    var botao = document.querySelector("#sairCalculadora");
    botao.style.display = "block"
    var miniatura = document.querySelector("#miniaturaCalculadora")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

    //tirar app da idade
    var botao = document.querySelector("#sairIdade");
    botao.style.position = "none"
    var miniatura = document.querySelector("#miniaturaIdade")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

    //tirar app da IMC
    var botao = document.querySelector("#sairIMC");
    botao.style.position = "none"
    var miniatura = document.querySelector("#miniaturaIMC")
    miniatura.style.display = "1"
    miniatura.style.opacity.hover = "1"

}


//APP PARA CALCULAR IDADE
function calcularIdade()
{

    var input = document.querySelector("#ano");
    var AnoNascimento = input.value;

    var AnoAtual = new Date().getFullYear()

    var idadeAnos = AnoAtual - AnoNascimento//Calcula os anos

    var idadeMeses = idadeAnos * 12 //Calcula os Meses

    var idadeDias = idadeAnos * 365 //Calcula os Dias

    var idadeSemanas = idadeAnos * 52 //Calcula as Semanas

    var idadeHoras = idadeAnos * 8760 //Calcula as Horas

    var idadeMinutos = idadeAnos * 525600 //Calcula os Minutos

    var idadeSegundos = idadeAnos * 31536000 //Calcula os Segundos


document.getElementById("anos").innerHTML = "Você tem " + idadeAnos + ' anos';//mostra os meses
document.getElementById("meses").innerHTML = 'Você tem ' + idadeMeses + ' meses';//mostra os meses
document.getElementById("dias").innerHTML = 'Você tem ' + idadeDias + ' dias';//mostra os meses
document.getElementById("semanas").innerHTML = 'Você tem ' + idadeSemanas + ' semanas';//mostra os meses
document.getElementById("horas").innerHTML = 'Você tem ' + idadeHoras + ' horas';//mostra os meses
document.getElementById("minutos").innerHTML = 'Você tem ' + idadeMinutos + ' minutos';//mostra os meses
document.getElementById("segundos").innerHTML = 'Você tem ' + idadeSegundos + ' segundos';//mostra os meses
}


//SCRIPT DA CALCULADORA

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equal(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview.value = eval(exp);
}
}
function c(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}