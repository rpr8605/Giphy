//Initial array of chars	
$(document).ready(function() {

    var Hensons = ["Kermit", "Miss Piggy", "Gonzo", "Fozzie Bear", "Big Bird", "Burt and Ernie", "Elmo", "Dr. Teeth", "Waldorf", "Sweedish Chef", "Dark Crystal", "Fraggle", "Cookie Monster"];	
  
    //  create Hensons array buttons
    function renderButtons(){
      $('#buttons-view').empty();
  
      for (var i = 0; i < Hensons.length; i++) {
              //create all buttons
              var a = $('<button>');
              a.addClass('puppet');
              a.attr('data-name', Hensons[i]);
              a.text(Hensons[i]);
              $('#buttons-view').append(a);
            }
          }    
          renderButtons();
  
  //on button click
  $(document).on('click', '.puppet', function() {
  
      //new variable will log the text data from each button
      var jHenson = $(this).html(); 
      // console.log(martialArts);
  
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + jHenson + "&api_key=oI9bkplfjo4HkJeR9WJOQto90ZidXLGK&limit=20";
      // console.log(queryURL);
  
      // Creating an AJAX call for the specific char button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
  
        var results = response.data;
          //console.log(results);
          //empties the div before adding more gifs
          $('#chars-view').empty();
          for ( var j=0; j < results.length; j++) {
                      var imageDiv = $('<div>');
                      var imageView = results[j].images.fixed_height.url;
                      var still = results[j].images.fixed_height_still.url;
                          // console.log(imageView);  
  
          var gifImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                      gifImage.attr('data-state', 'still');
                      $('#chars-view').prepend(gifImage);
                      gifImage.on('click', playGif);
  
          // Pulling ratings for each char
          var rating = results[j].rating;
              // console.log(rating);
          var displayRated= $('<p>').text("Rating: " + rating);
          $('#chars-view').prepend(displayRated);
    } // end for loop
  
  }); // done response
  
          //function to stop and animate gifs
          function playGif() { 
                      var state = $(this).attr('data-state');
                      // console.log(state);
                   if (state == 'still'){
                       $(this).attr('src', $(this).data('animate'));
                        $(this).attr('data-state', 'animate');
                   } else{
                       $(this).attr('src', $(this).data('still'));
                       $(this).attr('data-state', 'still');
                      }
  
                  } //end of on click function
  
        }); //end of document on click 
  
            //adding new button to array
          $(document).on('click', '#add-char', function(){
              if ($('#char-input').val().trim() == ''){
                alert('Input can not be left blank');
             }
             else {
              var chars = $('#char-input').val().trim();
              Hensons.push(chars);
              $('#char-input').val('');
              renderButtons();
              return false;
  
              }
  
          });
                        
  
          }); // end click function
  