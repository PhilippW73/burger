$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    //var eaten = $(this).data("eaten");

    var eatenStatus = {
      devoured: TRUE
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenStatus
    }).then(
      function() {
        console.log("changed status to", eaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#bu").val().trim(),
//       devoured: FALSE
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// };