class Ball 
{
   constructor(x, y, r, angle)
   {
       var options = 
       {
          density : 1,
          frictionAir : 0.005
       }
       this.body = Bodies.circle(x,y,r,options)
       this.r = r
       World.add (world,this.body)
   }
   display()
   {
       var angle = this.body.angle
       var position = this.body.position
       push()
       translate(position.x, position.y)
       rotate(angle)
       fill("darkblue");
       ellipseMode(RADIUS)
       ellipse(0,0, this.r, this.r)
       pop()
    }
}