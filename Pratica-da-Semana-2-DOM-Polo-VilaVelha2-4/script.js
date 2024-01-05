var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
var image_name = document.getElementById('nome');

// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
select.addEventListener('change', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);


function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  var object_array = new Array();
  if (select.value == 'dog') {
    object_array = cachorros;
  } else {
    object_array = gatos;
  }

  for (var object of object_array) {
    var image = document.createElement('img');
    image.src = 'img/' + object.imagem + '.jpg';
    image.alt = object.nome;
    container.appendChild(image)
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  image_name.innerText = e.target.alt;
}

function limparNome() {
  image_name.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}