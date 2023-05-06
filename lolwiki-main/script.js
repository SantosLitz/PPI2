//Seleciona os elementos para adicionar os eventos ou mudar estado/estilização
const listLinks = document.querySelectorAll(".list ul li a");
const landingPageBtn = document.querySelector("#landing-page-btn");

const formInputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const stars = document.querySelectorAll("#rate img");
const textarea = document.querySelector("textarea");

//Executa ao o DOM da página ser carregado e chama a função de pegar a página atual e estilizar o link no header
document.addEventListener("DOMContentLoaded", getCurrentPagePaintLink);

//Aplica a todos as tags inputs o evento de foco
formInputs.forEach((input) =>
    input.addEventListener("focus", changeFocusInputColor)
);

//Aplica a todos as tags inputs o evento de blur
formInputs.forEach((input) =>
    input.addEventListener("blur", changeFocusInputColor)
);

//Aplica a todos as tags inputs o evento de invalid
formInputs.forEach((input) =>
    input.addEventListener("invalid", notifyInvalidInput)
);

//Aplica a textarea o evento de input de valores
textarea.addEventListener("input", compareMinumunCharacters);

//Aplica os eventos de click e mousemove as estrelas
stars.forEach((star) => star.addEventListener("click", paintStars));
stars.forEach((star) => star.addEventListener("mousemove", paintStars));

//Aplica o evento de submit na tag form
form.addEventListener("submit", messageOnSubmit);

function getCurrentPagePaintLink() {
    //pega a url da página
    let pageURL = window.location;

    //adquire apenas o índice da string desejado
    const pageRequiredIndex = String(pageURL).indexOf("pages") + 6;

    //filtra a string com somente o conteúdo necessário para executar as comparações
    const filteredPage = String(pageURL).substring(
        pageRequiredIndex,
        pageURL.length
    );

    //Estiliza a página de acordo com as condições definidas
    if (filteredPage == "know-lol/") {
        listLinks[1].style.color = "#c9aa71";
    } else if (filteredPage == "how-to-play/") {
        listLinks[2].style.color = "#c9aa71";
    } else if (filteredPage == "your-opinion/") {
        listLinks[3].style.color = "#c9aa71";
    } else {
        listLinks[0].style.color = "#c9aa71";
    }
}

function changeFocusInputColor(event) {
    //Seleciona o target do evento e também o tipo uma vez que 2 event listeners diferentes invocam a função
    let currentInput = event.target;
    let eventType = event.type;

    //Se tiver foco aplica estilo senao não aplica
    if (eventType == "focus") {
        currentInput.style.outline = "2px solid #c9aa71";
    } else {
        currentInput.style.outline = "none";
    }
}

function compareMinumunCharacters() {
    //Pega o tamanho do valor digitado dentro da textarea
    let textAreaContent = textarea.value.length;

    //Se o valor for menor que 80 caracteres coloca uma borda vermelha, se for maior coloca uma borda verde
    if (textAreaContent <= 80) {
        textarea.style.outline = "1px solid red";
    } else {
        textarea.style.outline = "1px solid green";
    }
}

function messageOnSubmit(event) {
    //Previne o evento default de carregar a página imediatamente ao clicar em submit
    event.preventDefault();

    //Alerta o usuário de que sua resposta foi enviada
    alert("Sua resposta foi enviada. Obrigado!");

    //Faz o reload da página para limpar os inputs
    window.location.reload();
}

function paintStars(event) {
    //Pega o Id para saber qual estrela foi selecionada
    let selectedStar = event.target.id;

    //Define as duas imagens da estrela. Preenchida e não preenchida
    const paintedStarSrc = "../../assets/colorful-star.svg";
    const defaultStarSrc = "../../assets/simple-star.svg";

    //Realiza as comparações. Dependendo da estrela selecionada, pinta as antecessores e deixa default as outras ou vice-versa
    if (selectedStar == "star-one") {
        stars[0].src = paintedStarSrc;
        stars[1].src = defaultStarSrc;
        stars[2].src = defaultStarSrc;
        stars[3].src = defaultStarSrc;
        stars[4].src = defaultStarSrc;
    } else if (selectedStar == "star-two") {
        stars[0].src = paintedStarSrc;
        stars[1].src = paintedStarSrc;
        stars[2].src = defaultStarSrc;
        stars[3].src = defaultStarSrc;
        stars[4].src = defaultStarSrc;
    } else if (selectedStar == "star-three") {
        stars[0].src = paintedStarSrc;
        stars[1].src = paintedStarSrc;
        stars[2].src = paintedStarSrc;
        stars[3].src = defaultStarSrc;
        stars[4].src = defaultStarSrc;
    } else if (selectedStar == "star-four") {
        stars[0].src = paintedStarSrc;
        stars[1].src = paintedStarSrc;
        stars[2].src = paintedStarSrc;
        stars[3].src = paintedStarSrc;
        stars[4].src = defaultStarSrc;
    } else if (selectedStar == "star-five") {
        stars[0].src = paintedStarSrc;
        stars[1].src = paintedStarSrc;
        stars[2].src = paintedStarSrc;
        stars[3].src = paintedStarSrc;
        stars[4].src = paintedStarSrc;
    } else {
        stars[0].src = defaultStarSrc;
        stars[1].src = defaultStarSrc;
        stars[2].src = defaultStarSrc;
        stars[3].src = defaultStarSrc;
        stars[4].src = defaultStarSrc;
    }
}

function notifyInvalidInput(event) {
    //Seleciona o target de qual input foi invalido
    let invalidInput = event.target;

    //Reseta a estilização
    invalidInput.style.outline = "none";

    //Insere uma borda vermelha nos inputs inválidos
    invalidInput.style.outline = "2px solid red";
}
