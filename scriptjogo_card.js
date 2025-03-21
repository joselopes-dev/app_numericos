// Permitir que os elementos possam ser soltos
function allowDrop(event) {
    event.preventDefault();
    if (event.type === 'dragover' || event.type === 'touchmove') {
      event.currentTarget.classList.add('drag-over');
    }
  }
  
  // Função chamada quando o item começa a ser arrastado com mouse
  function drag(event) {
    event.dataTransfer.setData("imageId", event.target.id);
  }
  
  // Função chamada quando o item deixa a área de drop com mouse
  function dragLeave(event) {
    event.currentTarget.classList.remove('drag-over');
  }
  
  // Função para soltar a imagem na área designada com mouse
  function drop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');
    
    var imageId = event.dataTransfer.getData("imageId");
    var droppedElement = document.getElementById(imageId);
    
    if (checkAnswer(imageId, event.target.id)) {
      var dropArea = event.target;
      var textContent = dropArea.innerHTML;
      dropArea.innerHTML = "";
  
      var textElement = document.createElement("p");
      textElement.innerHTML = textContent;
      dropArea.appendChild(textElement);
  
      dropArea.appendChild(droppedElement); 
      throwConfetti();
    } else {
      resetPosition(droppedElement);
    }
  }
  
  
  const games = {
    1: {
      name: "Tags HTML",
      images: [
        { id: "img1", src: "roma3.png", answer: "drop1" },
        { id: "img2", src: "cenoura4.png", answer: "drop2" },
        { id: "img3", src: "laranja6.png", answer: "drop3" },
        { id: "img4", src: "abacaxi2.png", answer: "drop4" },
        { id: "img5", src: "caqui7.png", answer: "drop5" },
        { id: "img6", src: "melancia1.png", answer: "drop6" },
        { id: "img7", src: "morango5.png", answer: "drop7" },
        { id: "img8", src: "tomate9.png", answer: "drop8" },
        //{ id: "img9", src: "pimenta10.png", answer: "drop9" },
        { id: "img10", src: "manga8.png", answer: "drop10" },
        //{ id: "img11", src: "imagem_a.png", answer: "drop11" },
        //{ id: "img12", src: "imagem_img.png", answer: "drop12" }
      ],
      dropAreas: [
        { id: "drop1", label: "3" },
        { id: "drop2", label: "4" },
        { id: "drop3", label: "6" },
        { id: "drop4", label: "2" },
        { id: "drop5", label: "7" },
        { id: "drop6", label: "1" },
        { id: "drop7", label: "5" },
        { id: "drop8", label: "9" },
        //{ id: "drop9", label: "10" },
        { id: "drop10", label: "8" },
        //{ id: "drop11", label: "Cria um link para outra página ou recurso" },
        //{ id: "drop12", label: "Insere uma imagem no documento" } 
      ]
    },
    
    2: {
      name: "Tags HTML",
      images: [
        { id: "imgA", src: "./imagem_ul.png", answer: "dropA" },
        { id: "imgB", src: "./imagem_ol.png", answer: "dropB" },
        { id: "imgC", src: "./imagem_li.png", answer: "dropC" },
        { id: "imgD", src: "./imagem_div.png", answer: "dropD" },
        { id: "imgE", src: "./imagem_span.png", answer: "dropE" },
        { id: "imgF", src: "./imagem_form.png", answer: "dropF" },
        { id: "imgG", src: "./imagem_imput.png", answer: "dropG" },
        { id: "imgH", src: "./imagem_buton.png", answer: "dropH" },
        { id: "imgI", src: "./imagem_table.png", answer: "dropI" },
        { id: "imgJ", src: "./imagem_tr.png", answer: "dropJ" },
        { id: "imgL", src: "./imagem_td.png", answer: "dropL" },
        { id: "imgM", src: "./imagem_th.png", answer: "dropM" }
        // Adicione mais imagens e respostas aqui
      ],
      dropAreas: [
        { id: "dropA", label: "Define uma lista não ordenada" },
        { id: "dropB", label: "Define uma lista ordenada" },
        { id: "dropC", label: "Define um item de uma lista" },
        { id: "dropD", label: "Usada como um contêiner genérico para agrupar elementos" },
        { id: "dropE", label: "Usada para estilizar ou agrupar uma pequena porção de texto" },
        { id: "dropF", label: "Cria um formulário interativo para a entrada de dados do usuário" },
        { id: "dropG", label: "Representa um campo de entrada em um formulário" },
        { id: "dropH", label: "Define um botão clicável" },
        { id: "dropI", label: "Cria uma tabela" },
        { id: "dropJ", label: "Representa uma linha dentro de uma tabela" },
        { id: "dropL", label: "Representa uma célula de dados dentro de uma linha de tabela" },
        { id: "dropM", label: "Define uma célula de cabeçalho em uma tabela" }
        // Adicione mais áreas de drop aqui
      ]
    },
  
    3: {
      name: "Tags HTML",
      images: [
        { id: "img13", src: "./imagem_header.png", answer: "drop13" },
        { id: "img14", src: "./imagem_nav.png", answer: "drop14" },
        { id: "img15", src: "./imagem_section.png", answer: "drop15" },
        { id: "img16", src: "./imagem_article.png", answer: "drop16" },
        { id: "img17", src: "./imagem_footer.png", answer: "drop17" },
        { id: "img18", src: "./imagem_aside.png", answer: "drop18" },
        { id: "img19", src: "./imagem_video.png", answer: "drop19" },
        { id: "img20", src: "./imagem_audio.png", answer: "drop20" },
        { id: "img21", src: "./imagem_select.png", answer: "drop21" },
        { id: "img22", src: "./imagem_main.png", answer: "drop22" },
        { id: "img23", src: "./imagem_figure.png", answer: "drop23" },
        { id: "img24", src: "./imagem_mark.png", answer: "drop24" }
        // Adicione mais imagens e respostas aqui
      ],
      dropAreas: [
        { id: "drop13", label: "Define o cabeçalho de uma página ou seção" },
        { id: "drop14", label: "Define uma área de navegação" },
        { id: "drop15", label: "Define uma seção de conteúdo" },
        { id: "drop16", label: "Define um artigo" },
        { id: "drop17", label: "Define o rodapé de uma página ou seção" },
        { id: "drop18", label: "Define um conteúdo relacionado, como uma barra lateral" },
        { id: "drop19", label: "Insere um vídeo" },
        { id: "drop20", label: "Insere áudio" },
        { id: "drop21", label: "Cria um menu suspenso" },
        { id: "drop22", label: "Define o conteúdo principal do documento" },
        { id: "drop23", label: "Usado para agrupar conteúdo como imagens, gráficos, diagramas" },
        { id: "drop24", label: "Realça texto em amarelo para indicar sua importância ou relevância" }
        // Adicione mais áreas de drop aqui
      ]
    }
    // Adicione mais jogos aqui
  };
  
  // Função para iniciar o jogo
  function startGame() {
    const selectedGameId = document.getElementById('game-selector').value;
    const selectedGame = games[selectedGameId];
    
    // Limpa o contêiner
    document.getElementById('drag-container').innerHTML = '';
    document.getElementById('drop-area-container').innerHTML = '';
  
    // Adiciona imagens ao contêiner de arrastar
    selectedGame.images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.id = image.id;
      imgElement.src = image.src;
      imgElement.draggable = true;
      imgElement.ondragstart = drag;
      imgElement.className = "drag-image"; // Classe para estilização
      document.getElementById('drag-container').appendChild(imgElement);
    });
  
    // Adiciona áreas de drop
    selectedGame.dropAreas.forEach(area => {
      const dropArea = document.createElement('div');
      dropArea.id = area.id;
      dropArea.classList.add('drop-area');
      dropArea.ondrop = drop;
      dropArea.ondragover = allowDrop;
      dropArea.innerHTML = `<p>${area.label}</p>`;
      document.getElementById('drop-area-container').appendChild(dropArea);
    });
  
    shuffleElements(document.getElementById('drag-container'));
    shuffleElements(document.getElementById('drop-area-container'));
  
    // Adicionar suporte a toque
    addTouchSupport(); // <-- Adiciona essa linha
  }
  //até aqui
  
  // Permitir que os elementos possam ser soltos
  function allowDrop(event) {
    event.preventDefault();
  }
  
  // Função chamada quando o item começa a ser arrastado
  function drag(event) {
    event.dataTransfer.setData("imageId", event.target.id);
  }
  
  // Função para soltar a imagem na área designada
  function drop(event) {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("imageId");
    const droppedElement = document.getElementById(imageId);
  
    if (checkAnswer(imageId, event.target.id)) {
      const dropArea = event.target;
      const textContent = dropArea.innerHTML;
      dropArea.innerHTML = "";
      const textElement = document.createElement("p");
      textElement.innerHTML = textContent;
      dropArea.appendChild(textElement);
      dropArea.appendChild(droppedElement);
      throwConfetti();
    } else {
      resetPosition(droppedElement);
    }
  }
  
  // Função para validar a resposta correta
  function checkAnswer(imageId, dropAreaId) {
    const selectedGameId = document.getElementById('game-selector').value;
    const selectedGame = games[selectedGameId];
    const image = selectedGame.images.find(img => img.id === imageId);
    return image && image.answer === dropAreaId;
  }
  
  // Função para jogar confetes 🎉
  function throwConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
  
  // Função para reposicionar a imagem no local original
  function resetPosition(element) {
    const dragContainer = document.getElementById('drag-container');
    dragContainer.appendChild(element);
  }
  
  // Função para embaralhar os elementos dentro de um contêiner
  function shuffleElements(container) {
    const elementsArray = Array.from(container.children);
    for (let i = elementsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      container.appendChild(elementsArray[j]);
    }
  }
  
  // Função para reiniciar o jogo
  function restartGame() {
    const container = document.getElementById('drag-container');
    const dropAreas = document.querySelectorAll('.drop-area');
  
    dropAreas.forEach(area => {
      const imagesInDropArea = area.querySelectorAll('img');
      imagesInDropArea.forEach(image => {
        container.appendChild(image);
      });
    });
  
    shuffleElements(container);
    shuffleElements(document.getElementById('drop-area-container'));
  }
  
  // Embaralhar ao carregar a página
  document.addEventListener("DOMContentLoaded", function() {
    startGame(); // Inicia o jogo padrão ao carregar
  });
  
  
  // Objeto para gerenciar dados de toque
  let touchData = {
    dragging: false,
    draggedElement: null,
    originalParent: null,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    clone: null
  };
  
  // Iniciar o toque
  function touchStart(event) {
    event.preventDefault();
    
    if (event.target.tagName.toLowerCase() === 'img') {
      touchData.dragging = true;
      touchData.draggedElement = event.target;
      touchData.originalParent = event.target.parentElement;
      const touch = event.touches[0];
      touchData.startX = touch.clientX;
      touchData.startY = touch.clientY;
      
      // Criar um clone para seguir o toque
      touchData.clone = event.target.cloneNode(true);
      touchData.clone.style.position = 'absolute';
      touchData.clone.style.pointerEvents = 'none';
      touchData.clone.style.opacity = '0.8';
      touchData.clone.style.left = `${touch.clientX}px`;
      touchData.clone.style.top = `${touch.clientY}px`;
      document.body.appendChild(touchData.clone);
    }
  }
  
  // Movimentar o toque
  //mudar para esse codigo
  function touchMove(event) {
    if (!touchData.dragging) return;
    
    const touch = event.touches[0];
    touchData.currentX = touch.clientX;
    touchData.currentY = touch.clientY;
    
    if (touchData.clone) {
      touchData.clone.style.left = `${touch.clientX}px`;
      touchData.clone.style.top = `${touch.clientY}px`;
    }
  
    // Verificar o elemento atual sob o toque
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    if (dropTarget && dropTarget.classList.contains('drop-area')) {
      dropTarget.classList.add('drag-over');
    } else {
      document.querySelectorAll('.drop-area').forEach(function(area) {
        area.classList.remove('drag-over');
      });
    }
  }
  //até aqui
  
  // Finalizar o toque
  function touchEnd(event) {
    if (!touchData.dragging) return;
    
    touchData.dragging = false;
    
    if (touchData.clone) {
      document.body.removeChild(touchData.clone);
      touchData.clone = null;
    }
    
    // Remover todas as classes de drag-over
    document.querySelectorAll('.drop-area').forEach(function(area) {
      area.classList.remove('drag-over');
    });
    
    // Detectar o elemento sob o toque
    const dropTarget = document.elementFromPoint(touchData.currentX, touchData.currentY);
    
    if (dropTarget && dropTarget.classList.contains('drop-area')) {
      const imageId = touchData.draggedElement.id;
      const dropAreaId = dropTarget.id;
      
      if (checkAnswer(imageId, dropAreaId)) {
        var dropArea = dropTarget;
        var textContent = dropArea.innerHTML;
        dropArea.innerHTML = "";
  
        var textElement = document.createElement("p");
        textElement.innerHTML = textContent;
        dropArea.appendChild(textElement);
  
        dropArea.appendChild(touchData.draggedElement); 
        throwConfetti();
      } else {
        resetPosition(touchData.draggedElement);
      }
    } else {
      resetPosition(touchData.draggedElement);
    }
  }
  
  // Adicionar eventos de toque aos elementos arrastáveis
  function addTouchSupport() {
    const draggableImages = document.querySelectorAll('.drag-container img');
    
    draggableImages.forEach(function(img) {
      img.addEventListener('touchstart', touchStart, false);
      img.addEventListener('touchmove', touchMove, false);
      img.addEventListener('touchend', touchEnd, false);
    });
  }
  
  // Embaralhar ao carregar a página e adicionar suporte a toque
  document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('drag-container');
    var dropContainer = document.getElementById('drop-area-container');
  
    shuffleElements(container);
    shuffleElements(dropContainer);
    
    // Adicionar suporte a toque
    addTouchSupport();
  });
  