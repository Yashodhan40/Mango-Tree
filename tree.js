class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            density:0.5,
            friction:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image= loadImage('tree.png');
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.image,0,0,this.x,this.y,this.width,this.height);
    }
}