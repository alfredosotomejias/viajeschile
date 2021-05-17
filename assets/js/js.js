/* smooth scroll referenciado por id envia apretando links de navbar a secciones */
let buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
/* activa popover */
$(document).ready(function(){
 
    $('[data-toggle="popover"]').popover();
    });
    /* bienvenida a la pagina y despedida */
window.onload=function(){alert('Bienvenido a Viajes Chile');}
window.onunload=function(){alert('Vuelva en otro momento');}

/* al apretar los titulos de las cartas el cuerpo desaparece */
             $(".card-title1").on( "click", function() {	 
                $('.card-text1').toggle();
                 });
                 $(".card-title2").on( "click", function() {	 
                    $('.card-text2').toggle();
                     });
                     $(".card-title3").on( "click", function() {	 
                        $('.card-text3').toggle();
                         });
                         $(".card-title4").on( "click", function() {	 
                            $('.card-text4').toggle();
                             });