
var database
var game,player,form
var playerCount=0
var gameState=0
var allPlayers

var car1 , car2 , car3 , car4 , cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    //created a database out of firebase
    database=firebase.database();
   game= new Game();
   game.getState();
   game.start(); 
   
}

function draw(){
    if(playerCount === 4){
        game.updateState(1);
    }
    if(gameState === 1){
        clear()
        game.play();
    }
}
