function show_comments() {
  $('.journal').hide();
  $('.journal.has-notes').show();
  $('.journal.has-notes ul.details').hide();
}

function show_all() {
  $('.journal').show();
  $('.journal.has-notes ul.details').show();
}


$(document).ready(function(){

  $(document.body).on("click", "#tab-history_comments", function(){
    $(this).addClass("selected");
    $('#tab-history_all').removeClass("selected");
    show_comments();    
    return false;
  });  

  $(document.body).on("click", "#tab-history_all", function(){
    $(this).addClass("selected");
    $("#tab-history_comments").removeClass("selected");
    show_all();
    return false;
  });

  $("#tab-history_comments").hasClass('selected') ? show_comments() : show_all();

  ( $("#history").length ) ?  $("#history").prepend($("#history_tabs") ) : $("#history_tabs").hide();  

});