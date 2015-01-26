$(document).ready(function() {
    $('ul.submenu').each(function(e) {

      /* left des aktuellen Elements */
      l = $(this).css('left');
      pl = $(this).parent().position();
      //alert(l+' --- '+pl.left);

      /* Wenn Höhe erfolgreich bestimmt werden konnte */
      if(pl != "") {
      pos = pl.left;
      pos = pos - (2*pos);
      pos = pos+1;
      $(this).css('left',pos+'px');
      }
    });


});

