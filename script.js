$('#nav-bar-full').hide() // For navigation bar effect before document ready

$(document).ready(function() {
  ScrollOut({once:true});

  // Scroll animation with offset for anchor points
  if ( $(window).width() < 960) {
    $('.nav-a').on('click',function(e){
      e.preventDefault();
      var target = $($(this).attr('href')),
          p = $(target).offset().top,
          offset = 0;

      $(target).has('div') && $(target).has('nav') && (p = p - offset);
      $('body, html').animate({ 'scrollTop': p }, 450);
    });
  }

  if ( $(window).width() > 960) {
  // Scroll animation with offset for anchor points
  $('.nav-a').on('click',function(e){
    e.preventDefault();
    var target = $($(this).attr('href')),
        p = $(target).offset().top,
        offset = 70;

    $(target).has('div') && $(target).has('nav') && (p = p - offset);
    $('body, html').animate({ 'scrollTop': p }, 450);
  });

  // Navigation bar effect
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 71;
      if($(window).scrollTop() > navHeight) {
        $('#nav-bar-first').hide()
        $('#nav-bar-full').show()
        $('nav').addClass('fixed');
      }
      else {
        $('nav').removeClass('fixed');
        $('#nav-bar-full').hide()
        $('#nav-bar-first').show()
      }
  });

  // Navigation bar animations
  $('#nav-bar-first').on("animationend", function(){
    $('#nav-bar-first').removeClass('nav-bar-first')
  })

  }


  // YouTube video's
  var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
  function loadVideo(iframe){
      $.getJSON( reqURL + iframe.getAttribute('cid'),
        function(data) {
           var videoNumber = (iframe.getAttribute('vnum')?Number(iframe.getAttribute('vnum')):0);
          console.log(videoNumber);
           var link = data.items[videoNumber].link;
           id = link.substr(link.indexOf("=") + 1);
           iframe.setAttribute("src","https://youtube.com/embed/"+id + "?controls=1&autoplay=0");
        }
     );
  }
  var iframes = document.getElementsByClassName('latestVideoEmbed');
  for (var i = 0, len = iframes.length; i < len; i++){
         loadVideo(iframes[i]);
  }

});
