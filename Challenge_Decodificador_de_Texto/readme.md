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
<br>
- index.html
``` html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decodificador de Texto</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        
        .container {
            display: flex;
            width: 100%;
            max-width: 800px;
            margin-bottom: 20px;
        }
        
        .coluna-esquerda,
        .coluna-direita {
            flex: 1;
            padding: 20px;
            background-color: #fff;
            margin-right: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .coluna-esquerda {
            margin-right: 0;
        }
        
        #resultado {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            flex: 1;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
        
        form {
            display: flex;
            flex-direction: column;
        }
        
        label {
            margin-bottom: 10px;
        }
        
        input[type="text"] {
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        input[type="button"] {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            max-width: 200px;
        }
        
        input[type="button"]:hover {
            background-color: #0056b3;
        }
        
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        footer {
            margin-top: auto;
            text-align: center;
            width: 100%;
            padding: 10px 0;
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="coluna-esquerda">
            <header>
                <img src="./Vector.png" alt="Logo da empresa">
            </header>

            <h1>Decodificador de Texto</h1>
            <form>
                <label for="text">Letras maiúsculas e caracteres especiais não serão aceitos!</label>
                <br>
                <label for="text">Digite seu texto:</label>
                <input type="text" name="text" id="text" required>
                <input type="button" value="Codificar" onclick="codificar()">
                <input type="button" value="Decodificar" onclick="decodificar()">
            </form>
        </div>
        <div id="resultado" class="coluna-direita">
            <!-- Aqui será exibido o resultado -->
        </div>
    </div>

    <button onclick="copiarTexto()">Copiar</button>

    <script  src="./script.js"></script>
    <footer>
        <p>Raul H. 2024</p>
    </footer>
</body>
</html>
```
<br>
- style.css
``` css
/* style.css */

body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
    line-height: 1.6;
}

h1 {
    color: #333;
}

form, #resultado, button {
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

input[type="text"] {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: calc(100% - 22px);
}

input[type="button"], button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    border-radius: 4px;
    cursor: pointer;
}

input[type="button"]:hover, button:hover {
    background-color: #0056b3;
}

#resultado {
    color: #333;
}

#resultado.codificado {
    background-color: lightblue;
}

#resultado.decodificado {
    background-color: lightgreen;
}

```