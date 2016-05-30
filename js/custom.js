 //for main slider
 jQuery(function($){
  
    /* ----------------------------------------------------------- */
    /*  image slider
    /* ----------------------------------------------------------- */

    jQuery('#demo1').skdslider({delay:5000, animationSpeed: 2000,showNextPrev:false,showPlayButton:false,autoSlide:true,animationType:'fading'});
      
      jQuery('#responsive').change(function(){
        $('#responsive_wrapper').width(jQuery(this).val());
      });
      // For fixed top bar
       $(window).scroll(function(){
        if($(window).scrollTop() >100 /*or $(window).height()*/){
          $(".navbar-fixed-top").addClass('past-main');   
        }
      else{
        $(".navbar-fixed-top").removeClass('past-main');
      }
    })
   

  /* ----------------------------------------------------------- */
  /*  button on slider
  /* ----------------------------------------------------------- */     

    $('#firstTop').on("click",function(){
    var percentage = 100;
    var height = $(document).height();
    var remove = +height / +100 * +percentage;
    var spaceFromTop = +height - +remove;
    $('html,body').animate({ scrollTop: spaceFromTop }, 'slow', function () {});
    });

    $('#secondTop').on("click",function(){
    var percentage = 100;
    var height = $(document).height();
    var remove = +height / +100 * +percentage;
    var spaceFromTop = +height - +remove;
    $('html,body').animate({ scrollTop: spaceFromTop }, 'slow', function () {});
    });
    
     $('#thirdTop').on("click",function(){
    var percentage = 100;
    var height = $(document).height();
    var remove = +height / +100 * +percentage;
    var spaceFromTop = +height - +remove;
    $('html,body').animate({ scrollTop: spaceFromTop }, 'slow', function () {});
    });
    
     $('#fourthTop').on("click",function(){
    var percentage = 100;
    var height = $(document).height();
    var remove = +height / +100 * +percentage;
    var spaceFromTop = +height - +remove;
    $('html,body').animate({ scrollTop: spaceFromTop }, 'slow', function () {});
    });

    $('#firstBottom').on("click",function() {
    var window_height = $(window).height();
    var document_height = $(document).height();
    $('html,body').animate({ scrollTop: window_height + document_height }, 'slow', function () {});
    });

    $('#secondBottom').on("click",function() {
    var window_height = $(window).height();
    var document_height = $(document).height();
    $('html,body').animate({ scrollTop: window_height + document_height }, 'slow', function () {});
    });
    
     $('#thirdBottom').on("click",function() {
    var window_height = $(window).height();
    var document_height = $(document).height();
    $('html,body').animate({ scrollTop: window_height + document_height }, 'slow', function () {});
    });

    $('#fourthBottom').on("click",function() {
    var window_height = $(window).height();
    var document_height = $(document).height();
    $('html,body').animate({ scrollTop: window_height + document_height }, 'slow', function () {});
    });

  
  /* ----------------------------------------------------------- */
  /* fixed navigation
  /* ----------------------------------------------------------- */   

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  }); 

  
  /* ----------------------------------------------------------- */
  /* smooth scrolling navigation
  /* ----------------------------------------------------------- */   

   //MENU SCROLLING WITH ACTIVE ITEM SELECTED

    // Cache selectors
    var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+10,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 900);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
     }           
    })

  /* ----------------------------------------------------------- */
  /* mobile menu active
  /* ----------------------------------------------------------- */ 

  $('.navbar-nav').on('click', 'li a', function() {
    $('.in').collapse('hide');
  });  

  /* ----------------------------------------------------------- */
  /*  google map for Glasgow Cineworld
  /* ----------------------------------------------------------- */

  var zoom= $('#map_canvas').gmap('option', 'zoom');
    
  $('#map_canvas').gmap().bind('init', function(ev, map) {
    $('#map_canvas').gmap('addMarker', {'position': '55.864935,-4.254705', 'bounds': true});
    $('#map_canvas').gmap('option', 'zoom', 13);
  });

 
  /* ----------------------------------------------------------- */
  /*  loading gif
  /* ----------------------------------------------------------- */ 

    jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })

  /* ----------------------------------------------------------- */
  /*  smooth animation
  /* ----------------------------------------------------------- */

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
 
  
});
 
 
  /* ----------------------------------------------------------- */
  /*  Gallery 
  /* ----------------------------------------------------------- */
 
function scaleGallery()
{
  // This is roughly the max pixels width/height of a square photo
  var widthSetting = 400;
  
  // Do not edit any of this unless you know what you're doing
  var containerWidth = $(".gallery").width();
  var ratioSumMax = containerWidth / widthSetting;
  var imgs = $(".gallery img");
  var numPhotos = imgs.length, ratioSum, ratio, photo, row, rowPadding, i = 0;

  while (i < numPhotos) {
    ratioSum = rowPadding = 0;
    row = new Array();
    while (i < numPhotos && ratioSum < ratioSumMax) {
        photo = $(imgs[i]);
        // reset width to original
        photo.width(""); 
        ratio = photo.width() / photo.height();
        rowPadding += getHorizontalPadding(photo);
        // if this is going to be first in the row, clear: left
        if(ratioSum == 0) photo.css("clear", "left"); else photo.css("clear", "none");
        ratioSum += ratio;
        row.push(photo);
        i++;
        // if only 1 image left, squeeze it in
        if(i == numPhotos - 1) ratioSumMax = 999;
    }
    unitWidth = (containerWidth - rowPadding) / ratioSum;

    row.forEach(function (elem) {
      elem.width(unitWidth * elem.width() / elem.height());
    });
  }
}

function getHorizontalPadding(elem)
{
    var padding = 0;
    var left = elem.css("padding-left");
    var right = elem.css("padding-right");
    padding += parseInt(left ? left.replace("px", "") : 0);
    padding += parseInt(right ? right.replace("px", "") : 0);
    return padding;
}

$(window).load(scaleGallery);
$(window).resize(scaleGallery);

  
 