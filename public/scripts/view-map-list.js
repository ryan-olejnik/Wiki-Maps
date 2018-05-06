$( document ).ready(function() {

  $(".poi-container").on("click", ".poi-title", function(event) {



    // $(this).find(".poi-body").slideToggle("slow");

    // $(this).next().find(".poi-body").slideToggle("slow");





    // if(event.target.id != target) {

    $(".poi-body").slideUp("slow");

    console.log('bang');

    // }

    $(this).next().slideDown("slow");

  });

});

