// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
  $("#faq dt").click(function() {
    $(this).fadeOut("slow");
  });
  $("h3").click(function() {
    $("dt").fadeIn("slow");
  });
  $("#orderedlist").addClass("red");
  $("#orderedlist li").addClass("blue");
  //he añadido la clase yellow en el css
  $("#orderedlist2").addClass("yellow");
  $("#orderedlist2 li").addClass("blue");
  $("#orderedlist li", "#orderedlist2 li").last().hover(
    //el hover es para cuando tiene el raton por encima
    function() {
      $(this).addClass("green");
    },
    function() {
      $(this).removeClass("green");
    }
  );
});
