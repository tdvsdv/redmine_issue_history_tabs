RMPlus.TABS = (function (my) {
  var my = my || {};

  my.show_comments = function () {
    $('.journal').each(function (index) {
      var $journal = $(this);
      $journal.hide();
      if ($journal.hasClass('has-notes'))  {
        $journal.show();
      }
      if ($journal.find('a[href^="/attachments"]').length > 0) {
        $journal.show();
        $journal.find('.details li').hide();
        $journal.find('li:has(a[href^="/attachments"])').show();
      } else {
        $journal.find('ul.details').hide();
      }
    });
  };

  my.show_all = function () {
    $('.journal').show().find('.details').show().find('li').show();
  };

  return my;
})(RMPlus.TABS || {});

$(document).ready(function(){

  $(document.body).on("click", "#tab-history_comments", function() {
    RMPlus.TABS.show_comments();
  });

  $(document.body).on("click", "#tab-history_all", function() {
    RMPlus.TABS.show_all();
  });

  $("#tab-history_comments").hasClass('selected') ? RMPlus.TABS.show_comments() : RMPlus.TABS.show_all();

  if ($("#history").length > 0) {
    $("#history_tabs").prependTo($("#history"));
    // var $journals = $('.journal');
    // $journals.appendTo('#tab-content-history_all');
    // $('.journal.has-notes').clone().appendTo('#tab-content-history_comments').find('ul.details').remove();
  }
  else {
    $("#history_tabs").hide();
  }
});