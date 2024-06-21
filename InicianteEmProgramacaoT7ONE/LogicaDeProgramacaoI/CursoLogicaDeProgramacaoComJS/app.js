prompt = require('prompt-sync')();


let numeroSecreto = 29;
let numeroEscolhido;
let tentativas = 1;
let sucesso = false;
let numeroMaximo = 5000;

function menu () {
	while(true) {
		let opcao = prompt("1- Jogar 2 - Sair");
		if(opcao == 1) {
			chutarNumero();
			randomizador();
		}else if(opcao == 2) {
			console.log("Saindo.")
			break;
		}else{
			console.log("Opcao invalida.")
		}
	}

}


function randomizador(){
	let numAleatorio = (Math.random()) * numeroMaximo+1;
	while(numAleatorio >numeroMaximo) {
		numAleatorio = (Math.random())*numeroMaximo+1;
	}
	numAleatorio = parseInt(numAleatorio);
	console.log(numAleatorio)
	numeroSecreto = numAleatorio;
}

function chutarNumero() {
	var x = true;
	while(x) {
		numeroEscolhido = prompt("Insira um numero");
		if(numeroEscolhido == numeroSecreto) {
			x = false
			break;
		}else{
			//template String
			console.log(`Sinto muito, ${numeroEscolhido} nao esta correto. Tente novamente.`);
			if(numeroEscolhido > numeroSecreto) {
				console.log(`O numero secreto e menor que ${numeroEscolhido}`);
			}else{
				console.log(`O numero secreto e maior que ${numeroEscolhido}`);
			}
		}
		tentativas = tentativas +1;
	}

	let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
	console.log("Parabens, voce acertou o numero secreto "+numeroSecreto+" com "+tentativas+" "+palavraTentativa+"!!");
}


menu();










