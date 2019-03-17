class HUD{
	update(){
		textSize(20);
	let remBts=5-bulletGroup.length;
	let ss='Bullets:'+ remBts;
	let scrr='Score: '+score;
	text(ss,509,16);
	text(round(getFrameRate()),10,16);
	text(scrr,width/2-200,16);
	if(isPaused){
		text('Paused',width/2,16); 
	  text('WD or <- -> for movement',width/2-100,height/2-30);
	  text('SPACEBAR or Mouseclick to fire',width/2-100,height/2-10);
	  text('Press P to Start',width/2-100,height/2+10); 
	}
	else{
		text('P to Pause',width/2-20,16);
	}
	}
}