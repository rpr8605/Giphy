

$(document).ready(function(){
// global


var locals = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']




//functionsion


// creates new bottons to be added to array
var createBtn = function(){
    //remove items from insde the btn-section
    $('#btn-section').empty();

    // creates buttons based on elements in array

    for(var i = 0; i <locals.length; i++){
        // creates new buttons
        var newBtn = $('<button>');
        //giving buttons an attribute

        newBtn.attr('data-type');
        //give button a name from array
        newBtn.text(locals[i]);

        //add button to DOM 

        $('#btn-section').append(newBtn);
    }

}

var submit = function(){
     //when you click submit
    $('#submit-btn').on('click',function(event){
       //prevent from the default form or input events 
    event.preventDefault();
    // Get Input text value
    var userInputVal = $("#userInput").val();
    console.log(userInputVal);
    
    //push user input to array


    });

}











//main

createBtn();
submit();

});





