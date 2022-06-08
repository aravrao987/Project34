class Fish{
    constructor(x, y, width, height, fishPos, fishAnimation){
        // var options = {
        //     restitution: 0.8,
        //     friction: 1.0,
        //     density: 1.0
        
        // };
        this.animation = fishAnimation;
        this.speed = 0.05;
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.fishPosition = fishPos;

        World.add(world, this.body);
    }
    animate(){
       this.speed+=0.05;
    }
  
    // remove(index){
    //    setTimeout(() =>{
    //     Matter.World.remove(world, fishes[index].body)
    //     delete fishes[index]
    //   }, 2000)
    //    } 

       display(){
           var angle = this.body.angle;
           var pos = this.body.position;
           var index = floor(this.speed % this.animation.length);

           push();
           translate(pos.x, pos.y);
           rotate(angle);
           imageMode(CENTER);
           image(this.animation[index], 0, this.fishPosition, this.width, this.height);
           noTint();
           pop();
       }
    }
