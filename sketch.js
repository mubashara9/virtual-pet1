//Create variables here
var dog, happydog, database;
var foodS, foodStock, dogimg, happydogimg;
function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database= firebase.database();
  dog = createSprite(250,350,50,50);
  dog.addImage(dogimg);

 // happydog = createSprite(300,350,50,50);
  
dog.scale = 0.3
  foodStock= database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogimg)
}

textSize(20);
fill("yellow");
noStroke();
text("Note: Press UP arrow to feed the dog", 100,100)

text("Foodcount: "+foodS,100,50)
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val()

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}