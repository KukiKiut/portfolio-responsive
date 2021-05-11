$(document).ready(function() {
    $(".mas").on("click", function() {
      $(".desplegar").toggle();
      if ($(this).text() == "Leer menos") {
        $(this).text("Leer más");
      } else {
        $(this).text("Leer menos");
      }
    });
  });