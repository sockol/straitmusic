$(document).ready(function() {

    var url = location.href;
    url = url.split("/"); 

    if(url[3]==""){
    var isHomePage = window.location.pathname == "" 
                    || window.location.pathname == "/"
                    || window.location.pathname == "default.aspx"
                    || window.location.pathname == "/default.aspx";
                     
    if(isHomePage){
        htmlString =  '<main class="wrap home" id="home">  ';  
        htmlString += '<div id="myCarousel" class="carousel slide slider" data-ride="carousel">';  
//        htmlString +=     '<ol class="carousel-indicators">'; 
//        htmlString +=     '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';  
//        htmlString +=     '<li data-target="#myCarousel" data-slide-to="1"></li>';  
//        htmlString +=     '</ol>';  
        htmlString +=     '<div class="carousel-inner" id="carousel-inner" role="listbox">';  
        htmlString +=     '</div>';  
//make these depend on the variable count 
        htmlString += '<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">';
        htmlString += '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
        htmlString += '<span class="sr-only">Previous</span>';
        htmlString += '</a>';

        htmlString += '<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">';
        htmlString += '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
        htmlString += '<span class="sr-only">Next</span>';
        htmlString += '</a>';
 
        htmlString += "</div>";

        // htmlString += "<h2>Some title</h2>";
        // htmlString += "<h3>Subtitle that we will decide on later</h3>";

        htmlString += "<div id='ads-big' class='ads-big'>";
        htmlString += "</div>";

        htmlString += "<h2>Our news</h2>";
        htmlString += "<h3>Subtitle that we will decide on later</h3>";

        htmlString += "<div id='news' class='news'>";
        htmlString += "</div>";

        // htmlString += "<h2>Some title</h2>";
        // htmlString += "<h3>Subtitle that we will decide on later</h3>";

        htmlString += "<div id='ads-small' class='ads-small'>";
        htmlString += "</div>";

        htmlString += '<main> ';  
 
        /*
        Swipe slider
        */
        function countObject(vars){

            return Object.keys(vars).length;
        }
        var images = new Array();
        $("#slider a").each(function(){
            images.push($(this).find("img").attr("src"));
        }); 
        $("#content").html(htmlString);  
    }
     
    var slides = { 
        slide1:{
            img:"welcome-to-strait-music.jpg",
            title:"New online store 1",
            subtitle:"same trusted service and quality",
            text:"We are consistently ranked in the top 10% of all music retailers nationwide. \n We are very proud of our history and we still run on the same principles \n that Dan Strait set forward in the early 1960’s",
            box:"see inventory",
            link:""
        },
        slide2:{
            img:"rent-band-and-orchestra-images-now.jpg",
            title:"New online store 1",
            subtitle:"same trusted service and quality",
            text:"We are consistently ranked in the top 10% of all music retailers nationwide. \n We are very proud of our history and we still run on the same principles \n that Dan Strait set forward in the early 1960’s",
            box:"see inventory",
            link:"t-band-and-orchestra-instrument-rentals.aspx",
        }
    };

    var news = {
        news1:{
            img:"news-sample.jpg",
            href:"welcome-to-strait-music.html",
            title:"New online store ",
            alt:"New online store ",
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
            date:"Sept 14",
        }, 
        news2:{
            img:"news-sample.jpg",
            href:"/frontpage/welcome-to-strait-music.html",
            title:"New online store ",
            alt:"New online store ",
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
            date:"Sept 14",
        }, 
        news3:{
            img:"news-sample.jpg",
            href:"/frontpage/welcome-to-strait-music.html",
            title:"New online store ",
            alt:"New online store ",
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
            date:"Sept 14",
        }, 
        news4:{
            img:"news-sample.jpg",
            href:"/frontpage/welcome-to-strait-music.html",
            title:"New online store ",
            alt:"New online store ",
            text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
            date:"Sept 14",
        }, 
    };

    var adsBig = {
        adsBig1:{
            embed: '<iframe width="854" height="480" src="https://www.youtube.com/embed/c_fSrKYeDb0" frameborder="0" allowfullscreen></iframe>',
            img:"",
            href:"/frontpage/welcome-to-strait-music.html", 
            alt:"New online store ",
        }, 
        adsBig2:{
            embed:'',
            img:"instagram.jpg",
            href:"/frontpage/welcome-to-strait-music.html", 
            alt:"New online store ",
        },  
    };

    var adsSmall = {
        // adsSmall1:{
        //     img:"ad.jpg",
        //     href:"/frontpage/welcome-to-strait-music.html", 
        //     alt:"New online store ",
        // }, 
        // adsSmall2:{
        //     img:"ad.jpg",
        //     href:"/frontpage/welcome-to-strait-music.html", 
        //     alt:"New online store ",
        // },  
        // adsSmall3:{
        //     img:"ad.jpg",
        //     href:"/frontpage/welcome-to-strait-music.html", 
        //     alt:"New online store ",
        // },  
        // adsSmall4:{
        //     img:"ad.jpg",
        //     href:"/frontpage/welcome-to-strait-music.html", 
        //     alt:"New online store ",
        // },  
    };

    var htmlString = ""; 
    var counter = 1;  
    var index = 1;  
    for (var prop in slides) {  

        var img = slides[prop].img;
        var title = slides[prop].title;
        var subtitle = slides[prop].subtitle;
        var text = slides[prop].text;
        var box = slides[prop].box;
        var link = slides[prop].link;
 
        var active = "active";
        if(index!=1)
            active = "";

        var temp = "";
        if(link != "")
            temp = 'href="'+link+'"';

        htmlString += '<a class="item '+active+'" '+temp+'>';   
        htmlString +=     '<img src="/App_Templates/Skin_1/frontpage/slides/'+img+'" alt="'+title+'">';   
        htmlString +=     "<div class='text-wrap'>";  
        htmlString +=             "<div class='title'>"+title+"</div>";  
        htmlString +=             "<div class='subtitle'>"+subtitle+"</div>";
        htmlString +=             "<div class='text'>"+text+"</div>";
        htmlString +=             "<div class='label'>"+box+"</div>";
        htmlString +=     "</div>";    
        htmlString += '</a>';   

        index++;
    } 
 
    $('#myCarousel #carousel-inner').append(htmlString); 
    

    htmlString = "";  
    counter = 1;
    for (var prop in news) {  

        var img = news[prop].img;
        var href = news[prop].href;
        var alt = news[prop].alt;
        var title = news[prop].title; 
        var text = news[prop].text;
        var date = news[prop].date;
        var styles = "";
        if(counter==countObject(news))
            styles = "margin-right:0;";
        

        htmlString += "<div class='box' style='"+styles+"'>";  
        htmlString +=     "<a href='"+href+"'>";  
        htmlString +=         "<img src='/App_Templates/Skin_1/frontpage/news/"+img+"' alt='"+alt+"'>";  
        htmlString +=         "<div class='text-wrap'>";  
        htmlString +=             "<div class='label'>News</div>";
        htmlString +=             "<h4>"+title+"</h4>";  
        htmlString +=             "<p>"+text+"</p>"; 
        htmlString +=             "<span>"+date+"</span>"; 
        htmlString +=         "</div>";
        htmlString +=     "</a>";
        htmlString += "</div>";
        //htmlString += "<div class='clear-4th'></div>";
    
        counter++;
    }  
    htmlString += "<div class='clear'></div>";
    if(isHomePage)
        $('#home #news').append(htmlString); 



    htmlString = "";  
    counter = 1;
    for (var prop in adsBig) {  

        var img = adsBig[prop].img;
        var href = adsBig[prop].href;
        var alt = adsBig[prop].alt;
        var title = adsBig[prop].title; 
        var text = adsBig[prop].text;
        var embed = adsBig[prop].embed;
        var styles = "";
        if(counter==countObject(adsBig))
            styles = "margin-right:0;";
        

        htmlString += "<div style='"+styles+"'>";  
        htmlString +=     '<div  class="cap embed-responsive embed-responsive-16by9"> ';
        if(embed==""){
            htmlString +=     "<a href='"+href+"'>";  
            htmlString +=         "<img src='/App_Templates/Skin_1/frontpage/banners/"+img+"' alt='"+alt+"'>";  
            htmlString +=     "</a>";
        }else{
            htmlString +=     embed; 
        }
        htmlString +=     '</div>';
        htmlString += "</div>"; 
    
        counter++;
    }  
    htmlString += "<div class='clear'></div>";
    if(isHomePage)
        $('#home #ads-big').append(htmlString); 
 


    htmlString = "";  
    counter = 1;
    for (var prop in adsSmall) {  

        var img = adsSmall[prop].img;
        var href = adsSmall[prop].href;
        var alt = adsSmall[prop].alt;
        var title = adsSmall[prop].title; 
        var text = adsSmall[prop].text;
        var styles = "";
        if(counter==countObject(adsSmall))
            styles = "margin-right:0;";

        htmlString += "<div style='"+styles+"'>";  
        htmlString +=     "<a href='"+href+"'>";  
        htmlString +=         "<img src='/App_Templates/Skin_1/frontpage/banners/"+img+"' alt='"+alt+"'>";  
        htmlString +=     "</a>";
        htmlString += "</div>"; 
    
        counter++;
    }  
    htmlString += "<div class='clear'></div>"; 
    if(isHomePage)
        $('#home #ads-small').append(htmlString); 

    }
});