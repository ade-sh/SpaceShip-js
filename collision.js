class collision{
	
	constructor(){
		this.bX=0;
		this.bY=0;
		this.sX=0;
		this.sY=0;
		this.eX=0;
		this.eY=0;
	}
	set bX(v){
		this._bX=v;
	}
	set sX(v){
		this._sX=v;
	}
	
	set eX(v){
		this._bX=v;
	}
	set bY(v){
		this._bY=v;
	}
	set sY(v){
		this._sY=v;
	}
	set eY(v){
		this._eY=v;
	}
	
	get bY(){
		return this._bY;
	}
	get sY(){
		return this._sY;
	}
	get eY(){
		return this._eY;
	}get bX(){
		return this._bX;
	}get eX(){
		return this._eX;
	}get sX(){
		return this._sX;
	}
	hits(bX,bY,eX,eY){
		this._bX=bX;this._bY=bY;this._eX=eX;this._eY=eY;
		var dis=dist(this._eX,this._eY,this._bX,this._bY)
		//print(dis);
		if(dis < 30){
			print('boom');
			return true;
		} 
	}
	
}