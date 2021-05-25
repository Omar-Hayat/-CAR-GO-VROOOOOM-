class Player{
    constructor(){
       this.index=null;
       this.name=null;
       this.distance=0;
    }

    //read part
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", (data)=>{
            playerCount= data.val();
        })
    }

    //write part
    //('/') refers to entire database
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update (){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
     //static functions are those which are called by the class and not the object inside.
   static getPlayerInfo (){
        var playerInfoRef = database.ref('players')
       playerInfoRef.on("value", (data)=>{
       allPlayers = data.val();
    })
   }

}