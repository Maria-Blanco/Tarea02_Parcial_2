$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'title': 'Café molido',
                            'srcInicio' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.jpg' }, 
                           {'title':'Capuchino',
                           'srcInicio' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'title': 'Café Mocca',
                           'srcInicio' : 'resources/images/cafe_mocca.jpg',
                           'srcFin': 'resources/images/mocca_mini.png' }, 
                           {'title': 'Bebida',
                           'srcInicio' : 'resources/images/cafe_bebida.png',
                           'srcFin': 'resources/images/cafe_bebida_mini.png'}, 
                           {'title': 'Café Negro',
                           'srcInicio' : 'resources/images/cafe_negro.jpg',
                           'srcFin': 'resources/images/cafe_negro_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenInicio = listadoTarjetas[i].srcInicio;
        let titleArticle = listadoTarjetas[i].title;        

        let textoHtml = '<article class=\"miTarjeta\">' +
                            '<figure> ' +
                                '<img src=\"' + imagenInicio + '\" alt=\"\">' +
                                '<figcaption>' + titleArticle + '</figcaption> ' +
                            '</figure> ' +
                            ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                        '</article>  ';
        
        $('#listaTarjetas').append(textoHtml);
    

    // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
    $(window).resize(function (){
        let anchoPantalla = window.innerWidth;
        
        if (anchoPantalla < 920) {
            $('#listaTarjetas article p').hide(); 
            for (let i=0; i< listadoTarjetas.length; i++){

                let listaMinis = listadoTarjetas[i].srcFin;
                console.log  (listaMinis);
                var indexCss = i+1;
                $('.miTarjeta:nth-child(' + indexCss + ') img').attr('src', listaMinis);
                }
            $('button').hide();
            $('ul').css("display", "block");
            $('section img').hide();
            $('section').css("background-color", "green");
            $('section').css("color", "gold");
        } else {
            $('#listaTarjetas article p').show();
            for (let i=0; i< listadoTarjetas.length; i++){

                let imagenInicio = listadoTarjetas[i].srcInicio;
                console.log  (imagenInicio);
                var indexCss = i+1;
                $('.miTarjeta:nth-child(' + indexCss + ') img').attr('src', imagenInicio);
                }
            $('button').show();
            $('ul').css("display", "inline-flex");
            $('section img').show();
            $('section').css("background-color", "white");
            $('section').css("color", "black");
        }
        
            
    });

    
};


    $("button").click(function(){
        $("ul").toggle();
    });
    

});