class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
   //something which is seen on screen 
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   //speed defines the scores in the game 
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     //for slowly disappearing the pg from screen 
     this.Visiblity = this.Visiblity - 5;
     //for adjusting all the colors on the screen 
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};