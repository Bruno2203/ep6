function funcaoresposta(){
    var respostaUsario = document.querySelector('input[name="respota"]:checked').value;
    if(respostaUsario.value == "correta"){
        document.getElementById("retorno").textContent = "acertou";
    }
}
