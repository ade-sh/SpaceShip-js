let shp;
let ship;
let hud;
let blts;
let bulletGroup=[];
function preload() {
  //shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/images/ship.bmp');
  shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/assets/ship.bmp');  
}
class spaceship
{
	constructor(X,Y){
		this._shipX=X;
	    this._shipY=Y;
	} 
	set shipX(value){
		this._shipX=value;
	}
	set shipY(value){
		this._shipY=value;
	}
	get shipX(){
		return this._shipX;
	}
	get shipY(){
		return this._shipY;
	}
	update(){
	if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
		this.shipX-=5;
	}
	else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
		this.shipX += 5;
	}
	
	//Limiting Play area
	if(this.shipX<=0){ 
	this.shipX = 0;
	}
	else if(this.shipX>=540){
	this.shipX=540;
	}
	this.drawShip();
	}
	
	drawShip(){
		image(shp,ship.shipX,ship.shipY);
	}
}
class Bullets{
	constructor(X,Y){
		this.bulletX=X;
	    this.bulletY=Y;
	} 
	 set bulletX(value){
		this._bulletX=value;
	 }
	 
	 get bulletX(){
		 return this._bulletX;
	 }
	 
	 set bulletY(value){
		this._bulletY=value;
	 }
	 
	 get bulletY(){
		 return this._bulletY;
	 }
	 
	 update(){
		 this.bulletY-=3;
		 rect(this.bulletX,this.bulletY,3,10);
		 if(this.bulletY<=-2){
			 bulletGroup.splice(0,1);
		 }
		 
	 }
	 
	 drawBullets(){
		 rect(this.bulletX,this.bulletY,3,10);
	 }
}
class HUD{
	update(){
		textSize(20);
	let remBts=5-bulletGroup.length;
	let ss='Bullets:'+ remBts;
	text(ss,509,16);
	}
}
function mousePressed() {
	 if(bulletGroup.length<=4){
	blts=new Bullets(ship.shipX+28,ship.shipY-8);
	fill(0);
	blts.drawBullets(this.bulletX,this.bulletY);
	bulletGroup.push(blts);
	} 
}
function setup() {
  createCanvas(600, 600);
  ship=new spaceship(250,554);
  hud=new HUD();
}


function draw() {
	clear();
	background('indigo');
	fill('white');
	//rect(278,546,3,10);
	
	ship.update();
	for(let i=0;i<bulletGroup.length;i++){
		bulletGroup[i].update();
	}
	hud.update();
}