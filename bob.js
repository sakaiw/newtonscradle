class Bob {
    constructor(x) 
    {
        var options={
            
            restitution: 1,
            friction: 0.5,
            density: 0.8

        }
        this.body = Bodies.circle(x,400,25, options);
        this.x = x;
        this.y = 400;
        this.radius = 25;
        World.add(world, this.body);

    } 
    display() {
        var bobPosition = this.body.position;
       
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("firebrick")
        ellipse(bobPosition.x,bobPosition.y,this.radius,this.radius);
    
    }
}