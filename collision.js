class collision{
	
	constructor(){
		this.bX=0;
		this.bY=0;
		this.shpX=0;
		this.shpY=0;
		this.eX=0;
		this.eY=0;
		this.alnX=0;
		this.alnY=0;
	}
	set bX(v){
		this._bX=v;
	}
	set alnX(v){
		this._alnX=v;
	}
	set alnY(v){
		this._alnY=v;
	}
	set shpX(v){
		this._shpX=v;
	}
	
	set eX(v){
		this._bX=v;
	}
	set bY(v){
		this._bY=v;
	}
	set shpY(v){
		this._shpY=v;
	}
	set eY(v){
		this._eY=v;
	}
	
	get bY(){
		return this._bY;
	}
	get alnY(){
		return this._alnY;
	}
	get alnX(){
		return this._alnX;
	}
	get shpY(){
		return this._shpY;
	}
	get eY(){
		return this._eY;
	}get bX(){
		return this._bX;
	}get eX(){
		return this._eX;
	}get shpX(){
		return this._shpX;
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
	damage(sX,sY,aX,aY){
		this._shpX=sX;this._shpY=sY;this._alnX=aX;this._alnY=aY;
		var diss=dist(this._shpX,this._shpY,this._alnX,this._alnY);
		//print(diss);
		if(diss<30){
			print('oops');
			return true;
		}
	}
}