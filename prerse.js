function oCovid(){
    alert("Cuidado com o COVID-19!");
}

function oKeep(){
    alert("Keep Calm and carry on!");
}

function oTres(){
    var numero01 = prompt("Informe o primeiro número", "100");
    var numero02 = prompt("Informe o segundo número", "200");
    var numero03 = prompt("Informe o terceiro número", "300");
    if ((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!"
    else
    if ((numero02 > numero01) && (numero02 > numero03)) mensagem = "O segundo número informado é maior!"
    else
    if ((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número informado é maior!"
    else
    mensagem = "Os números são iguais ou nada foi informado";
    alert(mensagem);
}
function oIdade(){
    var idade = parseInt(prompt("Informe a sua idade", "18"));
    if (idade < 18) mensagem = "A idade informada é de um menor!"
    else
    mensagem = "Se não estiver mentindo é maior de idade!";
    alert(mensagem);
}

function oMedia(){
    var nota01 = parseInt(prompt("Informe o primeiro número"));
    var nota02 = parseInt(prompt("Informe o segundo número"));
    var nota03 = parseInt(prompt("Informe o terceiro número" ));
    alert("A média dos números informados é:" + (nota01+nota02+nota03)/3);
}

function oIMC (){
    var p = prompt("Qual o seu peso");
    let h = prompt("Qual a sua altura");

    var imc = (p/(h*h)).toFixed(2);
    alert("seu imc é..:"+imc);
}

function oPlano (){
    const fixa = 100;
    var idade = prompt("Digite sua idade");
    let conv = 0;
    if (idade < 10){
        conv = (fixa+80);
        alert("O valor do seu plano é..: "+conv);
    } else if (10 <= idade >= 30 ){
        conv = (fixa+50);
        alert("O valor do seu plano é..: "+conv);
    } else if (30 < idade >= 60){
        conv = (fixa+95)
        alert("O valor do seu plano é..: "+conv);
    } else  (idade > 60)
        conv = (fixa+130);
        alert("O valor do seu plano é..: "+conv);
              
}

function oImprimir (){
    contador = 1;

  while (contador <= 11) 
      {
        contador++;
       alert ("Hello World! \n");
       
      }
}

function oImprimir1a50 (){
    for (let i = 1; i <51; i++){
        console.log(i);
    }
 }
 
function oAtecem(){
    for (let i = 0; i <102; i+=2){
        console.log(i);
    }
 }

function oSoma(){
    let n1 = prompt("Digite o primeiro número");
    let n2 = prompt("Digite o segundo número");
    let so = n1 + n2;     
        alert("A soma é "+so);
    let su = n1-n2;
        alert("A subtração é "+su);
    let mu = n1*n2;
        alert("A multiplicação é "+mu);
    let di = n1/n2;
        alert("A divisão é "+di);
}

function oJuros(){
    var c = prompt("Digite seu Capital Inicial")
    var js = c*0.03*24
    alert("O juros simples anual sob 3% de taxa é..: "+js)
    var m = c*(1+0.03)**24;
    var jc = (m - c);
    alert("O juros composto anual sob 3% de taxa é..: "+jc); 
}

function oPares(){
    for(var i=0;i<=100;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}

function Oanuidade(){ 
    var a = prompt("Digite seu ano de nascimento");
    var i = 2021 - a;
    alert("Você tem "+i+" anos"); 

}

function OAlunos(){ 
    alert("Trabalho desenvolvido pelos aluno: ARTHUR DE MORAIS GUIMARÃES");
}

