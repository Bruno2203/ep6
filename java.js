function equacao(){
    var a = vara.value;
    var b = varb.value;
    var c = varc.value;

    var resposta = a/b;
     
    if(a == 0){
        alert("A deve ser diferente de 0");
    }
    else{
        if(c == resposta){
            alert("acertou");
        }
        else{
            alert("errou");
        }
}
}