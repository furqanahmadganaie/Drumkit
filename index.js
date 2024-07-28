// alert("hey!"); just try
// document.querySelector("button").addEventListener("click",handleclick);
// handleclick is a function agr hum isskohandleclick() 
// aselikhe gayto yai automai run ho jayage thatis wyhum nai issko handkleclick likha 


// function handleclick()
// {
//     alert("i was clicked");
// }
// higher order function which can take function as input 
// function multiple(num1,num2)
// {
//     return num1*num2;
// }
// function add(num1,num2)
// {
//     return num1+num2;
// }

// calculate function(num1,num2,operator)
// {
//     return operator(num1,num2);

// }

// calculate(3,4,add);

// we canuse anynomous function alsso
// now to add avent lister to all buttons weahve to use loop

// detecting  button press



var numberOfdrums=document.querySelectorAll(".drum").length;

for( var i=0; i<numberOfdrums; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;//thiswilltrigererd theevent
     

// thisused when keyboardkeysare not usedjustused click
    // switch(buttonInnerHTML)


    //     {
    //         case "w":
    //             var tom1=new Audio("sounds/tom-1.mp3");
    //             tom1.play();
    //             break;
    //          case "a":
    //                 var tom2=new Audio("sounds/tom-2.mp3");
    //                 tom2.play();
    //                 break;
    //         case "s":
    //                     var tom3=new Audio("sounds/tom-3.mp3");
    //                     tom3.play();
    //                     break;
    //         case "d":
    //                         var tom4=new Audio("sounds/tom-4.mp3");
    //                         tom4.play();
    //                         break;
    //         case "j":
    //                             var snare=new Audio("sounds/snare.mp3");
    //                             snare.play();
    //                             break;
    //         case "k":
    //                                 var crash=new Audio("sounds/crash.mp3");
    //                                 crash.play();
    //                                 break;
                                   
    //         case "l":
    //                             var kick=new Audio("sounds/kick-bass.mp3");
    //                              kick.play();
    //                             break;

    //         default:  console.log(buttonInnerHTML)                  
                                                                
    //     }


    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);



   });
}

//detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
    

});


function makeSound(key){

    switch(key)


    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
         case "a":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s":
                    var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
        case "d":
                        var tom4=new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;
        case "j":
                            var snare=new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
        case "k":
                                var crash=new Audio("sounds/crash.mp3");
                                crash.play();
                                break;
                               
        case "l":
                            var kick=new Audio("sounds/kick-bass.mp3");
                             kick.play();
                            break;

        default:  console.log(buttonInnerHTML)                  
    }
}


function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');//adding classto  html


    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
