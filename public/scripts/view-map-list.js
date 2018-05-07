$( document ).ready(function() {


  // Opening and closing body contents
  $(".poi-container").on("click", ".poi-title", function(event) {
    // If to see if div is alreay body
    if (!$(this).next().is(":visible")) {
      $(".poi-body").slideUp("slow");
      $(this).next().slideDown("slow");
    } else {
      $(this).next().slideUp("slow");
    }


    // Open infowindow of selected map item
    var $marker = $(this).data('marker');
    google.maps.event.trigger(markers[$marker], 'click');

  });


  $('#like-button').on('click', function(event) {

    event.preventDefault();

    if ($(this).find('#like-icon').hasClass('unliked')) {
      $(this).find('#like-icon').removeClass('far fa-heart fa-2x unliked').addClass('fas fa-heart fa-2x liked');
    } else {
      $(this).find('#like-icon').removeClass('fas fa-heart fa-2x liked').addClass('far fa-heart fa-2x unliked');
    }

  });



  // Another way of getting markers infowindow to show on map
  // $('.list-group .poi-title').each(function(i, e) {
  //   $(e).click(function(i) {
  //     return function(e) {
  //       google.maps.event.trigger(markers[i], 'click');
  //     }
  //   }(i));
  // });






});
