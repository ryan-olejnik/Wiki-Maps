// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((res) => {
//       $("<div>").text(res).appendTo($("body"));
//   });
// });

$( document ).ready(function() {
  slowScroll()
  console.log( "ready!" );
});
