    // Começamos com uma 'Self-Executing Anonymous Functions', esse parttern nos ajuda a não poluir o global namespace;
    ;(function(){
     
        // doc é um 'cache' para o objeto global documento, assim nao precisamos subir toda hora para acessar esse objeto, ja que agora temos ele local;
            var doc = document,
         
        // Um array que contem todos os inputs com a class .resposta. (.querySelectorAll nao está disponivel em todos os navegadores, entao caso vc precise vc pode usar outra maneira para conseguir os inputs, ex.: .getElementsByClassName())
            respostaUsuario = doc.querySelectorAll('input.resposta'),
         
        // A lista de respostas corretas;
            respostaCorreta = ['a', 'b', 'c'],
         
        // Um pequeno dicionário para feedback;
            resposta = {
            'certa': 'Sua resposta esta certa',
            'errada': 'Resposta correta: '
            },
         
        // O botao que será clicado para verificar suas respostas;
            btn = doc.getElementById('button');
         
        // Funcao chamada para verificar as resposas;
            function Corrigir() {
         
        // Variaveis locais, incluindo um caching para a quantidade de inputs na pagina
            var i,
            len = respostaUsuario.length;
            
            for( i = 0; i < len; i++ ) {
         
        // Ao inves de usar document.write segue uma maneira melhor de mostrar seus resultados;
            var d = doc.createElement('div'),
            text;
            }
        }
    }    
