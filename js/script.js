$(document).ready(function(){

    //quando il mouse passa sopra agli li 
        //individuo l' elemento cliccato con this
        //sull' elemento trovato individuo il figlio con la classe dropdown
        //aggiungo la classe active per renderlo visibile

    $('.menu li').mouseenter(function(){
        //console.log(this);
        var thisElement = $(this);
        thisElement.children('dropdown');
        console.log(thisElement);
    });






});