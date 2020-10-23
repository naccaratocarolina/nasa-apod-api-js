//Armazena a URL da aplicacao
const API_URL = 'https://api.nasa.gov/planetary/';

//Armazena a chave de autenticacao
const API_KEY = '?api_key=VvKb1MwRKjyJl46HDfXmKd4UXC1STtC4a0eINCtO';

//Acessa o elemento de id root do HTML
const root = document.getElementById('root');

//Cria uma div que sera o container das informacoes retiradas da API
const container = document.createElement('div');
container.setAttribute('class', 'container');

//Adiciona a div recem criada a div root do html
root.appendChild(container);

//Funcao que faz a conexao com o end point da API da Nasa
function astronomyPictureOfTheDay() {
    fetch(API_URL + 'apod' + API_KEY)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            //Cria uma imagem com a url retirada da response da rota
            const astronomyPicture = document.createElement('img');
            astronomyPicture.src = response.url;

            const title = document.createElement('h1');
            title.textContent = "Astronomy Picture of the Day";

            //Cria um h2 com a explicacao da imagem retirada da response
            const explanation = document.createElement('h2');
            explanation.textContent = response.explanation;

            //Cria um h1 com o dia atual, retirado da response
            const date = document.createElement('button');
            date.textContent = response.date;

            //Adiciona as tags criadas ao container, que por sua vez esta conectado ao root
            container.appendChild(astronomyPicture);
            container.appendChild(title);
            container.appendChild(explanation);
            container.appendChild(date);
        }).catch(error => {
        //Faz o tratamento de erro
        error = document.createElement('marquee');
        error.textContent = "Algo deu errado :(";
        root.appendChild(error);
    })
}

//Chama a funcao para fazer o display das informacoes
astronomyPictureOfTheDay();