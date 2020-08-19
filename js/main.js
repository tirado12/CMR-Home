$(document).ready(function(){
	var item = 1,
    $window = $(window);
	$(".nosotros").on("click", function(){

    
		
		if(!$(".menuNosotros").hasClass("ocultar") && !$(".menuNosotros").hasClass("mostrar")){
			$(".menuNosotros").addClass("ocultar");
		}
		if($(".menuNosotros").hasClass("ocultar")){
			$(".menuNosotros").removeClass("ocultar");
			$(".menuNosotros").addClass("mostrar");
      if ($window.width() < 1200) {
        $("#indicadorNosotros").removeClass("fa-caret-down");
        $("#indicadorNosotros").addClass("fa-caret-up");
      }
		}else{
			$(".menuNosotros").removeClass("mostrar");
			$(".menuNosotros").addClass("ocultar");
      if ($window.width() < 1200) {
        $("#indicadorNosotros").removeClass("fa-caret-up");
        $("#indicadorNosotros").addClass("fa-caret-down");
      }
		}
	});

  $(".menuNosotros").on("click", function() {
    
    $(".menuNosotros").removeClass("mostrar");
    $(".menuNosotros").addClass("ocultar");
  });


	$(".soluciones").on("click", function(){
		if(!$(".menuSoluciones").hasClass("ocultar") && !$(".menuSoluciones").hasClass("mostrar")){
			$(".menuSoluciones").addClass("ocultar");
		}
		if($(".menuSoluciones").hasClass("ocultar")){
			$(".menuSoluciones").removeClass("ocultar");
			$(".menuSoluciones").addClass("mostrar");
      if ($window.width() < 1200) {
        $("#indicadorSoluciones").removeClass("fa-caret-down");
        $("#indicadorSoluciones").addClass("fa-caret-up");
      }
		}else{
			$(".menuSoluciones").removeClass("mostrar");
			$(".menuSoluciones").addClass("ocultar");
      if ($window.width() < 1200) {
        $("#indicadorSoluciones").removeClass("fa-caret-up");
        $("#indicadorSoluciones").addClass("fa-caret-down");
      }
		}
	});

  $(".menuSoluciones").on("click", function() {
    
    $(".menuSoluciones").removeClass("mostrar");
    $(".menuSoluciones").addClass("ocultar");
  });

  /*$(".soluciones").on("click", function(){
    if ($window.width() < 1200) {
      if($("#indicadorSoluciones").hasClass("fa-caret-down")){
        $("#indicadorSoluciones").removeClass("fa-caret-down");
        $("#indicadorSoluciones").addClass("fa-caret-up");
      }else{
        $("#indicadorSoluciones").removeClass("fa-caret-up");
        $("#indicadorSoluciones").addClass("fa-caret-down");
      }
    }
    if(!$(".menuSoluciones").hasClass("ocultar") && !$(".menuSoluciones").hasClass("mostrar")){
      $(".menuSoluciones").addClass("ocultar");
    }
    if($(".menuSoluciones").hasClass("ocultar")){
      $(".menuSoluciones").removeClass("ocultar");
      $(".menuSoluciones").addClass("mostrar");
    }else{
      $(".menuSoluciones").removeClass("mostrar");
      $(".menuSoluciones").addClass("ocultar");
    }
  });*/

  /*$(".menuSoluciones").on("click", function() {
    if($(".menuSoluciones").hasClass("ocultar")){
      $(".menuSoluciones").removeClass("ocultar");
      $(".menuSoluciones").addClass("mostrar");
    }else{
      $(".menuSoluciones").removeClass("mostrar");
      $(".menuSoluciones").addClass("ocultar");
    }
  });*/

	/*$('.img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    	$(".imgInvalid").magnificPopup({
    	delegate: 'img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element;
            }
        }
    });

    	$('#some-button').magnificPopup({
    items: {
      src: 'path-to-image-1.jpg'
    },
    type: 'image' // this is default type
});*/
    	$('.some-button').on("click", function(){
    		item = parseInt(this.getAttribute('id'), 10);
    	})

// Example with multiple objects
/*$('.some-button').magnificPopup({
    items: [
      {
        src: 'images/galeria/6-1.png'
      },
      {
        src: 'images/galeria/4-1.png'
      },
      {
        src: 'images/galeria/3-1.png'
      },
      {
        src: 'images/galeria/2-1.png'
      },
      {
        src: 'images/galeria/8-1.png'
      },
      {
        src: 'images/galeria/9-1.png'
      },
      {
        src: 'images/galeria/11-1.png'
      },
      {
        src: 'images/galeria/10-1.png'
      },
      {
        src: 'images/galeria/12-1.png'
      },
      {
        src: 'images/galeria/13-1.png'
      }

    ],
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] 
    },
    index: 1,    
    type: 'image',
	mainClass: 'mfp-img-mobile',
	callbacks: {
  		open: function(){
  			console.log(item);
  			$('.some-button').magnificPopup('goTo',item);
  		}
  	}

});*/

$(".lis-nfor").on("click", function(){
    if($(this.childNodes[3]).hasClass("ocul")){
      $(this.childNodes[3]).removeClass("ocul");
      $(this.childNodes[3]).addClass("most");
    }else{
      $(this.childNodes[3]).removeClass("most");
      $(this.childNodes[3]).addClass("ocul");
    }

    if($(this.childNodes[1]).hasClass("back-gris-3-mod")){
      $(this.childNodes[1]).removeClass("back-gris-3-mod");
      $(this.childNodes[1]).addClass("back-azul-14");
    }else{
      $(this.childNodes[1]).removeClass("back-azul-14");
      $(this.childNodes[1]).addClass("back-gris-3-mod");
    }

});
$(window).scroll(function() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if (sPage == "nosotros.html") {
      var position = $('#responsabilidad_social').position();
      var position_colaboradores = $('#colaboradores_id').position();
      var scrollLeft = $(window).scrollLeft();
      var scrollTop = $(window).scrollTop();
      
      if(position.top - 80 <  scrollTop && position_colaboradores.top - 300 > scrollTop){
        $('.nostros_link').removeClass('active');
        $('.responsa_link').addClass('active');
      }else{
        $('.nostros_link').addClass('active');
        $('.responsa_link').removeClass('active');
      }
    }
});

    
    
    var blog = new Array(18);
    var activo = 1;
    var calidad = "7",
        consultoria = "",
        economia = "11",
        finanzas = "9",
        impuestos = "14,0",
        infra = "",
        noticias = "17,16,15,13,8,6,5,4,3,2,1",
        tecnologia = "12,10",
        array_cat = new Array(),
        pag_cat = 0; 
    blog[0] = new Array(5);
    blog[0][0] = "images/blog/img-13.jpg";
    blog[0][1] = "Marzo 11, 2020";
    blog[0][2] = "Deducciones autorizadas para personas físicas por régimen fiscal";
    blog[0][3] = "La Ley del Impuesto sobre la Renta (Ley del ISR) indica que las personas físicas que obtuvieron ingresos en un año de calendario están obligadas a pagar su impuesto anual mediante una declaración. Pero los contribuyentes no tienen que pagar el impuesto anual por los";
    blog[0][4] = "impuestos";
    blog[1] = new Array(5);
    blog[1][0] = "images/blog/img-14.jpg";
    blog[1][1] = "Marzo 13, 2020";
    blog[1][2] = "¿Disminuir ISR por coronavirus? Alternativa para impulsar la economía del país";
    blog[1][3] = "Algunos especialistas fiscales han pedido al gobierno diversas medidas para impulsar la actividad económica en el país de cara al coronavirus. Una de ellas es bajar las tasas del impuesto sobre la renta (ISR). De acuerdo con David Escalante, socio de impuestos de";
    blog[1][4] = "noticias";
    blog[2] = new Array(5);
    blog[2][0] = "images/blog/img-15.jpg";
    blog[2][1] = "Marzo 17, 2020";
    blog[2][2] = "¿Qué medidas pueden tomar los centros de trabajo por el coronavirus?";
    blog[2][3] = "La Secretaría de Salud estima que a finales de marzo el coronavirus podría entrar a una fase de transmisión comunitaria; las empresas deben comenzar a tomar medidas. El coronavirus (Covid-19) ya está presente en México con 82 casos confirmados por la Secretaría de Salud. En países como Italia el virus se ha propagado de manera";
    blog[2][4] = "noticias";
    blog[3] = new Array(5);
    blog[3][0] = "images/blog/img-16.jpg";
    blog[3][1] = "Marzo 19, 2020";
    blog[3][2] = "¿Qué pasa con las medidas fiscales necesarias ante el coronavirus?";
    blog[3][3] = "La pandemia del coronavirus está marcando la agenda mundial, tanto en la salud pública, como en el aspecto socio-económico. Los Bancos Centrales han optado por inyectar dinero para mitigar la recesión, por ejemplo, el Banco de México y la Secretaría de Hacienda y Crédito Público anunciaron nueva subasta de coberturas cambiarias por dos mil millones";
    blog[3][4] = "noticias";
    blog[4] = new Array(5);
    blog[4][0] = "images/blog/img-17.jpg";
    blog[4][1] = "Marzo 24, 2020";
    blog[4][2] = "Covid-19 como disruptor para la nueva ola de innovación";
    blog[4][3] = "Las crisis, como las recesiones económicas y las pandemias, cambian la trayectoria de gobiernos, economías y empresas, alterando el curso de la historia. La Peste Negra en la década de 1300 rompió el sistema feudal arraigado en Europa y lo reemplazó con el contrato de trabajo más moderno. Apenas tres siglos después, una profunda recesión";
    blog[4][4] = "noticias";
    blog[5] = new Array(5);
    blog[5][0] = "images/blog/img-18.jpg";
    blog[5][1] = "Marzo 31, 2020";
    blog[5][2] = "Medidas preventivas para empresas ante pandemia por Covid-19";
    blog[5][3] = "El covid-19 está teniendo impacto en las empresas, algo que debe ser tomado en cuenta para implementar medidas preventivas. A nivel internacional se está viviendo una crisis de salud generada por un virus identificado como covid-19. Este virus es de fácil propagación, pero aún se desconoce mucho. Esto llevó a que las autoridades de salud de";
    blog[5][4] = "noticias";
    blog[6] = new Array(5);
    blog[6][0] = "images/blog/img-19.jpg";
    blog[6][1] = "Abril 03, 2020";
    blog[6][2] = "SAT rompe récord de declaraciones de personas físicas en un día";
    blog[6][3] = "Este 30 de abril es el último día para que las personas físicas presenten la declaración anual. Parece que los contribuyentes ya empezaron a presentarla, de acuerdo con el Servicio de Administración Tributaria (SAT). Este 1 de abril, en su cuenta oficial de Twitter, el SAT dio a conocer que rompió el récord de declaraciones en un";
    blog[6][4] = "noticias";
    blog[7] = new Array(5);
    blog[7][0] = "images/blog/img-20.jpg";
    blog[7][1] = "Abril 06, 2020";
    blog[7][2] = "¿Qué significa ser líder en tiempos de crisis?";
    blog[7][3] = "En tiempos de crisis, el carácter y personalidad de un líder debe salir a flote y comunicar mediante soluciones. El director de la Organización Mundial de la Salud (OMS), Tedros Adhanom Ghebreyesus, ha dicho que pandemia “es una palabra que, si se usa incorrectamente, puede causar miedo irrazonable o una aceptación injustificada de que la lucha ha";
    blog[7][4] = "calidad";
    blog[8] = new Array(5);
    blog[8][0] = "images/blog/img-21.jpg";
    blog[8][1] = "Abril 14, 2020";
    blog[8][2] = "La innovación como camino para superar la crisis";
    blog[8][3] = "“La tormenta pasará, la humanidad sobrevivirá, la mayoría de nosotros aún viviremos, pero habitaremos un mundo diferente”, dice Yuval Noah Harari, historiador y escritor, en un ensayo sobre “El mundo después del coronavirus”. Para habitar este mundo diferente, debemos crear un nuevo mindset dentro de las empresas para ver cómo abordaremos el mundo post-coronavirus.  Algunas";
    blog[8][4] = "noticias";
    blog[9] = new Array(5);
    blog[9][0] = "images/blog/img-22.jpg";
    blog[9][1] = "Abril 15, 2020";
    blog[9][2] = "Actualiza tu contraseña del SAT desde tu celular";
    blog[9][3] = "Con el objetivo de contribuir a la salud de la población y seguir con la modernización administrativa, el Servicio de Administración Tributaria (SAT) anunció que pone a disposición la página web SAT-ID, desde la que podrás generar o actualizar tu contraseña a través de tu teléfono móvil o computadora. Lo primero que debes hacer es registrarte ingresando tu";
    blog[9][4] = "finanzas";
    blog[10] = new Array(5);
    blog[10][0] = "images/blog/img-23.jpg";
    blog[10][1] = "Abril 22, 2020";
    blog[10][2] = "Apps bancarias, los aliados en tiempos de crisis";
    blog[10][3] = "2020 abrió la expectativa a muchas sorpresas y hoy, después de pocos meses de haber iniciado este año, llegó el Covid-19 para impulsar nuevos hábitos y dejar al descubierto nuevas necesidades. El “quedarse en casa” aislados de la sociedad e incrementar las medidas de higiene nos ha llevado a buscar alternativas que nos permitan seguir con nuestras actividades diarias. Desde";
    blog[10][4] = "tecnologia";
    blog[11] = new Array(5);
    blog[11][0] = "images/blog/img-24.jpg";
    blog[11][1] = "Abril 28, 2020";
    blog[11][2] = "Nuevo modelo que dará soporte a las PYMES durante contingencia";
    blog[11][3] = "Las empresas requieren muchas cosas para trabajar: insumos, capital, clientes, desde luego empleados y, en la mayoría de los casos, instalaciones. Sin embargo, un factor es fundamental para su sobrevivencia es la liquidez. Los capitanes de las empresas más importantes del país, en colaboración con el Consejo Mexicano de Negocios y el Banco Interamericano de Desarrollo (BID),";
    blog[11][4] = "economia";
    blog[12] = new Array(5);
    blog[12][0] = "images/blog/img-25.jpg";
    blog[12][1] = "Mayo 01, 2020";
    blog[12][2] = "Modificación de pensamiento digital y colaboración abierta, aprendizajes importantes durante la pandemia";
    blog[12][3] = "Sin duda, aquél que no tenga esta renovación pronto, tendrá un panorama complicado.   En el ámbito tecnológico, diversos análisis muestran que las compañías enfocadas en telecomunicaciones son hoy parte fundamental de la cadena de valor para la continuidad de operación en todo el mundo. Así también, las especializadas en dispositivos para acceso a redes;";
    blog[12][4] = "tecnologia";
    blog[13] = new Array(5);
    blog[13][0] = "images/blog/img-26.jpg";
    blog[13][1] = "Mayo 05, 2020";
    blog[13][2] = "Modificación de pensamiento digital y colaboración abierta, aprendizajes importantes durante la pandemia";
    blog[13][3] = "Para 6 de cada 10 directores financieros en México, el trabajo remoto llegó para quedarse, pues seguirá como una práctica en sus empresas aún después de que se reanuden las actividades no esenciales en el país, de acuerdo con una encuesta de la firma PwC. De acuerdo con el estudio CFO Pulse Survey COVID-19 México,";
    blog[13][4] = "noticias";
    blog[14] = new Array(5);
    blog[14][0] = "images/blog/img-27.jpg";
    blog[14][1] = "Mayo 12, 2020";
    blog[14][2] = "Plataformas digitales deben cumplir con pago de IVA";
    blog[14][3] = "El próximo 1 de junio entrará en vigor la la reforma publicada que establece la obligatoriedad de las plataformas digitales de retener y enterar el IVA causado por la importación de servicios digitales. Por ello, el Servicio de Administración Tributaria (SAT) lanzó un exhorto a las plataformas digitales (Netflix, Amazon, etc) residentes en el extranjero sin establecimiento en territorio nacional a";
    blog[14][4] = "impuestos";
    blog[15] = new Array(5);
    blog[15][0] = "images/blog/img-28.jpg";
    blog[15][1] = "Mayo 20, 2020";
    blog[15][2] = "¿Qué hacer si tu certificado de sello digital es cancelado por el SAT?";
    blog[15][3] = "El certificado de sello digital (CSD) es un documento electrónico que expide el Servicio de Administración Tributaria (SAT). La función de los CSD es firmar digitalmente las facturas electrónicas o CFDI. Lo que hacen es sellar estos documentos para que no se pueda manipular la información contenida en ellos. Con esto, ya no pueden falsificarse facturas electrónicas. Además, como";
    blog[15][4] = "noticias";
    blog[16] = new Array(5);
    blog[16][0] = "images/blog/img-29.jpg";
    blog[16][1] = "Junio 04, 2020";
    blog[16][2] = "NOM 030, fundamento legal para las empresas ante emergia sanitaria";
    blog[16][3] = "El gobierno federal ha instruido a todos los centros de trabajo a implementar todo tipo de acciones para mitigar los contagios de COVID-19, como suspender actividades, o implementar medidas de distanciamiento social. Pero, ¿por qué las empresas están obligadas a seguir las indicaciones de la autoridad? Tras la epidemia de la gripe porcina, se agregó";
    blog[16][4] = "noticias";
    blog[17] = new Array(5);
    blog[17][0] = "images/blog/img-30.jpg";
    blog[17][1] = "Junio 22, 2020";
    blog[17][2] = "Tu empresa necesita estar en la nube para operar en la nueva normalidad, estos consejos te ayudarán";
    blog[17][3] = "Tal vez creas que migrar los datos y operaciones de tu empresa a la nube es demasiado complicado, o que tu negocio no necesita de tan sofisticada tecnología "
    blog[17][4] = "noticias";

    var num_publicaciones = blog.length;
    var pag_publicaciones = num_publicaciones % 6;
    var ultima_cat_activa = 0;
    if (pag_publicaciones == 0){
      pag_publicaciones = num_publicaciones / 6;
    }else  {
      pag_publicaciones = Math.trunc(num_publicaciones / 6) + 1;

    }
    
    if(pag_publicaciones > 1 ){
        var pag_html = "<li class='prev'><a href='#' disable>&laquo;</a></li><li class='li-pag li-1 active'><a href='#' class='pag-item' id='1'>1</a></li>";        
        for (var i = 2; i < pag_publicaciones + 1; i++) {
          pag_html = pag_html + "<li class='li-pag li-" + i + "'><a href='#' class='pag-item' id='" + i + "'>" + i + "</a></li>";
        }
        $(".pagination").append(pag_html + "<li class='next'><a href='#'>&raquo;</a></li>");
    }

    $("input[name='filtro-blog']").change(function() {
      $(".blog-1").addClass("ocultar-blog");
      $(".blog-2").addClass("ocultar-blog");
      $(".blog-3").addClass("ocultar-blog");
      $(".blog-4").addClass("ocultar-blog");
      $(".blog-5").addClass("ocultar-blog");
      $(".blog-6").addClass("ocultar-blog");
      array_cat = new Array();
      pag_cat = 0;
      var y = 1;
      var dato = 0;
      $('.prev').addClass("ocultar-blog");
      $('.next').addClass("ocultar-blog");
      $('.div-pag').addClass("ocultar-blog");
      for (var i = 1; i <= pag_publicaciones; i++) {
        $('.li-' + i).addClass("ocultar-blog");
      }
      $('.li-pag').removeClass("active");
      $(".li-1").addClass("active");

      $(".list-categoria .list-categoria-" + ultima_cat_activa).removeClass("active");

      if ($('#todo').is(':checked')) {
        $(".blog-1").removeClass("ocultar-blog");
        $(".blog-2").removeClass("ocultar-blog");
        $(".blog-3").removeClass("ocultar-blog");
        $(".blog-4").removeClass("ocultar-blog");
        $(".blog-5").removeClass("ocultar-blog");
        $(".blog-6").removeClass("ocultar-blog");
          if(pag_publicaciones > 1 ){
            var x = 1;
            for (var i = blog.length - 1; i >= blog.length - 6; i--) {
              $(".blog-"+ x +" .course-img-1 img").attr("src", blog[i][0]);
              $(".blog-"+ x +" .course-img-1 .fecha-b").text(blog[i][1]);
              $(".blog-"+ x +" .titulo-b").text(blog[i][2]);
              $(".blog-"+ x +" .descripcion-b").text(blog[i][3].slice(0, blog[i][3].indexOf(" ",200))+"...");
              $(".blog-"+ x ).removeClass("calidad consultoria economia finanzas impuestos infra noticias tecnologia");
              $(".blog-"+ x ).addClass(blog[i][4]);
              $(".blog-"+ x +" .link-blog-1").attr("href", i + ".html");
              $(".blog-"+ x +" .link-blog-pos").attr("href", i + ".html");
              x = x + 1;
            }
            $('.prev').removeClass("ocultar-blog");
            $('.next').removeClass("ocultar-blog");
            $('.div-pag').removeClass("ocultar-blog");
            for (var i = 1; i <= pag_publicaciones; i++) {
              $('.li-' + i).removeClass("ocultar-blog");
            }
            activo = 1;
          }
          ultima_cat_activa = 0;
      }

      if ($('#calidad').is(':checked')) {
        if(calidad != "") {
          array_cat = calidad.split(',');
        }
        ultima_cat_activa = 1;
       }

      if ($('#consultoria').is(':checked')) {
        if(consultoria != ""){
          array_cat = consultoria.split(',');
        }
        ultima_cat_activa = 2;
      }

      if ($('#economia').is(':checked')) {
        if(economia != ""){
          array_cat = economia.split(',');
        }
        ultima_cat_activa = 3;
      }

      if ($('#finanzas').is(':checked')) {
        if(finanzas != "") {
          array_cat = finanzas.split(',');
        }
        ultima_cat_activa = 4;
      }

      if ($('#impuestos').is(':checked')) {
        if(impuestos != ""){
          array_cat = impuestos.split(',');
        }
        
        ultima_cat_activa = 5;
      }

      if ($('#infra').is(':checked')) {
        if(infra != "") {
          array_cat = infra.split(',');
        }
        ultima_cat_activa = 6;
      }

      if ($('#tecnologia').is(':checked')) {
        if(tecnologia != ""){
          array_cat = tecnologia.split(',');
        }
        ultima_cat_activa = 8;
      }

      if ($('#noticias').is(':checked')) {
        if(noticias != ""){
          array_cat = noticias.split(',');
        }
        ultima_cat_activa = 7;
      }

      console.log(ultima_cat_activa);

      $(".list-categoria .list-categoria-" + ultima_cat_activa).addClass("active");
      
      if (array_cat.length > 0){
        dato = array_cat.length;
        var num_cat = array_cat.length;
        pag_cat = num_cat % 6;
        if (pag_cat == 0){
          pag_cat = num_cat / 6;
        }else  {
          pag_cat = Math.trunc(num_cat / 6) + 1;
        }
        if(pag_cat > 1 ) {
          dato = 6;
        }
        for(var i = 0 ; i < dato; i++) {
          $(".blog-"+ y +" .course-img-1 img").attr("src", blog[array_cat[i]][0]);
          $(".blog-"+ y +" .course-img-1 .fecha-b").text(blog[array_cat[i]][1]);
          $(".blog-"+ y +" .titulo-b").text(blog[array_cat[i]][2] + " " + array_cat[i]);
          $(".blog-"+ y +" .descripcion-b").text(blog[array_cat[i]][3].slice(0, blog[array_cat[i]][3].indexOf(" ",200))+"...");
          $(".blog-"+ y ).removeClass("calidad consultoria economia finanzas impuestos infra noticias tecnologia");
          $(".blog-"+ y ).addClass(blog[array_cat[i]][4]);
          $(".blog-"+ y).removeClass("ocultar-blog");
          $(".blog-"+ y +" .link-blog-1").attr("href",  array_cat[i] + ".html");
          $(".blog-"+ y +" .link-blog-pos").attr("href", array_cat[i] + ".html");
          y = y + 1;
        }
      }
      if(pag_cat > 1) {
        $('.prev').removeClass("ocultar-blog");
        $('.next').removeClass("ocultar-blog");
        $('.div-pag').removeClass("ocultar-blog");
        for (var i = 1; i <= pag_cat; i++) {
          $('.li-' + i).removeClass("ocultar-blog");
        }
        activo = 1;
      }
      
      
    }); 

    var x = 1;
    for (var i = blog.length - 1; i >= blog.length - 6; i--) {
      $(".blog-"+ x +" .course-img-1 img").attr("src", blog[i][0]);
      $(".blog-"+ x +" .course-img-1 .fecha-b").text(blog[i][1]);
      $(".blog-"+ x +" .titulo-b").text(blog[i][2]);
      $(".blog-"+ x +" .descripcion-b").text(blog[i][3].slice(0, blog[i][3].indexOf(" ",200))+"...");
      $(".blog-"+ x ).removeClass("calidad consultoria economia finanzas impuestos infra noticias tecnologia");
      $(".blog-"+ x ).addClass(blog[i][4]);
      $(".blog-"+ x +" .link-blog-1").attr("href", i + ".html");
      $(".blog-"+ x +" .link-blog-pos").attr("href", i + ".html");
      x = x + 1;
    }

    for (var i = 1; i < 10; i++) {
      $(".li-post-"+ i +" .course-img-1 img").attr("src", blog[blog.length - i][0]);
      $(".li-post-"+ i +" .titulo-post").text(blog[blog.length - i][2].slice(0, blog[blog.length - i][2].indexOf(" ",60))+"...");
      $(".li-post-"+ i +" .fecha-post").text(blog[blog.length - i][1] + " ");
      var categoria_text = (blog[blog.length - i][4])[0].toUpperCase()+(blog[blog.length - i][4]).slice(1);
      if (categoria_text[categoria_text.length - 2] == "i"){
        categoria_text = categoria_text.slice(0, categoria_text.length - 2) + "í" + categoria_text[categoria_text.length - 1];
      }
      $(".li-post-"+ i +" .cat-post").text(categoria_text);
      $(".li-post-"+ i +" .link-post").attr("href", (blog.length - i) + ".html");
    }

    $(".pag-item").on("click", function() {
      $('.preloader').addClass("pre");
      x = 1;
      var id_item = $(this).attr('id');
      activo = (id_item * 1);
      $(".blog-1").addClass("ocultar-blog");
      $(".blog-2").addClass("ocultar-blog");
      $(".blog-3").addClass("ocultar-blog");
      $(".blog-4").addClass("ocultar-blog");
      $(".blog-5").addClass("ocultar-blog");
      $(".blog-6").addClass("ocultar-blog");

      $('.li-pag').removeClass("active");
      $(".li-" + id_item).addClass("active");
      
      if(array_cat.length > 0 && pag_cat > 0){
        var final = (id_item * 6);
        var inicial = (id_item - 1) * 6;
        if (final > array_cat.length){
          final = array_cat.length;
        }

        for (var i = inicial; i < final; i++) {
          
          $(".blog-"+ x +" .course-img-1 img").attr("src", blog[array_cat[i]][0]);
          $(".blog-"+ x +" .course-img-1 .fecha-b").text(blog[array_cat[i]][1]);
          $(".blog-"+ x +" .titulo-b").text(blog[array_cat[i]][2] + " " + array_cat[i]);
          $(".blog-"+ x +" .descripcion-b").text(blog[array_cat[i]][3].slice(0, blog[array_cat[i]][3].indexOf(" ",200))+"...");
          $(".blog-"+ x ).removeClass("calidad consultoria economia finanzas impuestos infra noticias tecnologia");
          $(".blog-"+ x ).addClass(blog[array_cat[i]][4]);
          $(".blog-"+ x).removeClass("ocultar-blog");
          $(".blog-"+ x +" .link-blog-1").attr("href", array_cat[i] + ".html");
          $(".blog-"+ x +" .link-blog-pos").attr("href", array_cat[i] + ".html");
          x = x + 1;
        }  
      }else {
        var final = blog.length - (6 * id_item);
        var inicial = blog.length - ((6 * id_item) - 5);
        if (final < 0 ){
          final = 0;
        }
        for (var i = inicial; i >= final; i--) {
          
          $(".blog-"+ x +" .course-img-1 img").attr("src", blog[i][0]);
          $(".blog-"+ x +" .course-img-1 .fecha-b").text(blog[i][1]);
          $(".blog-"+ x +" .titulo-b").text(blog[i][2]);
          $(".blog-"+ x +" .descripcion-b").text(blog[i][3].slice(0, blog[i][3].indexOf(" ",200))+"...");
          $(".blog-"+ x ).removeClass("calidad consultoria economia finanzas impuestos infra noticias tecnologia");
          $(".blog-"+ x ).addClass(blog[i][4]);
          $(".blog-"+ x).removeClass("ocultar-blog");
          $(".blog-"+ x +" .link-blog-1").attr("href", i + ".html");
          $(".blog-"+ x +" .link-blog-pos").attr("href", i + ".html");
          x = x + 1;
        }
      }
      
      setTimeout(function(){
        $('.preloader').removeClass('pre');
      }, 5000); 
      
    });

    $(".prev").on("click", function(){
      if (activo > 1){
        $('#' + (activo - 1)).click();
      }
    });

    $(".next").on("click", function(){
      if(array_cat.length > 0 && pag_cat > 0){
        if (activo < pag_cat){
          $('#' + (activo + 1)).click();
        }
      }else{
        if (activo < (pag_publicaciones + 1)){
          $('#' + (activo + 1)).click();
        }
      }
      
    });

    $(".border-bottom-1").on("click", function() {
      $(this.childNodes[1]).prop("checked", true);
      $("input[name='filtro-blog']").change();
    });

    

    $("input[name='telefono']").keyup(function() {
        $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d{4})+$/, "($1)-$2-$3"));
    });

    /*var img_large = $(".img-large-collage img");
      if(img_large.length){
        setTimeout(function(){
          
        }, 300);
        /*$(".fila-collage").css({
          "height": img_large.height() ,
          "max-height": img_large.height()});*/

      //}

    /*$(window).scroll(function(){
      $(window).resize();
    });*/

    img_large = $(".img-large-collage-smm");
      if(img_large.length){
        /*$(".fila-collage").css({
          "height": img_large.height() ,
          "max-height": img_large.height()});*/

      }

    $('.btn-ocultar-fb').on('click', function() { 
      console.log();
      if($(".btn-ocultar-fb span").hasClass("fa-angle-left")){
        $('.fb_dialog').removeClass("mostrarTranslate");
        $('.fb_dialog').addClass('horizTranslate');
        $(".btn-ocultar-fb span").removeClass("fa-angle-left");
        $(".btn-ocultar-fb span").addClass("fa-angle-right");
        var tamanio_iframe = $(".fb-customerchat span iframe").width();
        if(tamanio_iframe == undefined){
        }else{
          $(".fb-customerchat span iframe").css("left", (tamanio_iframe + 20) * -1);
        }

      }else {
        $('.fb_dialog').removeClass("horizTranslate");
        $('.fb_dialog').addClass('mostrarTranslate');
        $(".btn-ocultar-fb span").removeClass("fa-angle-right");
        $(".btn-ocultar-fb span").addClass("fa-angle-left");
        var tamanio_iframe = $(".fb-customerchat span iframe").width();
        if(tamanio_iframe == undefined){
        }else{
          $(".fb-customerchat span iframe").css("left", "9pt");
        }
      }
      
    });


});



function enviardatos(){
  location.href ='career.html?s=si';
}

$(document).on("click", ".pg-item", function(){
        //$(this).next().toggle();
        alert("prueba");
    });