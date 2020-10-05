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
  fetch("https://api.themoviedb.org/3/movie/19995?api_key=06412c2ac60d3b3a66c7fb129dcaca28&language=en-US")
    .then((response) => response.json())
    .then((data) => {
    const value = data.poster_path;
    //Apply HTML src
     console.log('https://image.tmdb.org/t/p/original'+value);
     var urlString = "url('https://image.tmdb.org/t/p/original" + value + " ')";
     document.getElementById('CARD').style.backgroundImage = urlString;
	 document.getElementById('CARD').style.backgroundRepeat = "no-repeat";
	  document.getElementById('CARD').style.backgroundSize = "cover";
});
