class ground
{
	constructor(x,y,w,h/*,angle*/)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        //Matter.Body.setAngle(this.body,angle)
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
           // var angle=this.body.angle;
			push()
			translate(groundPos.x, groundPos.y);
		//	rotate(angle)
         //   angleMode(DEGREES)

            rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}