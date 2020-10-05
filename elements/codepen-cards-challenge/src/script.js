$(".card").hover(function() {
  var vSrc =  $(this).find('iframe').data('video');
  var video = $(this).find('iframe');
  video.attr('src',vSrc);
  setTimeout(function(){ player.unMute(); }, 1000);
},
function() {
  $(this).find('iframe').attr('src','');
});

$('.view').click(function(){
  var el = $(this);
  
  if(el.hasClass('series_lacasa') == true){
    $('.episodes .episode').each(function(){
      var toShow = $(this).data('lacasa');
      $(this).css('background','url('+toShow+') no-repeat center/cover');
    });
  } else if (el.hasClass('series_got') == true) {
    $('.episodes .episode').each(function(){
      var toShow = $(this).data('got');
      $(this).css('background','url('+toShow+') no-repeat center/cover');
    });
  }  else if (el.hasClass('series_vikings') == true) {
    $('.episodes .episode').each(function(){
      var toShow = $(this).data('vikings');
      $(this).css('background','url('+toShow+') no-repeat center/cover');
    });
  }
    
  $('.fullserie').addClass('active');
});

$('.fullserie .close').click(function(){
  $('.fullserie').removeClass('active');
});