const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce acredita que a  tecnologia tem um impacto mais positivo ou negativo na sociedade",
        alternativas: [
            {
                texto: "Isso é assustador, acho que negativo",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer, entretando acredito que seja algo positivo"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA e tcnologias no seu dia a dia."
            }
        ]
    },
    {
        enunciado:  "Voce acha que a tecnologia está avançando rápido demais para que as pessoas acompanhem?",
        alternativas: [
            {
                texto: "sim, de certa forma",
                afirmacao: "sim"
            },
            {
                texto: "não.",
                afirmacao: "Sentiu mais complexidade em utilizar seus próprios recursos para  usar em seu dia dia."
            }
        ]
    },
    {
        enunciado: "Voce acredita que as redes sociais tem impacto mais positivo ou negativo?",
        alternativas: [
            {
                texto: "positivo",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Negativo",
                afirmacao: "Devido a invasão pessoal"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Voce acha que o avanço tecnologico está ajudando a resolver problemas ambientais?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Ao utilizar recursos tecnologicos em algumas situaçoẽs permite proteção do meio ambiente"
            },
            {
                texto: "Não.",
                afirmacao: "O uso exacerbado de energia traz complicaçoẽs para o meio ambiente"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();