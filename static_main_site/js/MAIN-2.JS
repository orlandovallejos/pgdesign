jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
        
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

    //Cuando se carga la página se ejecuta tooodo este codigo:

    //1.
        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    //2. 
        console.log($('#tabPortfolio'));

        //Ocultar el div con id: curriculum
        $('#portfolio').hide();

    //3.         
        $('#tabPortfolio').on('click', function(){
            console.log('se hizo click en tabPortfolio');

            //Ocultar el div con id: curriculum
            $('#curriculum').hide();

            $('#portfolio').show();
        });

    //4.
        $('#tabCV').on('click', function(){

            //Ocultar el div con id: curriculum
            $('#portfolio').hide();

            $('#curriculum').show();
        });

    });

        

});