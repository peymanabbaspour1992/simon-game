$(document).keypress(function(){
    start_game();
});

function random_color()
{
    
     var number = Math.floor(Math.random() * 4) + 1;
     
     if(number == 1)
        var button_light = "green";
     else if(number == 2)
        var  button_light = "red";
     else if(number == 3)
        var button_light = "yellow";
     else
        var  button_light = "blue";

    return button_light;
     
}


var button_light=[];
var level = 1;
var clicked = [];

function start_game(){
    
    var level_banner = "level "+ level; 

    $("h1").text(level_banner);

    var chosen_button = random_color(); //selecting a random button
    button_light.push(chosen_button); //adding chosen button to array

    // showing the chosen button to the player
    var element = document.getElementById(chosen_button); 
    element.classList.add("button_border");
    function remove_border() {
        $("#"+chosen_button).removeClass("button_border");
       }
       setTimeout(remove_border, 400); 
    
    }
    


function reply_click(click_id)
{
    clicked.push(click_id);

    clicked_number = clicked.length;
    
    sliced_button_light = button_light.slice(0,clicked_number);
   
    if(clicked.toString() !== sliced_button_light.toString()){
        
        game_over();
    }


    
    if(clicked.length == button_light.length)  
    {
        if(clicked.toString() === button_light.toString()){
            level++;
            clicked =[];
            start_game();
            
            }
    
    
        
        
        else{
            
            game_over();
        }
    }
    
   
    
 
}

function game_over(){
            clicked =[];
            button_light = [];
            level = 1;
            $("body").css("background-color", "red");
    
            function loos_red_background() {
             $("body").css("background-color", "#012041");
             }
            setTimeout(loos_red_background, 100); 
            start_game();

}




    


