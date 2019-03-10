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