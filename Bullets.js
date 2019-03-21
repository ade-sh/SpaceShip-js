class Bullets{
	constructor(X,Y){
		this.bulletX=X;
	    this.bulletY=Y;
		this._toDelete=false;
	} 
	 set bulletX(value){
		this._bulletX=value;
	 }
	 
	 get bulletX(){
		 return this._bulletX;
	 }
	 set toDelete(value){
		this._toDelete=value;
	}
	get toDelete(){
		return this._toDelete;
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
		 for(let l=alienGroup.length-1;l>=0;l--){
		 let blas=coli.hits(alienGroup[l].alienX,alienGroup[l].alienY,this.bulletX,this.bulletY);
				if(blas){
					print('true');
					alienGroup[l].toDelete=true;
					this._toDelete=true;
					score++;
				}
		 }
	 }
	 
	 drawBullets(){
		 if(!this.toDelete){
		 rect(this.bulletX,this.bulletY,3,10);
	 }
	 }
}