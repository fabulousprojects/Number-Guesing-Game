var num = Math.floor((Math.random() * 1000) + 1);

document.getElementById("go_button").style.opacity = 0;
document.getElementById("guessing_input").style.opacity = 0;

function isNumber(e)
{
    var keyCode = (e.which) ? e.which : e.keyCode;

    if (keyCode > 31 && (keyCode < 48 || keyCode > 57))
    {
        alert("You can enter only numbers 0 to 9 ");
        return false;
    }
    if (keyCode === 13)
    {
        logic();
    }
  
    return true;
}



function start() 
{
    document.getElementById("guessing_input").style.opacity = 1;

          //stylin' go button

              document.getElementById("go_button").style.opacity = 1;

            
            //removing start button

            var start_button = document.getElementById("start_button");
            start_button.remove();

            
            
}

function logic() 
{
    var value = document.getElementById("guessing_input").value;


    if (value > 1000 || value < 0) 
    {
        alert("Please enter a number between 0 and 1000.");
        document.getElementById("guessing_input").value = null;
      isNumber(e)
       
    }


    if (value < num) 
    {
        var lower = document.getElementById("remark").innerHTML = "Your Number Is Lower Than My number";
        window.array_lower = document.createElement("p");
        var x =  array_lower.className = "lower_remark";
        document.body.appendChild(array_lower);
        array_lower.innerHTML = `${lower} - ${value}`;
 
    }

        else
        {
            if(value > num) 
            {
                var higher = document.getElementById("remark").innerHTML = "Your Number Is Bigger Than My Number";
                window.array_higher = document.createElement("p");
                var x =  array_higher.className = "higher-remark";
                document.body.appendChild(array_higher);
                array_higher.innerHTML = `${higher} - ${value}`;
            }

                else 
                {
                    var you_win = document.getElementById("remark").innerHTML = "You win";
                    var array = document.createElement("p");
                    var x = array.className = "winning_remark";
                    document.body.appendChild(array);
                    var style = document.createElement('style');
                    style.innerHTML = `
                    .higher-remark 
                        {
                            display: none;
                        }

                    .lower_remark
                        {
                            display:none;
                        }

                     .body
                        {
                            background-color: blue;
                            opacity:0.8;
                        }

                    .winning_remark 
                        {
                            font-size: xx-large;
                            opacity: 1;
                        }

                    `;
                    document.head.appendChild(style);
                    document.getElementById("newButton").innerHTML = "Try Again"

                }
        }
 
}