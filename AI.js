class AI{
	
	constructor(){
	    this.mvLeft=false;
		this.mvRight=false;
		this.mvNO=false;
		this.alnCrd=0;
		this.waitFlag=0;
		this.alnX=0;
	}
	set alnCrd(value){
		this._alnCrd=value;
	}
	
	set mvLeft(value){
		this._mvLeft=value;
	}
	
	set mvRight(value){
		this._mvRight=value;
	}
	
	set mvNO(value){
		this._mvNO=value;
	}
	set alnX(value){
		this._alnX=value;
	}
	set waitFlag(value){
		this._waitFlag=value;
	}
	get waitFlag(){
		this._waitFlag;
	}
	
	get alnCrd(){
		this._alnCrd;
	}
	get mvLeft(){
		this._mvLeft;
	}
	get mvRight(){
		this._mvRight;
	}
	getXdir(alX){
		this._alnX=alX;
		if(this._waitFlag===0){
			if(this._alnX-ship.shipX>0){
				
				this._mvLeft=true;
				this._mvNO=false;
				this._mvRight=false;
			
			}
			else if(this._alX-ship.shipX<0){
				this._mvLeft=false;
				this._mvRight=true;
				this._mvNO=false;
				}
			else if(this.alX-ship.shipX===0){
				this._mvLeft=false;
				this._mvRight=false;
				this._mvNO=true;
			}
			this._waitFlag=1000;
		}
		
		this._waitFlag=this._waitFlag-1;
	}
	getMovement(){
		if(this._mvLeft){
			this._alnCrd=-1;
		}
		else if(this._mvRight){
			this._alnCrd=1;
		}
		else if(this._mvNO){
			this._alnCrd=0;
		} 
		return this._alnCrd;
		
	}
	
}