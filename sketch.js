
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  playerImg = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png");
  stoneGroup=new Group();
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(1000,300);
  bg.addImage(backgroundImg);
  bg.velocityX=-5;
  bg.scale=2;
  player=createSprite(500,500,20,40);
  player.addImage(playerImg);
  player.scale=0.3;
  player.debug=true;
  ground=createSprite(500,600,1000,10)
}

function draw() {
  
  player.collide(ground);
  if(keyDown("up")){
    player.velocityY=-10;
  }
  if(keyDown("left")){
    player.x=player.x-5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  player.velocityY=player.velocityY+0.5;

  if(bg.x<100)
  {
      bg.x=800;
  }
  genreateStones();
  for(var i = 0 ; i< (stoneGroup).length ;i++){
    var temp = (stoneGroup).get(i) ;
    if (player.isTouching(temp)) {
        player.collide(temp);
        temp=null;
      }   
    }
    drawSprites();
}

function genreateStones(){
  if (frameCount% 60 == 0){
    stone=createSprite(random(100,800),50,40,20);
    stone.velocityY=6;
    stone.addImage(stoneImg);
    stoneGroup.add(stone);
  }
}
