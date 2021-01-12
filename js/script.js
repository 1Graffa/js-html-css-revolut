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

  $('.with-dropdown').mouseenter(function(){
    $(this).children('.dropdown-menu').removeClass('dropdown-menu').addClass('dropdown-menu.active');
  });
  $('.with-dropdown').mouseleave(function(){
    $(this).children('.dropdown-menu.active').removeClass('dropdown-menu.active').addClass('dropdown-menu');
  });

  frecciaLingua.click(function () {
    $(this).find("i").toggleClass("rotate");
    $(this).children('.dropdown-menu-lingua').removeClass('dropdown-menu-lingua').addClass('dropdown-menu.active');

  })



});
