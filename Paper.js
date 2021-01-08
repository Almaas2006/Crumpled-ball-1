class Paper {
    constructor(x,y,r){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
            isStatic: false
        }
        
        this.body = Bodies.circle(x,y,r,options);
        this.r= r;
        this.x=x;
        this.y=y;
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0, this.r , this.r);
        pop();
    }
}