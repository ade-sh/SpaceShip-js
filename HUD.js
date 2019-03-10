class HUD{
	update(){
		textSize(20);
	let remBts=5-bulletGroup.length;
	let ss='Bullets:'+ remBts;
	text(ss,509,16);
	}
}