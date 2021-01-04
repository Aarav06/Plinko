class Particle{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution:0.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.color = color(random(0,255), random(0,255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(this.color);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}