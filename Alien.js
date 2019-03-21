let ai;
class Alien
{
	constructor(X,Y){
		
		this._alienX=X;
	    this._alienY=Y;
		this._toDelete=false;
	} 
	set alienX(value){
		this._alienX=value;
	}
	
	set alienY(value){
		this._alienY=value;
	}
	
	set toDelete(value){
		this._toDelete=value;
	}
	
	get toDelete(){
		return this._toDelete;
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
	this._alienX = 0;
	}
	else if(this.alienX>=540){
	this._alienX=540;
	}
	this.drawAlien();
	}
	
	drawAlien(){
		if(!this.toDelete){
			//rect(this.alienX,this.alienY,3,10);
		image(aln,this.alienX,this.alienY);
		//image(aln,250,250);
	}else{
		print('nogo');
	}
	
}


}