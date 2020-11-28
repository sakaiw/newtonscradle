class Rope{
    constructor(body1, body2, offsetX){
              
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: offsetX, y: 0}
        }
        //console.log(options);
        this.xOffset = offsetX;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            stroke("saddlebrown");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x + this.xOffset, pointB.y);
            pop();
        
    }
}