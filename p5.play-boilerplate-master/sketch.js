var player;
var zombie;
function setup(){
    createCanvas(500,500)
}
function draw(){
    background("Purple")
    drawSprites();
    Player();
    if (keyDown("space")){
        zombie();
        Enemy();
        Enemy2();
        Enemy3();    
        
    }
}
function zombie(){
   var zombie1=createSprite(20,250,20,20)
    //zombie.y= zombie.y+2
    //zombie.x= zombie.x+2
    zombie1.velocity.y = 0
    zombie1.velocity.x = 3
    console.log(zombie1) 
} 
function Enemy(){
    var zombie2= createSprite(480,250,20,20)
    zombie2.velocity.y = 0
    zombie2.velocity.x = -3
    console.log(zombie2)
}
function Enemy2(){
    var zombie3= createSprite(250,480,20,20)
    zombie3.velocity.y = -3
    zombie3.velocity.x = 0
    console.log(zombie3)
}
function Enemy3(){
    var zombie4= createSprite(250,20,20,20)
    zombie4.velocity.y = 3
    zombie4.velocity.x = 0
    console.log(zombie4)
}
function Player(){
    var player= createSprite(250,250,20,20)
    player.shapeColor = "Red"    
    player.x = mouseX
    player.y = mouseY
}