class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visbility = 255;
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        imageMode(CENTER);
        
        //add tint for making the block diapper slowly
        if(this.body.speed<3.5){
          image(this.image, pos.x, pos.y, 30, 40 );
        }
        else{
          World.remove(world, this.body);
          push()
          tint(255,this.visbility);
          image(this.image, pos.x, pos.y, 30, 40 );
          this.visbility = this.visbility - 5;
          pop()
        }
        
      }
}