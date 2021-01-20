$(document).ready(function(){

var ddown = $('.with-dropdown');
var frecciaLingua = $(".it");

//parte sinistra nav
  $(".ssn").mouseenter(function(){
      $(this).css("background-color", "#C93916");
  });
  $(".ssn").mouseleave(function(){
    $(this).css("background-color", "#FEDE00");
  });
// FINE parte sinistra nav

//TENDINE

// con hover è meglio
// $('.with-dropdown').hover(function(){
//   $(this).children('.dropdown-menu').toggleClass('active');
// });

  $('.with-dropdown').mouseenter(function(){
    $(this).children('.dropdown-menu').addClass('active');
  });
  $('.with-dropdown').mouseleave(function(){
    $(this).children('.dropdown-menu.active').removeClass('active');
  });

//Freccia delle lingue con tendina a parte
  frecciaLingua.click(function () {
    $(this).find("i").toggleClass("rotate");
    $(this).children('.dropdown-menu').toggleClass("active");

  })

//marquee
  $('#maindiv').width($('#slogan').width());


});
