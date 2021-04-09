$(document).ready(function(){

    //quando il mouse passa sopra agli li 
        //individuo l' elemento con this
        //sull' elemento trovato individuo il figlio con la classe dropdown
        //aggiungo la classe active per renderlo visibile

    $('.menu li').mouseenter(function(){
        //console.log(this);
        var thisElement = $(this);
        var add = thisElement.children('.dropdown').addClass('active');
        //console.log(add);
        
    });

    //quando il mouse esce dagli li 
        //individuo l' elemento con this
        //sull' elemento trovato individuo il figlio con la classe dropdown
        //tolgo la classe active per renderlo non visibile

    $('.menu li').mouseleave(function(){
        var remove = $(this).children('.dropdown').removeClass('active');
        console.log(remove);
    })






});