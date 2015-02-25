$(document).ready(init);


function init() {
    $('ul.submenu').each(function(e) {

      l = $(this).css('left');
      pl = $(this).parent().position();

      if(pl != "") {
      pos = pl.left;
      pos = pos - (2*pos);
      pos = pos+1;
      $(this).css('left',pos+'px');
      }
    });
};

