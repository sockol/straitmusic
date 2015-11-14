$(document).ready(function() {
    

    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
            return true; 
       return false;
    }
    if(msieversion() && $(".search-text").length){
        $(".search-text").css({'background-position':'107% -185px'});
        $(".search-text").css({'line-height':'20px'});
    }
    /*
    Category page filtering
    */
    if(typeof $.session.get("filter-link") === "undefined"){
        
        $.session.set("filter-link", "0");
    }

    $("#select-wrap-box a").each(function(){
        $obj = $(this);
        $obj.click(function(){
            var filter_link = location.href;
              
            $.session.set("filter-link", filter_link);
        });
    });
     
    if($.session.get("filter-link") != "0"){ 
        $("#unset-filter").show(); 

    }else{ 
        $("#unset-filter").hide(); 
    }

    $("#unset-filter").click(function(e){
         
        e.preventDefault();
        var temp = $.session.get("filter-link");
        $.session.set("filter-link", "0");
        location.href = temp;
    });
    /*
    Search placeholder
    */
    $("header .search-text,#navigation .search-text").attr("value","");  
    $("header .search-text,#navigation .search-text").attr("placeholder","Search our store");  

    /*
    Vars for navigation
    */
    var widthIPad = 1024;
    var widthMidSize = 1000;
    var widthNavOffset = 860;
    var widthIPhone = 480;

    var width = Math.max( $(window).width(), window.innerWidth); 
    var height = $(window).height(); 

    var heightHeader = $("header").height();
    var widthNavigation = $("#navigation").width(); 
    var heightNavigation = height-heightHeader;
    var timeout = 500;

    //check if we already shiften navigation out or in
    //false means width beyond iPad, menu shows up
    var navigationNotVisible = width < widthIPad;
    var navigationShiftedLeft = false;
    var navigationShiftedRight = false;


    /*
    Collections
    */
    $("#select-wrap-box a").click(function(){ 
        location.href = $(this).attr('href');
    });
    $("#select-wrap-box").toggle(function(){ 
        $(this).css({
            height:'auto'
        });
        $(this).find("li:first-child").hide();
    },function(){ 
        $(this).css({
            height:32
        });
        $(this).find("li:first-child").show(); 
    });


    //$("#nav-button").pep({
      //  axis: "x" 
    //});

    /*
    Masonry for footer
    */
    var masonryContainer = $('#masonry-fix');

    function footerMasonryStart(masonryContainer){
 
        masonryContainer.masonry({ 
          itemSelector: '.box', 
          gutter : 40,
        }); 
    }footerMasonryStart(masonryContainer);

    function footerMasonryStop(masonryContainer){

        masonryContainer.masonry( 'destroy' ); 
    }footerMasonryStart(masonryContainer);

    function footerMasonry(masonryContainer){

        if(width < widthIPhone)
            footerMasonryStop(masonryContainer); 
        else
            footerMasonryStart(masonryContainer);
    }footerMasonry(masonryContainer);



    /*
    Stikcy navigation stops at footer and Department pages
    */
    function navigationStikcy(){
        
        var offsetByWidth = 0;
         
        if(width < widthIPad)
            offsetByWidth = 60;
        $("#navigation").containedStickyScroll({
            duration: 0,
            unstick: true, 
            closeChar: '',
            stickElementOffset : 120 - offsetByWidth, 
        }); 
        if($("#brands").length){ 
            $("#brands").containedStickyScroll({
                duration: 0,
                unstick: true,
                closeTop : 200, 
                closeChar: '',  
                stickElementOffset : 120 - offsetByWidth,
            });
        }

    }navigationStikcy();
    /*
    Fix up navigation newsletter and account links
    */
    function navigationHideLinks(){


        var container = $("#form1 #MainMenuID > tbody");
        var children = container.children().length;
         
        for(var i=0;i<5;i++)
            if(!navigationNotVisible)
                container.find("tr:nth-child("+(children-i)+")").hide(); 
            else
                container.find("tr:nth-child("+(children-i)+")").show();  
        
 

        $("nav .nav-wrapper").not(".always-show,.direct-link").each(function(){
            
            var topOffset = -300;
      
            $(this).find("h6").toggle(function(){ 
   
                $(this).parent().find(".entity-menu").slideDown(); 

            },function(){ 
                
                $(this).parent().find(".entity-menu").slideUp(); 
            });
        });
        


    }navigationHideLinks();
    /*
    Buttons hover effects for nagivation
    */
    $('#navigation-button').hover(function(){
        $('#navigation-button > div').addClass("navigation-button-active");
    },function(){
        $('#navigation-button > div').removeClass("navigation-button-active");
    });


    /*
    Set navigation height to 100% for scrolling without a scrollbar
    */
    function navigationHeight(){
        $("#navigation-wrap").css({
            "height":heightNavigation+90
        });  
    }navigationHeight();

 
    /*
    Shift navigation either out or into window depending on window width
    */
    function navigationShift(){

        width = Math.max( $(window).width(), window.innerWidth); 
        height = $(window).height(); 
        heightHeader = $("header").height();
        heightNavigation = height-heightHeader;
        navigationNotVisible = width < widthIPad;

        //show navigation 
        if(navigationNotVisible && navigationShiftedLeft==false){
   
            shiftLeft();
            navigationShiftedLeft = true;
            navigationShiftedRight = false;

        //hide navigation    
        }else if(!navigationNotVisible && navigationShiftedRight==false){
  
            shiftRight(); 
            navigationShiftedRight = true;
            navigationShiftedLeft = false;
        }
        
        
        navigationHeight(); 

    }navigationShift();


    /*
    Resize content when Navigation is open
    */
    function widthNavigationOffset(){

        var isVisible = !($("nav").position().left == 0);

        if(width < widthNavOffset && isVisible){

            $("main.product > div").addClass("width-nav-offset"); 
            $("main.product > div.content").addClass("width-nav-offset-content"); 
 
        }else{

            $("main.product > div").removeClass("width-nav-offset"); 
            $("main.product > div.content").removeClass("width-nav-offset-content"); 
        }
    }widthNavigationOffset();
    /*
    ClearQueue
    */
    function clearAllEvents(){

        $("*").clearQueue();
    }clearAllEvents();

    /*
    Check if need to shift on resize
    */
    $(window).resize(function(){
 
        navigationShift(); 
        footerMasonry(masonryContainer);
        navigationStikcy();

        var width = Math.max( $(window).width(), window.innerWidth); 
        var height = $(window).height(); 

        var heightHeader = $("header").height();
        var widthNavigation = $("#navigation").width(); 
        var heightNavigation = height-heightHeader;
 
    });
 

    /*
    Shift navigation right
    */
    function shiftRight(){ 

        clearAllEvents();
  
        if(navigationNotVisible){
 
            if(width < widthIPhone){ 
                $("html").css({
                    "overflow-y":"hidden"
                });  
                $("body").css({
                    "overflow":"hidden"
                }); 
            } 
            $("#logo").animate({
                left:widthNavigation,
            },timeout,function(){

            }); 
        } 
 
        if(width < widthIPad){
            $("#search").animate({
                "margin-left":230+widthNavigation
            },timeout); 
        }else if(width < widthMidSize){
            $("#search").animate({
                "margin-left":80+widthNavigation
            },timeout);  
        }else{
            $("#search").animate({
                "margin-left":280
            },timeout);  
        } 



        $("#navigation").css({"display":"block"});
        //$("#content").css({"left":-230});
        $("#nav-button,#breadcrumbs").animate({
            left:widthNavigation,
        },timeout);
        //$("#content").animate({
        //   left:0,
        //},timeout);

        if(navigationNotVisible){ 
            $("#logo-slider").animate({
                left:0,
            },timeout);
            $("#logo-main").animate({
                "left":widthNavigation+20,
            },timeout);
        } 
        $("#navigation").addClass("navigation-shadow");
 
        $("#navigation").animate({
            left:0, 
        },timeout);
  
        if(width < widthIPhone){
            $('<div id="overlay" class="overlay"></div>').prependTo('body').attr('id', 'overlay');
            navigationClose();
        }

        widthNavigationOffset();
    }
    /*
    Shift navigation left
    */
    function shiftLeft(){

        clearAllEvents();

        $("#nav-button,#breadcrumbs").animate({ 
            left:0  
        },timeout);

        if(width < widthIPad){ 
            $("#search").animate({
                "margin-left":230
            },timeout); 
        }else if(width < widthMidSize){
            $("#search").animate({
                "margin-left":230
            },timeout); 
        }
        //$("#content").animate({ 
        //    left:-230  
        //},timeout);

        $("#logo-slider").animate({
            left:-widthNavigation-10,
        },timeout);
        $("#logo").animate({
            "margin-left":60,
        },timeout);
 
        $("#logo-main").animate({
            left:0,
        },timeout);

        $("#navigation").animate({
            left:-widthNavigation-10, 
        },timeout,function(){

            if(navigationNotVisible){

                if(width < widthIPhone){ 
                    $("html").css({
                        "overflow-y":"initial"
                    });  
                    $("body").css({
                        "overflow":"initial"
                    });
                } 
            }   
            $("#navigation").removeClass("navigation-shadow");
            $("#navigation").css({"display":"none"});
            //$("#content").css({"left":230});
        });

        if(width < widthIPhone)
            $('#overlay').remove(); 
  
    }

    /*
    Navigation shifting button
    */
    $('#navigation-button').toggle(function(){
         
        shiftRight();
        widthNavigationOffset();

    },function(){

        shiftLeft();
        widthNavigationOffset();
    });


    

    /*
    Close navigation on click on anywhere but navigation in mobile size
    */
    function navigationClose(){

        $("#overlay").click(function(){ 
           shiftLeft(); 
        });
        widthNavigationOffset();
    }
             
      
 
 

    
 

    /*
    Image zoom on single product page
    
    //initiate the plugin and pass the id of the div containing gallery images 
    $(".image > div > div > img").elevateZoom({
        //gallery:'gallery_01', 
        cursor: 'pointer', 
        galleryActiveClass: 'active', 
        imageCrossfade: true, 
        scrollZoom : true,
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
    }); 
    //pass the images to Fancybox 
    $(".image > div > div > img").bind("click", function(e) { 
        var ez = $('.image > div > div > img').data('elevateZoom');    
        $.fancybox(ez.getGalleryList()); 
        return false; 
    });  
    */



    $('.sp-wrap').smoothproducts();


    /*
    Fixes for single product page
    */
    $(".variant-info-wrap").after($("#product-cart"));

    $("body #product-style-fix").each(function(){

        $(this).text(function () {

            if($(this).length > 0 && $(this).text() != ""){

                var convertedHTML = $(this).html().split(":");
                convertedHTML = "<big>"+convertedHTML[0]+": </big>"+convertedHTML[1];

                $(this).html(convertedHTML);//fix variants
            }

        });
    });

    $(".description").text(function () {
        var convertedHTML = $(this).html().replace("Features:", "<big>Features:</big>"); 

        $(this).html(convertedHTML);//fix features

        //fix lists
        /*
        convertedHTML = $(this).find("li"); 
        console.log(convertedHTML); 

        convertedHTML.prepend("<ul>"); 
        convertedHTML.append("</ul>"); 

        console.log(convertedHTML);

        var htmlList = "";
        $.each(convertedHTML, function( index, value ) {
        console.log(value);
          htmlList = htmlList+value;
        });


        console.log(htmlList);

        convertedHTML = convertedHTML[0].outerHTML;

        $(this).html(convertedHTML);
        */
    });






 
});