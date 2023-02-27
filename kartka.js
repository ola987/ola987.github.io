// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();
loadSprite("background","kartkaswiateczna.png")
loadSprite("gwiazda","gwiazda.png")
loadSound("muzyka","doszopy.mp3")
// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("background"),
    pos(0,0),
]);

const gwiazda = add([
    sprite("gwiazda"),
    pos(550,120),
]);

onUpdate(()=>{

         
    gwiazda.pos.x=gwiazda.pos.x+1

    
        
    // if(gwiazda.pos.x>400)

    // {
    //     gwiazda.pos.x=550
    // }

onKeyPress("space",()=>(
    play("muzyka",{"volume": 0.1})
))
})

    
