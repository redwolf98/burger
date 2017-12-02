$(function(){

    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");    
        console.log("whatever" + id);
        
        
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT"
        }).then(
          function() {
            console.log("ID" + id + "  devoured");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var burger = {
          burger_name: $("#burgerName").val().trim()          
        };
    
        console.log("The burger is: " + burger.burger_name);
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: burger
        }).then(
          function() {
            console.log(burger.burger_name + " added.");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


});
