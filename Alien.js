let ai;
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
		
	ai=new AI();
	this._alienY+=2;
	ai.getXdir(this._alienX);
	this._alienX=this.alienX+(ai.getMovement());
	
	//Limiting Play area
	if(this.alienX<=0){ 
	this.alienX = 0;
	}
	else if(this.alienX>=540){
	this.alienX=540;
	}
	this.drawAlien();
	}
	
	drawAlien(){
		image(aln,this.alienX,this.alienY);
		//image(aln,250,250);
		
	}
}