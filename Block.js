class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visbility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();

        //add tint for making the block diapper slowly
        if(this.body.speed<3){
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          tint(255,this.visbility);
          this.visbility = this.visbility - 5;
        }

        pop();
      }
}