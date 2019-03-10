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