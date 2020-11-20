class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            density:1,
            
            restitution:0,
            friction:0.9

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage('mango.png');
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        
        //this.height=height;
    }
    display(){
        var pos=this.body.position;
        push();
        
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("yellow");
        //strokeWeight(3);
        //stroke("green");
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        
        pop();
    }
}