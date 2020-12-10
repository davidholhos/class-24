class Bird{
    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0, 0,20,20);
        pop();
      
    }
}