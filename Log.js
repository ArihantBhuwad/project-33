class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    // reffering to matter.js library
    //set angles is used for defining angles 
    //giving this command for providing angles to the body
    Matter.Body.setAngle(this.body, angle);
  }
}