// extends is use for reffering to parent class
class Bird extends BaseClass {
  constructor(x,y){
    //super is used for extracting all the info from the parent file 
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //path which is followed  by the objects 
    this.trajectory =[];
  }

  display() {
// displaying the complete object with the parent file property
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      //[]this is used for creating array . (which is a memory )
      var position = [this.body.position.x, this.body.position.y];
      // for all the changing position of the trajectory when the bird moves
      this.trajectory.push(position);
    }
   
// for making the continuous smoke on the screen 
//[i][0] i refers to the representation of all the numbers
// and 0 is the initial position from where the game starts
// 1 is for the end position till bird will go 
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
