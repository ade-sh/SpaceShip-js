let shp;
let aln;
let alien;
let ship;
let hud;
let blts;
let bulletGroup=[];
let alienGroup=[];
let isPaused=false;
let gameover=false;
let coli;
let score=0;
let highScore=0;
let lyf_sym1;
let lyf_sym2;
let lyf_sym3;
let life=3;
function preload() {
  shp = loadImage('https://raw.githubusercontent.com/ade-sh/python-projs/master/Alien/assets/ship.bmp');  
  //shp = loadImage('https://determinately-torqu.000webhostapp.com/Alien%20Game/assets/ship.bmp');
  aln=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/enemyAlien.bmp');
  //aln=loadImage('https://determinately-torqu.000webhostapp.com/Alien%20Game/assets/enemyAlien.bmp');
  lyf_sym1=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/life.jpg');
  lyf_sym2=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/life2.jpg');
  lyf_sym3=loadImage('https://raw.githubusercontent.com/ade-sh/SpaceShip-js/master/life3.jpg');

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
		else if(key==='r'){
			loop();
			gameover=false;
			score=0;
			life=3;
			alienGroup=[];
			bulletGroup=[]; 
		}
}

function mouseMoved() {
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
	if(life===0){
		gameover=true;
		hud.update();
		noLoop();
	}
	if(score>highScore){
		highScore=score;
	}
	hud.update();
}

function attack(){ 
try {
	if(alienGroup.length==0){
		alien=new Alien(random(width),-5);
		alienGroup.push(alien);
		}
	let randShp=random(5);
	if(alienGroup.length<=4   && randShp>4){
			alien=new Alien(random(width),-5);
			alienGroup.push(alien);
		  }
	for(let l=alienGroup.length-1;l>=0;l--){
		let boom=coli.damage(ship.shipX,ship.shipY,alienGroup[l].alienX,alienGroup[l].alienY);
		if(boom){
			life--;
			print("life : "+life);
			text('BOOM',alienGroup[l].alienX,alienGroup[l].alienY);
			alienGroup.splice(l,1);
			boom=false;
			continue;
		}
		  if(l<=3 && alienGroup[l].alienY==250){
			alien=new Alien(random(width),-5);
			alienGroup.push(alien);
		  }
		if(randShp<4 && l<=3 && alienGroup[l].alienY==350){
			alien=new Alien(random(width),-5);
			alienGroup.push(alien);
	 }
		if(alienGroup[l].alienY>600){
			alienGroup.splice(0,1);
			continue;
		}
		for(let i=0;i<bulletGroup.length;i++){
			let blas=coli.hits(alienGroup[l].alienX,alienGroup[l].alienY,bulletGroup[i].bulletX,bulletGroup[i].bulletY);
				if(blas){
					score++;
					text('BOOM',alienGroup[l].alienX,alienGroup[l].alienY)
					alienGroup.splice(l,1);
					bulletGroup.splice(i,1);
					continue;
				}
		}
	}

}
catch(err) {
	redraw();
}
}
