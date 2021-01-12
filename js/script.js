$(document).ready(function(){

  $('.with-dropdown').hover(function(){
    $(this).children('.dropdown-menu').toggleClass('active');
  });


  $(".it").click(function () {
    $(this).find(".hidden").show();
    $(this).find(".show").hide();

})


});
