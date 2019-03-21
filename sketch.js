let shp;
let aln;
let alien;
let ship;
let hud;
let blts;
let bulletGroup=[];
let alienGroup=[];
let isPaused=false;
let coli;
let score=0;
function preload() {
  shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/assets/ship.bmp');  
  //shp = loadImage('https://determinately-torqu.000webhostapp.com/Alien%20Game/assets/ship.bmp');
  aln=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/enemyAlien.bmp');
  //aln=loadImage('https://determinately-torqu.000webhostapp.com/Alien%20Game/assets/enemyAlien.bmp');
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
		else if(key==='p'){
			if(!isPaused){
				isPaused=true;
				noLoop();
			}
			else{
				isPaused=false;
				loop();
			} 
		}
}

function mouseDragged() {
if(mouseX-pmouseX>0){
	ship.shipX+=20;
}
else if(mouseX-pmouseX<0){
	ship.shipX-=20;
}
}
function setup() {
  createCanvas(600, 600);
  ship=new spaceship(250,554);
  hud=new HUD();
  coli=new collision();
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
	attack();
	for(let j=0;j<alienGroup.length;j++){
		alienGroup[j].update();
	}
	hud.update();
	}

function attack(){	
	if(alienGroup.length==0){
		alien=new Alien(random(width),-5);
		alienGroup.push(alien);
	} 
	for(let l=alienGroup.length-1;l>=0;l--){
		  
		  if(alienGroup.length == 1 && alienGroup[l].alienY>=250 && alienGroup[l].alienY<=350){

			alien=new Alien(random(width),-5);
			alienGroup.push(alien);
			}
			
		if(alienGroup[l].alienY>600){
			alienGroup.splice(0,1);
			continue;
		}
		if(alienGroup[l].toDelete){
					text('BOOM',alienGroup[l].alienX,alienGroup[l].alienY)
					alienGroup.splice(l,1);
					continue;
		}
	}
	for(let i=0;i<bulletGroup.length;i++){		
			if(bulletGroup[i].toDelete){
			bulletGroup.splice(i,1)
	} }
}
