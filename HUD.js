class HUD{
	update(){
		textSize(20);
	let remBts=5-bulletGroup.length;
	let ss='Bullets:'+ remBts;
	let scrr='Score: '+score;
	let hghscr='Highscore: '+highScore;
	let lyfX=500
	text(ss,509,16);
	text(round(getFrameRate()),10,16);
	text(scrr,width/2-220,16);
	text(hghscr,width/2-120,16); 
	if(life==3){
		image(lyf_sym1,lyfX-30,0);
		image(lyf_sym2,lyfX-62,0);
		image(lyf_sym3,lyfX-92,0);
	}
	else if(life==2){
		image(lyf_sym1,lyfX-30,0);
		image(lyf_sym2,lyfX-62,0);
	}
	else if(life==1){
		image(lyf_sym1,lyfX-30,0);
	}
	if(isPaused){
		text('Paused',width/2,16); 
	  text('WD or <- -> for movement',width/2-100,height/2-30);
	  text('SPACEBAR or Mouseclick to fire',width/2-100,height/2-10);
	  text('Press P to Start',width/2-100,height/2+10); 
	}else if(gameover){
		text('GAME OVER!!',width/2-100,height/2-10);
		text('R to Resart',width/2-100,height/2+10);
	}
	else{
		text('P to Pause',width/2+10,16);
	}
	}
}