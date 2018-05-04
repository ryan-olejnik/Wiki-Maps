$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((res) => {
      $("<div>").text(res).appendTo($("body"));
  });
});
