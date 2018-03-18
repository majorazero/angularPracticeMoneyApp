const EST_INFLATE = .02;
function adjust(value){
	return Math.round(value*100)/100;
};
function cGrowth(initMon,weekMon,year,estGrow){
	let sum = initMon; 
	let investAmt = initMon; let calGrow = estGrow/52 ; 
	let cnt = 52*year;
	while (cnt != 0){
		sum = (sum+weekMon)*(1+calGrow);
		investAmt += weekMon;
		cnt--;
	}
	alert(
	`Invested Amount: ${investAmt}
	Final Amount: ${adjust(sum)} (${adjust(sum*100/investAmt)}%)
	Rough Present Value: ${adjust(sum*Math.pow(1-EST_INFLATE,year))}
	Gain: ${adjust(sum-investAmt)} `);
	return sum;
}

cGrowth(20000,100,40,.1);