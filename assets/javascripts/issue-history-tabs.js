/*d
Author: Daniel Munn <https://github.com/danmunn
Date: 23/05/2012
*/
function init_tabs() {
  try{
    tabComment = $('tab-history_comments');
    tabAll = $('tab-history_all');
    tabComment.observe('click', click_comments);
    tabAll.observe('click', click_all);
    tabComment.hasClassName('selected') ? show_comments() : show_all();
  }catch(e){};
}

function show_comments() {
  $$('.journal').invoke('hide');
  $$('.journal.has-notes').invoke('show');
  $$('.journal.has-notes ul.details').invoke('hide');
}

function show_all() {
  $$('.journal').invoke('show');
  $$('.journal.has-notes ul.details').invoke('show');
}

function click_comments(e) {
  tabComment.addClassName('selected');
  tabAll.removeClassName('selected');
  show_comments();
  Event.stop(e);
}

function click_all(e) {
  tabComment.removeClassName('selected');
  tabAll.addClassName('selected');
  show_all();
  Event.stop(e);
}

var tabAll;
var tabComment;

document.observe('dom:loaded', function(){
  init_tabs();
  if ($('history'))
    $('history').insert({top: $('history_tabs')});
  else
    $('history_tabs').hide();
});
