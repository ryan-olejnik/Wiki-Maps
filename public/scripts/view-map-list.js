$( document ).ready(function() {

  $(".poi-container").on("click", ".poi-title", function() {

    console.log('bang');

    // $(this).find(".poi-body").slideToggle("slow");

    // $(this).next().find(".poi-body").slideToggle("slow");


    $(this).next().slideToggle("slow");


  });

});

