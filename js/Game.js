class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var dinosaurCountRef = await database.ref('dinosaurCount').once("value");
        if(dinosaurCountRef.exists()){
          dinosaurCount = dinosaurCountRef.val();
          dinosaur.getCount();
        }
        form = new Form()
        form.display();
      }
  
      dinosaur1 = createSprite(100,200);
      dinosaur1.addImage("");
      dinosaur2 = createSprite(300,200);
      dinosaur2.addImage("");
      dinosaur3 = createSprite(500,200);
      dinosaur3.addImage("");
      dinosaur4 = createSprite(700,200);
      dinosaur4.addImage("");
      dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    }
  
    play(){
      form.hide();
      
      Dinosaur.getDinosaurInfo();
      
      if(allDinosaurs !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allDinosaur[plr].distance;
          dinosars[index-1].x = x;
          dinosaurs[index-1].y = y;
  
          if (index === dinosaur.index){
            strokeWeight(17);
            stroke(0,0,255);
            ellipse(x,y,75,75);
            dinosaurs[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        dinosaur.distance +=10
        dinosaur.update();
      }
  
      if(dinosaur.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  