 const slider = document.querySelectorAll('.imagem-slide')
 const btnVoltar = document.getElementById('botao-voltar')
 const btnAvancar = document.getElementById('botao-avancar')

 let slideAtivo = 0

 function hideSlider() { // esconder slider
    slider.forEach(item => item.classList.remove('on')) //entrar em cada classe e remover a classe 'on'
 }

 function showSlider() { // mostrar a que tem o índice correspondente ao 'slideAtivo' = 0
    slider[slideAtivo].classList.add('on')
 }

function avancarSlide() { // função para avançar slide (imagem)
    hideSlider()
    if(slideAtivo === slider.length -1){ //verificação para o slideAtivo (adicionar classe 'on') e voltar ao 0, ou seja, quando chegar no último volta para o primeiro
        slideAtivo = 0
    } else{
        slideAtivo++
    }
    showSlider()
}

function voltarSlide() { // função para voltar slide (imagem)
    hideSlider()
    if(slideAtivo === 0){ 
        slideAtivo = slider.length -1  // slider.lenght para slider com 2 imagens representa o último
    } else{
        slideAtivo--
    }
    showSlider()
}

 btnAvancar.addEventListener('click', avancarSlide)
 btnVoltar.addEventListener('click', voltarSlide)

 console.log(slider)