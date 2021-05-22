$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'title': 'Café molido',
                            'srcInicio' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.jpg' }, 
                           {'title':'Capuchino',
                           'srcInicio' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'ttitleit': 'Café Mocca',
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
        let listaMinis = listadoTarjetas[i].srcFin

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
            $('#listaTarjetas article figure img').attr("src", listaMinis); 
            $('button').hide();
            $('ul').css("display", "block");
            $('section img').hide();
            $('section').css("background-color", "green");
        } else {
            $('#listaTarjetas article p').show();
            $('#listaTarjetas article figure img').attr("src", imagenInicio); 
            $('button').show();
            $('ul').css("display", "inline-flex");
            $('section img').show();
            $('section').css("background-color", "white");
        }
        
            
    });

    
};

    $("button").click(function(){
        $("ul").toggle();
    });
    

});