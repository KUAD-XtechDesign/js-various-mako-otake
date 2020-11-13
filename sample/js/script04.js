$(function(){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
})

$(function(){

  $("#intro p").hide().fadeIn(1000)
  
  $("#intro").on("click",introAnime)

  function introAnime(){
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,1000);
  }
  
  

})