function Task(div,stepL,stepT){
	this.div=div;
	this.stepL=stepL;
	this.stepT=stepT;
}
var animation={
	DURATION:0,
	STEPS:200,
	interval:0,
	timer:null,
	moved:0,
	CSIZE:100,
	OFFSET:16,
	tasks:[],
	init:function(){
		this.interval=this.DURATION/this.STEPS;
	},
	addTask:function(){//将要移动的div和步长添加到数组
		var div=;
		var stepL=;
		var stepT=;
		this.tasks.push(new Task(div,stepL,stepT));
		
	},
}