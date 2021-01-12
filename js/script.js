// PREPARO IL DOCUMENTO COSI DA INIZIARE AD USARE I COMANDI DOPO CHE SI E' COMPLETAMENTE CARICATO 
$(document).ready(function(){

    // CREO UN COMANDO DOVE AL HOVER DI UN ELEMENTO LI SPECIFICO APRE UN MENU' 
    $('ul.nav-bar-header li.open').hover(function(){
        $(this).toggleClass('active');
        $(this).children('ul').toggleClass('show');
    });

    // COMANDO PER HOVER SU MENU APERTI 
    $('ul.nav-bar-header li.open ul li ').hover(function(){
        $(this).toggleClass('visibile');
    });

    // COMANDI SU PULSANTE LINGUE FRECCIE CON HOVER 
    $('.freccie').hover(function(){
        $(this).toggleClass('active');
    });

    // COMANDI SU PULSANTE LINGUE FRECCIE CON CLICK
    $('.freccie').click(function(){
        $(this).children('ul').toggleClass('show');
        $('ul.nav-bar-header li.freccie i.su').toggleClass('nascondi');
        $('ul.nav-bar-header li.freccie i.giu').toggleClass('nascondi');
    });
    
    // COMANDO PER HOVER SU MENU APERTI FRECCIE
    $('.freccie ul li').hover(function(){
        $(this).toggleClass('active');
    });

});
// FINE DOCUMENTO READY 