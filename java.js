/**faz a dizer se a divisão esta certa ou errada **/
function equacao(){
    var a = var_a.value;
    var b = var_b.value;
    var c = var_c.value;
    var resposta = a/b;
    if(a == 0){
        alert("A deve ser diferente de 0");
    }
        
    else
    {
        if(c == resposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}
function equacao2(){
    var a = vara.value;
    var b = varb.value;
    var c = varc.value;
    var resposta = a/b;
    if(a == 0){
        alert("A deve ser diferente de 0");
    }
        
    else
    {
        if(c == resposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
    }
}
/**faz o nome que vc coloca no inicio aparecer na pagina**/
function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Olá, " + nome_variavel + ", seja vem vindo! ";
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}
/** corrigi as questões de alternativa**/
function funcao_resposta(){

   
    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";
        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";
        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada,  A velocidade média é calculada dividindo o deslocamento pela variação de tempo.";

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}