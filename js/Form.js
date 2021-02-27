class Form{
    constructor(){
        this.input = createInput('DINOSAUR')
        this.button = createButton('PLAY')
        this.greeting = createElement('h1')
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();

    }
    display(){
    var title = createElement('h1')
    title.html("DINOSAUR RUNNER");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      dinosaur.name = this.input.value();
      dinosaurCount+=1;
      dinosaur.index = dinosaurCount;
      dinosaur.update();
      dinosaur.updateCount(dinosaurCount);
      this.greeting.html("GAME TIME " + dinosaur.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

  }
}

        
    