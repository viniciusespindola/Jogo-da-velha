let espaco = $(".espacos");
let i = 0;
let placar = {"Jogador X" : 0,"Jogador O" : 0};

$(".placar #X").html(placar["Jogador X"]);
$(".placar #O").html(placar["Jogador O"]);
$(".vez h4").html("O jogador X começa");

espaco.on('click', function() {
	// Verificação se o campo foi preenchido
	if ($(this).html() !== "X" && $(this).html() !== "O") {
		// Verificação se alguma sequencia vencedora foi completada pelo X
		if (espaco.eq(0).html() == "X" && espaco.eq(1).html() == "X" && espaco.eq(2).html() == "X" || espaco.eq(3).html() == "X" && espaco.eq(4).html() == "X" && espaco.eq(5).html() == "X" || espaco.eq(6).html() == "X" && espaco.eq(7).html() == "X" && espaco.eq(8).html() == "X" || espaco.eq(0).html() == "X" && espaco.eq(3).html() == "X" && espaco.eq(6).html() == "X" || espaco.eq(1).html() == "X" && espaco.eq(4).html() == "X" && espaco.eq(7).html() == "X" || espaco.eq(2).html() == "X" && espaco.eq(5).html() == "X" && espaco.eq(8).html() == "X" || espaco.eq(0).html() == "X" && espaco.eq(4).html() == "X" && espaco.eq(8).html() == "X" || espaco.eq(2).html() == "X" && espaco.eq(4).html() == "X" && espaco.eq(6).html() == "X") {
			// Adciona 1 ponto ao jogador X
			placar["Jogador X"]++;
			// Mensagem de que o jogador X ganhou
			$(".titulo h1").html("O Jogador X Ganhou!!!");
			// Atuliza o placar
			$(".placar #X").html(placar["Jogador X"]);
			// Reinicia o jogo
			$(".espacos").html("");
			i = 0;
			// Menssagem de quem começa
			$(".vez h4").html("O jogador X começa");
		}

		// Verificação se alguma sequencia vencedora foi completada pelo O
		else if (espaco.eq(0).html() == "O" && espaco.eq(1).html() == "O" && espaco.eq(2).html() == "O" || espaco.eq(3).html() == "O" && espaco.eq(4).html() == "O" && espaco.eq(5).html() == "O" || espaco.eq(6).html() == "O" && espaco.eq(7).html() == "O" && espaco.eq(8).html() == "O" || espaco.eq(0).html() == "O" && espaco.eq(3).html() == "O" && espaco.eq(6).html() == "O" || espaco.eq(1).html() == "O" && espaco.eq(4).html() == "O" && espaco.eq(7).html() == "O" || espaco.eq(2).html() == "O" && espaco.eq(5).html() == "O" && espaco.eq(8).html() == "O" || espaco.eq(0).html() == "O" && espaco.eq(4).html() == "O" && espaco.eq(8).html() == "O" || espaco.eq(2).html() == "O" && espaco.eq(4).html() == "O" && espaco.eq(6).html() == "O") {
			// Adciona 1 ponto ao jogador O
			placar["Jogador O"]++;
			// Mensagem de que o jogador O ganhou
			$(".titulo h1").html("O Jogador O Ganhou!!!");
			// Atuliza o placar
			$(".placar #O").html(placar["Jogador O"]);
			// Reinicia o jogo
			$(".espacos").html("");
			i = 0;
			// Menssagem de quem começa
			$(".vez h4").html("O jogador X começa");
		}
		else{ // Continua preenchendo a tebela caso não haja vencedor
			if (i % 2 == 0) { // Verifica se é a vez do X
				// Mensagem de quem é a vez
				$(".vez h4").html("Vez do jogador O");
				// Marca o lugar clicado com um X
				$(this).html("X");
				// Muda para a vez do proximo
				i++;
			}
			else{ // Se não for a vez do X
				// Mensagem de quem é a vez
				$(".vez h4").html("Vez do jogador X");
				// Marca o lugar clicado com um O
				$(this).html("O");
				// Muda para a vez do proximo
				i++;
			}
		}
	}
	// Verifica se todos os espaços foram preenchidos
	else if(espaco.eq(0).html() == "X" || espaco.eq(0).html() == "O" && espaco.eq(1).html() == "X" || espaco.eq(1).html() == "O" && espaco.eq(2).html() == "X" || espaco.eq(2).html() == "O" && espaco.eq(3).html() == "X" || espaco.eq(3).html() == "O" && espaco.eq(4).html() == "X" || espaco.eq(4).html() == "O" && espaco.eq(5).html() == "X" || espaco.eq(5).html() == "O" && espaco.eq(6).html() == "X" || espaco.eq(6).html() == "O" && espaco.eq(7).html() == "X" || espaco.eq(7).html() == "O" && espaco.eq(8).html() == "X" || espaco.eq(8).html() == "O") {
		// Menssagem que deu empate
		$(".titulo h1").html("Empatou :(");
		// Reinicia o jogo
		$(".espacos").html("");
		i = 0;
		// Menssagem de quem começa 
		$(".vez h4").html("O jogador X começa");
	}
});

$("button").on('click', function(){
	$(".titulo h1").html("Jogo da Velha");
	$(".vez h4").html("O jogador X começa");
	$(".espacos").html("");
	placar["Jogador X"] = 0;
	$(".placar #X").html(placar["Jogador X"]);
	placar["Jogador O"] = 0;
	$(".placar #O").html(placar["Jogador O"]);
	i = 0;
});