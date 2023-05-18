// Aplicando efeito do scroll
var div_filtro = document.getElementById('filtro-botoes');
let position_scroll = { left : 0, x : 0};
div_filtro.scrollLeft = 0;


// Aplicando o efeito de click do mouse
div_filtro.addEventListener('mousedown', pressionarClickMouse)

// Função para capturar o pressionar do mouse
function pressionarClickMouse(e)
{  
  // Aplicando a posicao do elemento de acordo com o click
  position_scroll = 
  {
    left : div_filtro.scrollLeft,
    x : e.clientX
  }

  // Chamando as funções de arrastar o mouse e a ação de levantar o click
  document.addEventListener('mousemove', arrastarMouse);
  document.addEventListener('mouseup', soltarClickMouse);
}

// Função para aplicar o arrastar dos elementos
function arrastarMouse(e)
{
  // Aplicando o cursos de arrastar
  div_filtro.style.cursor = 'grabbing';
  div_filtro.style.userSelect = 'none';

  // Calculando a posição de acordo com o arrastar do mouse
  let eixoX = e.clientX - position_scroll.x

  // Aplicando a posição do elemento
  div_filtro.scrollLeft = position_scroll.left - eixoX;
}

// Função para soltar o mouse
function soltarClickMouse(e)
{
  document.removeEventListener('mousemove', arrastarMouse);
  document.removeEventListener('mouseup', soltarClickMouse);

  div_filtro.style.cursor = 'grab';
  div_filtro.style.removeProperty('user-select');
}

// ___________________________________________________________________________

// Aplicando o efeito de ativar o filtro de petz
function AtivarEDesativarFiltro(e)
{
  e.preventDefault();

  // Verificando se o elemento contem a classe ativa
  if( e.target.classList.contains('active') )
  {
    e.target.classList.remove('active');
    
  }else{
    e.target.classList.add('active');
  }
}