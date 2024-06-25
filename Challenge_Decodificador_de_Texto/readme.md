# Desafio Alura LATAM - Decodificador de texto
- Foi utilizado as seguintes ferramentas para a realizacao: nodejs, js, css, html, oracle cloud infrastructre, apache server
- Script.js
``` javascript
function codificar() {
    var texto = document.getElementById("text").value.toLowerCase(); // Obtém o texto e converte para minúsculas
    var textoCodificado = "";

    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e': textoCodificado += 'enter'; break;
            case 'i': textoCodificado += 'imes'; break;
            case 'a': textoCodificado += 'ai'; break;
            case 'o': textoCodificado += 'ober'; break;
            case 'u': textoCodificado += 'ufat'; break;
            default: textoCodificado += texto[i];
        }
    }

    exibirResultado("Texto codificado: " + textoCodificado, "codificado");
}

function decodificar() {
    var texto = document.getElementById("text").value.toLowerCase(); // Obtém o texto e converte para minúsculas
    var textoDecodificado = "";

    // Realiza a decodificação baseada nos padrões definidos
    textoDecodificado = texto.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');

    exibirResultado("Texto decodificado: " + textoDecodificado, "decodificado");
}

function exibirResultado(resultado, classe) {
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = resultado;
    divResultado.className = classe;
}

function copiarTexto() {
    var textoParaCopiar = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert("Texto copiado com sucesso!");
    }).catch(function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}
```

### Oracle OCI
- Maquina virtual hospendando o projeto:
[!OCI VM](https://github.com/sertaoboy/One/blob/main/Challenge_Decodificador_de_Texto/image.png?raw=true)