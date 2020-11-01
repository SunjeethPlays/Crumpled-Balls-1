class TrashCanWall {
    constructor (x,y,width,height) {

        var options = {
            restitution : 0.5,
            density : 5.0,
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        
        World.add(world, this.body);
    }

    display() {

        var wallpos = this.body.position;

        push();
        rectMode(CENTER);
        fill("red");
        rect(wallpos.x,wallpos.y,this.width,this.height);
        pop();
    }
}