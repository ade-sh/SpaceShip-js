class Alien
{
	constructor(X,Y){
		this._alienX=X;
	    this._alienY=Y;
	} 
	set alienX(value){
		this._alienX=value;
	}
	set alienY(value){
		this._alienY=value;
	}
	get alienX(){
		return this._alienX;
	}
	get alienY(){
		return this._alienY;
	}
	update(){
		if(this.alienY>600){
			alienGroup.splice(0,1);
		}
	//Limiting Play area
	this._alienY+=3;
	if(this.alienX<=0){ 
	this.alienX = 0;
	}
	else if(this.alienX>=540){
	this.alienX=540;
	}
	this.drawAlien();
	}
	
	drawAlien(){
		image(aln,alien.alienX,alien.alienY);
		//image(aln,250,250);
	}
}