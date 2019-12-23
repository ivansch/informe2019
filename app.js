$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});
$(document).ready(function() {
  $("#cercle1").mouseover(function() {
    $("#cercle1").css("background-color", "#00aeef");
    $("#pathF1").css("fill", "white");
  });
  $("#cercle1").mouseout(function() {
    $("#cercle1").css("background-color", "white");
    $("#pathF1").css("fill", "#00aeef");
  });
  $("#cercle2").mouseover(function() {
    $("#cercle2").css("background-color", "#00aeef");
    $("#pathF2").css("fill", "white");
  });
  $("#cercle2").mouseout(function() {
    $("#cercle2").css("background-color", "white");
    $("#pathF2").css("fill", "#00aeef");
  });
  $("#cercle3").mouseover(function() {
    $("#cercle3").css("background-color", "#00aeef");
    $("#pathF3").css("fill", "white");
  });
  $("#cercle3").mouseout(function() {
    $("#cercle3").css("background-color", "white");
    $("#pathF3").css("fill", "#00aeef");
  });
});
