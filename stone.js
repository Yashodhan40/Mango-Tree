class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1
            
           
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage('stone.png')
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
       

    }
    display(){
        var pos=this.body.position;
       // rectMode(CENTER)
       
        push();
        translate(pos.x,pos.y);
        fill("black");
       // strokeWeight(3);
        //stroke("pink");
        //this.image=loadImage("stone.png");
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}