//parent class 
class BaseClass{
  // initializing the objects
    constructor(x, y, width, height, angle) {
       // this is for the two libraries together in code
      var options = {
          // bouciness of an object
            'restitution':0.8,
            //opposite force which work on the object 
            'friction':1.0,
            //mass of an object 
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        // adding a world to the object by using the world from matter.js
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //for changing positions 
        push();
        //updating  all the changing position 
        translate(this.body.position.x, this.body.position.y);
      // giving angles inside the code 
        rotate(angle);
//for keeping the image in between the screen no matter what is the sixe of canvas 
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       //resetting 
        pop();
      }
}