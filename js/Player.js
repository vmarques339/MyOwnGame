class Dinosaur {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var dinosaurCountRef = database.ref('dinosaurCount');
      dinosaurCountRef.on("value",(data)=>{
        dinosaurCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        dinosaurCount: count
      });
    }
  
    update(){
      var dinosaurIndex = "dinosaurs/dinosaur" + this.index;
      database.ref(dinosaurIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getDinosaurInfo(){
      var dinosaurInfoRef = database.ref('dinosaurs');
      dinosaurInfoRef.on("value",(data)=>{
        allDinosaurs = data.val();
      })
    }
  }
  