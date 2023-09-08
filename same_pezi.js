$('button').on('mouseover',function() {
    $(this).css({
      top: (Math.random()*100)+'%',
      left: (Math.random()*100)+'%' 
    });
  });
$('button').on('mouseclick',function() {
  $(this).css({
    top: (Math.random()*100)+'%',
    left: (Math.random()*100)+'%' 
  });
});
