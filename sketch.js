var canvas

var dog;
var happyDog;
var FoodS;
var FoodStock;
var database;

var dog_img, dog1_img;

function preload(){
  dog_img = loadImage("../images/dogImg.png");
  dog1_img = loadImage("../images/dogImg1.png");
}

function setup(){
  canvas = createCanvas(500, 500);
  dog = createSprite(100,200,15,70);
  dog.addImage(dog_img);
  database = firebase.database();
  FoodStock = database.ref('Food');
  FoodStock.on("value",readStock);
}

function draw() { 
  background(46,139,97) 

  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    happyDog.addImage(dog1_img);
  }
  drawSprites();
  Text(" FoodStock",120,200);
  textSize(20)
  stroke(10)
  fill("red")

}

function readStock(data){
  FoodS = data.val();
}

function writeStock(x){
  if (x<=0) {
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



