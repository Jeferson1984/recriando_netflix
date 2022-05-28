$('.owl-carousel').owlCarousel({
    loop:true, /* liga desliga o efeito de loop dos filmes */
    margin:10, /* margem entre os elementos */
    nav:false, /* esquerda e direita para navegar no carrosel */
    responsive:{ /* ajusta posição dos itens de acordo com o tamanho da tela */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function verTrailer(){
    window.open("https://www.youtube.com/watch?v=L957GIEy-8s");
}

function popupAssistir(){
    newWindow = window.open ("","","left=100,top=100,width=400,height=400");
    newWindow.document.write ("<title>NETFLIX CLONE</title>","<img src='img/DOH.jpg' width='380' height='380'>");
}

function popupInfo(){
    newWindow = window.open ("","","left=100,top=100,width=400,height=500");
    newWindow.document.write ("<title>NETFLIX CLONE</title>","<img src='img/SimpsonMovie.jpg' width='390' height='490'>");
}
