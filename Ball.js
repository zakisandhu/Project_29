class Rock{
    constructor(x,y,r){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.x=x;
		this.y=y;
		this.r=r
        this.body = Bodies.circle(this.x,this.y, this.r, options);
        this.image = loadImage("rock.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.poition
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}