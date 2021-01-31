class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.image = loadImage("walking_1.png")
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,300);
    }
}