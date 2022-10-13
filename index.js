var myQuestions = [
	{
		question: "1: (UFS – 2011) John Locke é apontado como pioneiro do materialismo moderno. Sobre o “materialismo moderno”, é CORRETO afirmar que:",
		answers: {
			a: 'Todo o princípio do conhecimento material é sensorial, transponível, relativo e infinito.',
			b: 'Deriva as ideias de que se constitui o conhecimento diretamente das sensações que se marcaram na mente [...] não cabendo assim ao pensamento nada mais, [...] que combinar, comparar e analisar essas mesmas ideias.',
			c: 'O conhecimento deve ser introjetado a partir da experiência extrassensorial, peculiar a todo ser pensante.'
		},
		correctAnswer: 'b'
	},
	{
		question: "5. (IFRS – 2010) Platão considera as opiniões e as percepções sensoriais, ou conhecimento das imagens das coisas, como fonte de erro, pois nunca alcançam à verdade plena. Considerando a alegoria do Mito da Caverna, utilizada por Platão no livro A República para elucidar suas concepções antropológica e epistemológica, é incorreto afirmar que:",
		answers: {
			a: 'O Mundo Sensível é inferior ao Mundo Inteligível; ',
			b: 'O verdadeiro conhecimento é atingível pela razão; ',
			c: 'O ser humano nunca se libertará das "prisões" a que está submetido por mais que lute e se esforce;',
			d: 'A verdade essencial é conhecida através do conceito; '
		},
		correctAnswer: 'c'
	},
	{
		question: "(UFFS – 2010) De acordo com Locke, o conhecimento é formado a partir das experiências. Assim sendo, ele distingue entre as diferentes ideias que podem ser formadas a partir da experiência de um determinado objeto. Assinale a alternativa incorreta a respeito das ideias em Locke:",
		answers: {
			a: 'A mente possui ideias inatas, que são bases para o conhecimento. ',
			b: 'Existem ideias advindas dos sentidos como a visão e a audição.',
			c: 'Ideias de reflexão são provenientes de operações mentais. ',
			d: 'A mente forma ideias complexas a partir de ideias simples. '
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
