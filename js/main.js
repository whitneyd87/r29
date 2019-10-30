var clicked = 0;

$(document).ready(function(){    

let date = new Date();

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY']

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


let intervalBubble = null;


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

    } else  {

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
 
    let winY = $(window).scrollTop();

    if (winY > 800) {
        
        $('#header').addClass('headerScroll');
        $('#date').css('display', 'none');
        $('#logo').removeClass('logoGrow');
        $('#logo').addClass('logoShrink');
        $('#search-box').removeClass('searchTop');
        $('#search-box').addClass('searchScroll');
        $('header .main-nav').addClass('navWidth');
        $('header .main-nav ul').addClass('navScroll');
        $('.main-li').css({'margin-bottom' : '0px', 'width' : '25%'});
        $('#discover').css('width', '25%');

    } else {

        $('#header').removeClass('headerScroll');
        $('#date').css('display', 'block');
        $('#logo').removeClass('logoShrink');
        $('#logo').addClass('logoGrow');
        $('#search-box').removeClass('searchScroll');
        $('#search-box').addClass('searchTop');
        $('header .main-nav').removeClass('navWidth');
        $('header .main-nav ul').removeClass('navScroll');
        $('.main-li').css({'margin-bottom' : '10px', 'width' : '60%'});
        $('#discover').css('width', '90%');
    }

});


// REDIRECTION OF PAGE FOR INPUT RANGE ('SLIDER') BUTTONS


$('#styleInput').on('change', function() {
    
    let styleValue = $('#styleInput').val();

    if(styleValue < 50) {
       
        $('#styleInput').val('1');

    } else {
      
        $('#styleInput').val('1');
      
        window.open('https://www.refinery29.com/en-us/2019/05/231982/homeless-women-hair-beauty-services-los-angeles' , '_blank');
    
    } 

});    

$('#pinterestInput').on('change', function() {
    
    let pinValue = $('#pinterestInput').val();

    if (pinValue > 50 || pinValue === 1) {
       
        $('#pinterestInput').val('100');

    } else {

        $('#pinterestInput').val('100');
      
        window.open('https://www.pinterest.com/refinery29/?auto_follow=true' , '_blank');
    
    }
    
});    

$('#podcastInput').on('change', function() {
    
    let podValue = $('#podcastInput').val();

    if (podValue < 50 || podValue === 100) {
       
        $('#podcastInput').val('1');

    } else {
       
        $('#podcastInput').val('1');
       
        window.open('https://podcasts.apple.com/us/podcast/unstyled/id1171140955?mt=2', '_blank');
   
    }
    
});


$('#discover-btn').on('change', function() {
    
    let discoverValue = $('#discover-btn').val();

    if (discoverValue < 50 || discoverValue === 100) {
       
        $('#discover-btn').val('1');

    } else {
      
        $('#discover-btn').val('1');
      
        window.open('https://www.refinery29.com/en-us', '_blank');
    }

});    

$('#watch-btn').on('change', function() {
    
    let watchValue = $('#watch-btn').val();

    if (watchValue > 50 || watchValue === 1) {
       
        $('#watch-btn').val('100');

    } else {
      
        $('#watch-btn').val('100');
      
        window.open('https://www.refinery29.com/en-us/video', '_blank');
    
    }
    
});    

$('#shop-btn').on('change', function() {
    
    let shopValue = $('#shop-btn').val();

    if (shopValue < 50 || shopValue === 100) {
       
        $('#shop-btn').val('1');

    } else {
       
        $('#shop-btn').val('1');
       
       window.open('https://www.refinery29.com/en-us/shop', '_blank');
    }

});


// ARROW NAVIGATION ANIMATION


    $('.animate-scroll').each(function() { 

        let arrowRight = $(this).find('.arrow-right');
        let arrowLeft = $(this).find('.arrow-left');
        let slideShow = $(this).find('.slideshow');

        let counter = -1;
        let scrolling = null;

       $(arrowRight).on('click', function() {
           
           let containWidth = 355;

           let continScroll = "-=" + containWidth;
           
           if (counter < 0 && counter > -2400) {
   
               scrolling = continScroll.toString(); 

                $(slideShow).animate({
                    
                   left: scrolling

                }, 500);  

                counter -= containWidth;    
                
            } else {

                scrolling = 0;

            }

            console.log(counter);

        });

        $(arrowLeft).on('click', function(){

           let containWidth = 355;

           let continScroll = "+=" + containWidth;
        
            if (counter < -2500 || counter < -1) {

                scrolling = continScroll.toString();

                $(slideShow).animate({
                    
                    left: scrolling

                }, 500); 

                counter += containWidth;  

            } else {

                scrolling = 0; 
            }

            console.log(containWidth);

        });

    });


// TRENDING VIDEOS ANIMATION


var loopThru = function() {

    $('.watch').click(function () {

        $('.tv1.selected').removeClass('selected');

        $('.tv4.selected').removeClass('selected');

        $('.tv2.selectedLeft').removeClass('selectedLeft');

        $('.tv3.selectedRight').removeClass('selectedRight');

        $('.tv-frame.bright').removeClass('bright');

    });

    $('.tv figure').on('click', function(e) {
            
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

intervalBubble = setInterval(loopThru(), 21000);


$('.tv figure').on('click', function () {

    clearInterval(intervalBubble);

});


// COLLAPSIBLE ANIMATION FOR 'NOW ON R29' SECTIONS


    $(collapsibles).each(function (){
    
        $(this).on('click', function() {
    
            $(this).siblings(".col-content").slideToggle();
    
        });
   
   });

}, 2000);