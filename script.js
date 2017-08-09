
$('.read_in_context').hide();
$('.char_name').mouseover(function(){
  console.log("u hovered on a name congrat");
})

$('#manafort').click(function(){
  console.log('clic');
  $('.card_img').toggleClass('showHeight', 3000);
})

$('.context_title').mouseover(function(){
  $('.read_in_context').css('display', 'inline-block');
});

$('.context_title').mouseout(function(){
  $('.read_in_context').css('display', 'none');
});
