let shp;
let aln;
let alien;
let ship;
let hud;
let blts;
let bulletGroup=[];
let alienGroup=[];
function preload() {
  //shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/images/ship.bmp');
  shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/assets/ship.bmp');  
  aln=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/enemyAlien.bmp');
}


function mousePressed() {
	 if(bulletGroup.length<=4){
		blts=new Bullets(ship.shipX+28,ship.shipY-8);
		fill(0);
		blts.drawBullets(this.bulletX,this.bulletY);
		bulletGroup.push(blts);
	} 
}
function keyPressed(){
	if(key===' '){
		if(bulletGroup.length<=4){
		blts=new Bullets(ship.shipX+28,ship.shipY-8);
		fill(0);
		blts.drawBullets(this.bulletX,this.bulletY);
		bulletGroup.push(blts);
	} 
	}
	else if(key==='e'){	
	alien=new Alien(random(width),-5);
			alienGroup.push(alien);
			alien.drawAlien();
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
	for(let j=alienGroup.length-1;j>=0;j--){
		alienGroup[j].update();
	}
	attack();
	hud.update();
}

function attack(){ 
	if(alienGroup.length<1){
		alien=new Alien(random(width),-5);
		alienGroup.push(alien);
		print(alienGroup.length);
	}  
	
	for(let l=0;l<alienGroup.length;l++){
		print("y"+alienGroup[l].alienY);
		print(alienGroup[l].alienY);
		if(alienGroup[l].alienY>600){
			alienGroup.splice(0,1);
		}/* 
	 if(l=1 && alienGroup[l].alienY===250){
			alien=new Alien(random(width),-5);
			alienGroup.push(alien);
			print("y"+alienGroup[l].alienY);
	 }*/
	}
}