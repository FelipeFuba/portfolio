document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});
$(document).ready(function() {
  $('a[name=modal]').click(function(e) {
    e.preventDefault();
  var id = $(this).attr('href');
  
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  
  $('#mask').css({'width':maskWidth, 'height':maskHeight});
  
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo("slow", 0.8);
  
  var winH = $(window).height();
  var winW = $(window).width();
  
  $(id).css('top', winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
  $(id).fadeIn(900);
});

$('.windows .close').click(function(e) {
  e.preventDefault();
  $('#mask, .windows').hide();
});
  $('#mask').click(function(){
    $(this).hide();
    $('.windows').hide();
  });
});

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
};
