class Rope{
    constructor(bodyA,anchor){
        var options={
            bodyA:bodyA,
            pointB:anchor,

            stiffness:0.03,
            length:10
        }
        this.bodyA=bodyA;
        this.pointB=anchor;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }
    attach(body){
        this.rope.bodyA=body
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if (this.rope.bodyA){

        var pointA=this.bodyA.position;
        var pointB=this.pointB;
       // push();
        //translate(pointA.x,pointA.y,pointB.x,pointB.y);
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       // pop();
        }
    }
}