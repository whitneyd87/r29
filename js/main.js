var clicked = 0;

$(document).ready(function(){    

    var date = new Date();

    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY']

    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    var intervalBubble = null;

    var intervalScroll = null;

    var bullets = $('.bullet');

    
    var originalVidDots = $('.originals').find(bullets); 

    var beautyPagDots = $('.beauty').find(bullets);

    var newsPagDots = $('.news').find(bullets);

    var fashionPagDots = $('.fashion').find(bullets);

    var lifestylePagDots = $('.lifestyle').find(bullets);

    var workmoneyPagDots = $('.workmoney').find(bullets);


    var collapsibles = document.querySelectorAll('.collapsible');


// DATE

    $('#date').html( days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ',' + ' ' + date.getFullYear() );


// SEARCH BOX   

    $('#search').on('click', function(e) {

        e.preventDefault();

        if(clicked === 0) {

            $('#search-input').show();
        
            $('#search-input').animate( {

                width: '70%'

            }, 'slow');    

            clicked = 1;

        } else if (clicked === 1) {

            $('#search-input').animate( {
                
                width: '0',

            }, 'slow');

            $('#search-input').hide(0);

            clicked = 0;
        }
           
    });


// INITIAL NAVIGATION ANIMATION

    $('.main-li').each( function ( i, e ) {

        $(e).delay(i * 500).queue( function () {

            $(this).addClass('slide');

        });

    });


// SCROLLING HEADER ANIMATION

    $(window).scroll(function(){
     
        var winY = $(window).scrollTop();

        if (winY > 1100) {
            
            $('#header').addClass('headerScroll');
            $('#date').css('display', 'none');
            $('#logo').removeClass('logoGrow');
            $('#logo').addClass('logoShrink');
            $('#search-box').removeClass('searchTop');
            $('#search-box').addClass('searchScroll');
            $('header nav').css('width', '100%');
            $('header nav ul').addClass('navScroll');
            $('.main-li').css('margin-bottom', '0px');

        } else if (winY < 1100) {

            $('#header').removeClass('headerScroll');
            $('#date').css('display', 'block');
            $('#logo').removeClass('logoShrink');
            $('#logo').addClass('logoGrow');
            $('#search-box').removeClass('searchScroll');
            $('#search-box').addClass('searchTop');
            $('header nav').css ('width', '30%');
            $('header nav ul').removeClass('navScroll');
            $('.main-li').css('margin-bottom', '10px');
        }

    });


// REDIRECTION OF PAGE FOR INPUT RANGE ('SLIDER') BUTTONS

    $('#styleInput').on('change', function() {
        
        var styleValue = $('#styleInput').val();
    
        if(styleValue < 50) {
           
            $('#styleInput').val('1');
    
        } else if (styleValue > 50) {
          
            $('#styleInput').val('1');
          
            window.open('https://www.refinery29.com/en-us/2019/05/231982/homeless-women-hair-beauty-services-los-angeles' , '_blank');
        
        } 

    });    

    $('#pinterestInput').on('change', function() {
        
        var pinValue = $('#pinterestInput').val();
    
        if (pinValue > 50 || pinValue === 1) {
           
            $('#pinterestInput').val('100');
    
        } else if (pinValue < 50) {

            $('#pinterestInput').val('100');
          
            window.open('https://www.pinterest.com/refinery29/?auto_follow=true' , '_blank');
        
        }
        
    });    

    $('#podcastInput').on('change', function() {
        
        var podValue = $('#podcastInput').val();
    
        if (podValue < 50 || podValue === 100) {
           
            $('#podcastInput').val('1');
    
        } else if (podValue > 50) {
           
            $('#podcastInput').val('1');
           
            window.open('https://podcasts.apple.com/us/podcast/unstyled/id1171140955?mt=2', '_blank');
       
        }
        
    });


    $('#discover-btn').on('change', function() {
        
        var discoverValue = $('#discover-btn').val();
    
        if (discoverValue < 50 || discoverValue === 100) {
           
            $('#discover-btn').val('1');
    
        } else if (discoverValue > 50) {
          
            $('#discover-btn').val('1');
          
            window.open('https://www.refinery29.com/en-us', '_blank');
        }

    });    

    $('#watch-btn').on('change', function() {
        
        var watchValue = $('#watch-btn').val();
    
        if (watchValue > 50 || watchValue === 1) {
           
            $('#watch-btn').val('100');
    
        } else if (watchValue < 50) {
          
            $('#watch-btn').val('100');
          
            window.open('https://www.refinery29.com/en-us/video', '_blank');
        
        }
        
    });    

    $('#shop-btn').on('change', function() {
        
        var shopValue = $('#shop-btn').val();
    
        if (shopValue < 50 || shopValue === 100) {
           
            $('#shop-btn').val('1');
    
        } else if (shopValue > 50) {
           
            $('#shop-btn').val('1');
           
           window.open('https://www.refinery29.com/en-us/shop', '_blank');
        }

    });


// LATEST NEWS SCROLLING ANIMATION

    $(function(){
    
      var tickerHeight = $('.ls-story').outerHeight();
    
      $('.ls-story:last-child').prependTo('.latest-scroll ul');
    
      $('.latest-scroll ul').css('marginTop',-tickerHeight);
    
      function moveTop(){
    
        $('.latest-scroll ul').animate({
    
          top : -tickerHeight
    
        },1000, function(){
    
         $('.ls-story:first-child').appendTo('.latest-scroll ul');
    
          $('.latest-scroll ul').css('top','');
    
        });
    
       }
    
      setInterval( function(){
    
        moveTop();
    
      }, 3000);

    });


 // LATEST NEWS ARROW NAVIGATION

    $('.arrow-up').click(function(){

        var tickerHeight = $('.ls-story').outerHeight();

         $('.latest-scroll ul').animate({
    
          top : +tickerHeight

        }, 500);
    });

    $('.arrow-down').click(function(){

        var tickerHeight = $('.ls-story').outerHeight();

         $('.latest-scroll ul').animate({
    
          top : -tickerHeight

        },500);
    });


// DRAGGABLE PARAMETERS FOR SLIDESHOWS

    function dragFix(event, ui) {
        
        var contWidth = containmentArea.width()
        var contHeight = containmentArea.height();
        
        ui.position.left = Math.max(
            0, 
            Math.min(
                ui.position.left / percent, 
                contWidth - ui.helper.width()
                )
            );
        
        ui.position.top = Math.max(
            0, 
            Math.min(
                ui.position.top  / percent,  
                contHeight- ui.helper.height()
                )
            );
    }


    $('.slideshow-vid').draggable({
        axis: 'x',
        // containment: [-1200, 0, 20, 0]
        drag: dragFix,
    });

    $('.slideshow-art').draggable({
        axis: 'x',
        // containment: [-2200, 0, 20, 0]
        drag: dragFix,
    });


// ORIGINAL VIDEOS PAGINATION

    setInterval( function () {
        
        var originalVidScroll = $('.vid-gal').scrollLeft();

    
        if ( originalVidScroll == 0 && originalVidScroll < 200 ) {
    
            $(originalVidDots[0]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[0]).removeClass('activeO');
    
        }

    
        if (originalVidScroll > 250 && originalVidScroll < 650) {
    
            $(originalVidDots[1]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[1]).removeClass('activeO');
    
        }   


        if (originalVidScroll > 690 && originalVidScroll < 1050) {
    
            $(originalVidDots[2]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[2]).removeClass('activeO');
    
        }   

    
        if (originalVidScroll > 1100 && originalVidScroll < 1400) {
    
            $(originalVidDots[3]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[3]).removeClass('activeO');
    
        }   

    
        if (originalVidScroll > 1450 && originalVidScroll < 1800) {
    
            $(originalVidDots[4]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[4]).removeClass('activeO');
    
        }   

    
        if (originalVidScroll >= 1850) {
    
            $(originalVidDots[5]).addClass('activeO');
    
        } else {
    
            $(originalVidDots[5]).removeClass('activeO');
    
        }

    },500);



// TRENDING VIDEOS ANIMATION


    var loopThru = function() {

        $('.watch').click(function () {
    
            $('.tv1.selected').removeClass('selected');

            $('.tv4.selected').removeClass('selected');
    
            $('.tv2.selectedLeft').removeClass('selectedLeft');
    
            $('.tv3.selectedRight').removeClass('selectedRight');

            $('.tv-frame.bright').removeClass('bright');
    
        });

        $('.tv figure').on('click', function (e){
                
            e.stopPropagation(); 
            
            clearTimeout(vid1);
            
            clearTimeout(vid2);
            
            clearTimeout(vid3);
            
            clearTimeout(vid4);

            $(this).removeClass('tvTopBottom tvLeft tvRight');
                    
                
            if($(this).hasClass('tv1')) {
        
                $('.tv4.selected').removeClass('selected');
        
                $('.tv2.selectedLeft').removeClass('selectedLeft');
        
                $('.tv3.selectedRight').removeClass('selectedRight');
        
                $(this).addClass('selected');
        
                $(this).children('.tv-frame').addClass('bright');
            }

            if($(this).hasClass('tv4')) {
        
                $('.tv1.selected').removeClass('selected');
        
                $('.tv2.selectedLeft').removeClass('selectedLeft');
        
                $('.tv3.selectedRight').removeClass('selectedRight');
        
                $(this).addClass('selected');
        
                $(this).children('.tv-frame').addClass('bright');
            }

            if($(this).hasClass('tv2')) {
        
                $('.tv1.selected').removeClass('selected');

                $('.tv4.selected').removeClass('selected');

                $('.tv3.selectedRight').removeClass('selectedRight');
        
                $(this).addClass('selectedLeft');
        
                $(this).children('.tv-frame').addClass('bright');
            }

            if($(this).hasClass('tv3')) {
        
                $('.tv1.selected').removeClass('selected');

                $('.tv4.selected').removeClass('selected');

                $('.tv2.selectedLeft').removeClass('selectedLeft');
        
                $(this).addClass('selectedRight');
        
                $(this).children('.tv-frame').addClass('bright');
            }

        });

        var vid1 = setTimeout (function () { 

            $('.tv4').removeClass('tvTopBottom');
        
            $('.tv4-content').removeClass('show');
        
            $('.tv4 .tv-frame').removeClass('bright');
        
            $('.tv1').addClass('tvTopBottom').delay(500);
        
            $('.tv1 .tv-frame').addClass('bright'); 

        }, 5000);

        var vid2 = setTimeout (function () { 
            
            $('.tv1').removeClass('tvTopBottom');
        
            $('.tv1-content').removeClass('show');
        
            $('.tv1 .tv-frame').removeClass('bright');
        
            $('.tv2').addClass('tvLeft');
        
            $('.tv2 .tv-frame').addClass('bright');


        }, 10000);

        var vid3 = setTimeout (function () { 
            
            $('.tv2').removeClass('tvLeft');
        
            $('.tv2-content').removeClass('show');
        
            $('.tv2 .tv-frame').removeClass('bright');
        
            $('.tv3').addClass('tvRight');
        
            $('.tv3 .tv-frame').addClass('bright');

        }, 15000);

        var vid4 = setTimeout (function () { 
        
            $('.tv3').removeClass('tvRight');
        
            $('.tv3-content').removeClass('show');
        
            $('.tv3 .tv-frame').removeClass('bright');
        
            $('.tv4').addClass('tvTopBottom');
        
            $('.tv4 .tv-frame').addClass('bright');

        }, 20000);

        return loopThru;
        
    }


// ARTICLE SLIDESHOW ANIMATION

    var scrolling = function() {

        $(".article").each(function(i, e) {
      
            var animateLeft = function() {

                $(".more-art").animate( {
              
                    scrollLeft: $(e).offset().left - $('.slideshow').offset().left
              
                }, 2000).delay(500);

                $('.more-art').on('touchstart', function (){
                    
                    $(this).stop(true, true);
                
                });

                $('.more-art').on('click', function (){
                    
                    $(this).stop(true, true);
                
                });

            } 

            animateLeft();

        });

        return scrolling;

    }

    intervalBubble = setInterval(loopThru(), 21000);

  	intervalScroll = setInterval(scrolling(), 9000); 
  	
    clearInterval(intervalScroll);

    $('.tv').on('click', function () {

        clearInterval(intervalBubble);
    
    });


// SLIDESHOW ANIMATION/PAGINATION FOR SECONDARY ARTICLES IN 'NOW ON R29' SECTION

    setInterval(function() { 

        var beautyScroll = $('.beauty-scroll').scrollLeft();

        var newsScroll = $('.news-scroll').scrollLeft();

        var fashionScroll = $('.fashion-scroll').scrollLeft();

        var lifestyleScroll = $('.lifestyle-scroll').scrollLeft();

        var workmoneyScroll = $('.workmoney-scroll').scrollLeft();


       if ( beautyScroll == 0 && beautyScroll < 100 ) {
        
            $(beautyPagDots[0]).addClass('activeB');
        
        } else {
            
            $(beautyPagDots[0]).removeClass('activeB');
        
        }

        if ( newsScroll == 0 && newsScroll < 100 ) {

            $(newsPagDots[0]).addClass('activeN');

        } else {

            $(newsPagDots[0]).removeClass('activeN');

        } 

        if ( fashionScroll == 0 && fashionScroll < 100 ) {

            $(fashionPagDots[0]).addClass('activeF');

        } else {

            $(fashionPagDots[0]).removeClass('activeF');

        } 

        if ( lifestyleScroll == 0 && lifestyleScroll < 100 ) {

            $(lifestylePagDots[0]).addClass('activeL');

        } else {

            $(lifestylePagDots[0]).removeClass('activeL');

        } 

        if ( workmoneyScroll == 0 && workmoneyScroll < 100  ) {

            $(workmoneyPagDots[0]).addClass('activeW');

        } else {

            $(workmoneyPagDots[0]).removeClass('activeW');

        }

        if ( beautyScroll > 200 && beautyScroll < 530 ) {
            
            $(beautyPagDots[1]).addClass('activeB');

        } else {
            
            $(beautyPagDots[1]).removeClass('activeB');
        }    

        if ( newsScroll > 200 && newsScroll < 530 ) {

            $(newsPagDots[1]).addClass('activeN');

        } else {

            $(newsPagDots[1]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 200 && fashionScroll < 530 ) {

            $(fashionPagDots[1]).addClass('activeF');

        } else {

            $(fashionPagDots[1]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 200 && lifestyleScroll < 530 ) {

            $(lifestylePagDots[1]).addClass('activeL');

        } else {

            $(lifestylePagDots[1]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 200 && workmoneyScroll < 530 ) {

            $(workmoneyPagDots[1]).addClass('activeW');

        } else {

            $(workmoneyPagDots[1]).removeClass('activeW');
        }

        if ( beautyScroll > 600 && beautyScroll < 850 ) {
            
            $(beautyPagDots[2]).addClass('activeB');

        } else {
            
            $(beautyPagDots[2]).removeClass('activeB');
        }    

        if ( newsScroll > 600 && newsScroll < 850 ) {

            $(newsPagDots[2]).addClass('activeN');

        } else {

            $(newsPagDots[2]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 600 && fashionScroll < 850 ) {

            $(fashionPagDots[2]).addClass('activeF');

        } else {

            $(fashionPagDots[2]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 600 && lifestyleScroll < 850 ) {

            $(lifestylePagDots[2]).addClass('activeL');

        } else {

            $(lifestylePagDots[2]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 600 && workmoneyScroll < 850 ) {

            $(workmoneyPagDots[2]).addClass('activeW');

        } else {

            $(workmoneyPagDots[2]).removeClass('activeW');
        }

        if ( beautyScroll > 900 && beautyScroll < 1280 ) {
            
            $(beautyPagDots[3]).addClass('activeB');

        } else {
            
            $(beautyPagDots[3]).removeClass('activeB');
        }    

        if ( newsScroll > 900 && newsScroll < 1280 ) {

            $(newsPagDots[3]).addClass('activeN');

        } else {

            $(newsPagDots[3]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 900 && fashionScroll < 1280 ) {

            $(fashionPagDots[3]).addClass('activeF');

        } else {

            $(fashionPagDots[3]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 900 && lifestyleScroll < 1280 ) {

            $(lifestylePagDots[3]).addClass('activeL');

        } else {

            $(lifestylePagDots[3]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 900 && workmoneyScroll < 1280 ) {

            $(workmoneyPagDots[3]).addClass('activeW');

        } else {

            $(workmoneyPagDots[3]).removeClass('activeW');
        }
        
        if ( beautyScroll > 1300 && beautyScroll < 1620 ) {
            
            $(beautyPagDots[4]).addClass('activeB');

        } else {
            
            $(beautyPagDots[4]).removeClass('activeB');
        }    

        if ( newsScroll > 1300 && newsScroll < 1620 ) {

            $(newsPagDots[4]).addClass('activeN');

        } else {

            $(newsPagDots[4]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 1300 && fashionScroll < 1620 ) {

            $(fashionPagDots[4]).addClass('activeF');

        } else {

            $(fashionPagDots[4]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 1300 && lifestyleScroll < 1620 ) {

            $(lifestylePagDots[4]).addClass('activeL');

        } else {

            $(lifestylePagDots[4]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 1300 && workmoneyScroll < 1620 ) {

            $(workmoneyPagDots[4]).addClass('activeW');

        } else {

            $(workmoneyPagDots[4]).removeClass('activeW');
        }
        
        if ( beautyScroll > 1650 && beautyScroll < 1950 ) {
            
            $(beautyPagDots[5]).addClass('activeB');

        } else {
            
            $(beautyPagDots[5]).removeClass('activeB');
        }    

        if ( newsScroll > 1650 && newsScroll < 1950 ) {

            $(newsPagDots[5]).addClass('activeN');

        } else {

            $(newsPagDots[5]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 1650 && fashionScroll < 1950 ) {

            $(fashionPagDots[5]).addClass('activeF');

        } else {

            $(fashionPagDots[5]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 1650 && lifestyleScroll < 1950 ) {

            $(lifestylePagDots[5]).addClass('activeL');

        } else {

            $(lifestylePagDots[5]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 1650 && workmoneyScroll < 1950 ) {

            $(workmoneyPagDots[5]).addClass('activeW');

        } else {

            $(workmoneyPagDots[5]).removeClass('activeW');
        }

        if ( beautyScroll > 2000 && beautyScroll < 2250 ) {
            
            $(beautyPagDots[6]).addClass('activeB');

        } else {
            
            $(beautyPagDots[6]).removeClass('activeB');
        }    

        if ( newsScroll > 2000 && newsScroll < 2250 ) {

            $(newsPagDots[6]).addClass('activeN');

        } else {

            $(newsPagDots[6]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 2000 && fashionScroll < 2250 ) {

            $(fashionPagDots[6]).addClass('activeF');

        } else {

            $(fashionPagDots[6]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 2000 && lifestyleScroll < 2250 ) {

            $(lifestylePagDots[6]).addClass('activeL');

        } else {

            $(lifestylePagDots[6]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 2000 && workmoneyScroll < 2250 ) {

            $(workmoneyPagDots[6]).addClass('activeW');

        } else {

            $(workmoneyPagDots[6]).removeClass('activeW');
        }

        if ( beautyScroll > 2300 ) {
            
            $(beautyPagDots[7]).addClass('activeB');

        } else {
            
            $(beautyPagDots[7]).removeClass('activeB');
        }    

        if ( newsScroll > 2300 ) {

            $(newsPagDots[7]).addClass('activeN');

        } else {

            $(newsPagDots[7]).removeClass('activeN');
       
        }    

        if ( fashionScroll > 2300 ) {

            $(fashionPagDots[7]).addClass('activeF');

        } else {

            $(fashionPagDots[7]).removeClass('activeF');

        }    

        if ( lifestyleScroll > 2300 ) {

            $(lifestylePagDots[7]).addClass('activeL');

        } else {

            $(lifestylePagDots[7]).removeClass('activeL');

        }    

        if ( workmoneyScroll > 2300 ) {

           $(workmoneyPagDots[7]).addClass('activeW');

        } else {

            $(workmoneyPagDots[7]).removeClass('activeW');

        }

    }, 500);


// COLLAPSIBLE ANIMATION FOR 'NOW ON R29' SECTIONS

    $(collapsibles).each(function (){
    
        $(this).on('click', function() {
    
            $(this).siblings(".col-content").slideToggle();
    
        });
   
   });

}, 2000);