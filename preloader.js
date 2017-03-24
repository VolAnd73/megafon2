(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AGQGQIgUAAQk/gHjijjQjjjigHk/IAAgU");
	this.shape.setTransform(40,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-1,79,82,82), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AmPmPIAUAAQE/AHDiDjQDjDiAHE/IAAAU");
	this.shape.setTransform(120,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(79,-1,82,82), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtJNKQlcldAAntQAAnsFclcQFdldHsAAQHtAAFdFdQFcFcAAHsQAAHtlcFdQldFcntAAQnsAAldlcg");
	this.shape.setTransform(119,119);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AJVpSQAAHtlcFcQlcFcntAAQgCAAgCAA");
	this.shape_1.setTransform(178.3,178.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,239,239), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtJNJQlclcAAntQAAnsFcldQFdlcHsAAQHtAAFcFcQFdFdAAHsQAAHtldFcQlcFdntAAQnsAAldldg");
	this.shape.setTransform(119,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApUJTQAAntFclcQFclcHtAAQACAAACAA");
	this.shape_1.setTransform(59.7,60.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-1,0,239,239), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg");
	this.shape.setTransform(4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(0,0,8.3,8.3), null);


// stage content:
(lib.preloader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_111 = function() {
		gotoAndplay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	// Layer 5
	this.instance = new lib.dot();
	this.instance.parent = this;
	this.instance.setTransform(121.2,19.7,1.687,1.687,0,0,0,4.3,4.2);

	this.instance_1 = new lib.dot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.9,21.9,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_2 = new lib.dot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.7,31.3,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_3 = new lib.dot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.9,44.6,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_4 = new lib.dot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(39,62.2,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_5 = new lib.dot();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27.2,80.7,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_6 = new lib.dot();
	this.instance_6.parent = this;
	this.instance_6.setTransform(20.8,102.8,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_7 = new lib.dot();
	this.instance_7.parent = this;
	this.instance_7.setTransform(19.5,125,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_8 = new lib.dot();
	this.instance_8.parent = this;
	this.instance_8.setTransform(22.2,148.8,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_9 = new lib.dot();
	this.instance_9.parent = this;
	this.instance_9.setTransform(32.4,168.2,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_10 = new lib.dot();
	this.instance_10.parent = this;
	this.instance_10.setTransform(44.9,186,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_11 = new lib.dot();
	this.instance_11.parent = this;
	this.instance_11.setTransform(61,200.8,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_12 = new lib.dot();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80.3,211.1,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_13 = new lib.dot();
	this.instance_13.parent = this;
	this.instance_13.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_14 = new lib.dot();
	this.instance_14.parent = this;
	this.instance_14.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_15 = new lib.dot();
	this.instance_15.parent = this;
	this.instance_15.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_16 = new lib.dot();
	this.instance_16.parent = this;
	this.instance_16.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_17 = new lib.dot();
	this.instance_17.parent = this;
	this.instance_17.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_18 = new lib.dot();
	this.instance_18.parent = this;
	this.instance_18.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_19 = new lib.dot();
	this.instance_19.parent = this;
	this.instance_19.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_20 = new lib.dot();
	this.instance_20.parent = this;
	this.instance_20.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_21 = new lib.dot();
	this.instance_21.parent = this;
	this.instance_21.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_22 = new lib.dot();
	this.instance_22.parent = this;
	this.instance_22.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_23 = new lib.dot();
	this.instance_23.parent = this;
	this.instance_23.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_24 = new lib.dot();
	this.instance_24.parent = this;
	this.instance_24.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_25 = new lib.dot();
	this.instance_25.parent = this;
	this.instance_25.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_26 = new lib.dot();
	this.instance_26.parent = this;
	this.instance_26.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.instance_27 = new lib.dot();
	this.instance_27.parent = this;
	this.instance_27.setTransform(101,217.5,1.687,1.687,180,0,0,4.3,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_9,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_10,p:{x:44.9,y:186,rotation:180}},{t:this.instance_9,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_11,p:{x:61,y:200.8,rotation:180}},{t:this.instance_10,p:{x:44.9,y:186,rotation:180}},{t:this.instance_9,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_12,p:{x:80.3,y:211.1,rotation:180}},{t:this.instance_11,p:{x:61,y:200.8,rotation:180}},{t:this.instance_10,p:{x:44.9,y:186,rotation:180}},{t:this.instance_9,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_13,p:{x:101,y:217.5,rotation:180}},{t:this.instance_12,p:{x:80.3,y:211.1,rotation:180}},{t:this.instance_11,p:{x:61,y:200.8,rotation:180}},{t:this.instance_10,p:{x:44.9,y:186,rotation:180}},{t:this.instance_9,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_8,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_7,p:{x:19.5,y:125,rotation:180}},{t:this.instance_6,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_5,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_4,p:{x:39,y:62.2,rotation:180}},{t:this.instance_3,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_2,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_1,p:{rotation:180,x:96.9,y:21.9}},{t:this.instance,p:{x:121.2,y:19.7}}]},2).to({state:[{t:this.instance_14,p:{x:101,y:217.5,rotation:180}},{t:this.instance_13,p:{x:80.3,y:211.1,rotation:180}},{t:this.instance_12,p:{x:61,y:200.8,rotation:180}},{t:this.instance_11,p:{x:44.9,y:186,rotation:180}},{t:this.instance_10,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_9,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_8,p:{x:19.5,y:125,rotation:180}},{t:this.instance_7,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_6,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_5,p:{x:39,y:62.2,rotation:180}},{t:this.instance_4,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_3,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_2,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_1,p:{rotation:0,x:121.2,y:19.7}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_15,p:{x:101,y:217.5}},{t:this.instance_14,p:{x:80.3,y:211.1,rotation:180}},{t:this.instance_13,p:{x:61,y:200.8,rotation:180}},{t:this.instance_12,p:{x:44.9,y:186,rotation:180}},{t:this.instance_11,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_10,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_9,p:{x:19.5,y:125,rotation:180}},{t:this.instance_8,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_7,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_6,p:{x:39,y:62.2,rotation:180}},{t:this.instance_5,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_4,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_3,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_2,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_16,p:{x:101,y:217.5}},{t:this.instance_15,p:{x:80.3,y:211.1}},{t:this.instance_14,p:{x:61,y:200.8,rotation:180}},{t:this.instance_13,p:{x:44.9,y:186,rotation:180}},{t:this.instance_12,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_11,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_10,p:{x:19.5,y:125,rotation:180}},{t:this.instance_9,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_8,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_7,p:{x:39,y:62.2,rotation:180}},{t:this.instance_6,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_5,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_4,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_3,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_17,p:{x:101,y:217.5}},{t:this.instance_16,p:{x:80.3,y:211.1}},{t:this.instance_15,p:{x:61,y:200.8}},{t:this.instance_14,p:{x:44.9,y:186,rotation:180}},{t:this.instance_13,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_12,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_11,p:{x:19.5,y:125,rotation:180}},{t:this.instance_10,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_9,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_8,p:{x:39,y:62.2,rotation:180}},{t:this.instance_7,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_6,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_5,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_4,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_18,p:{x:101,y:217.5}},{t:this.instance_17,p:{x:80.3,y:211.1}},{t:this.instance_16,p:{x:61,y:200.8}},{t:this.instance_15,p:{x:44.9,y:186}},{t:this.instance_14,p:{x:32.4,y:168.2,rotation:180}},{t:this.instance_13,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_12,p:{x:19.5,y:125,rotation:180}},{t:this.instance_11,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_10,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_9,p:{x:39,y:62.2,rotation:180}},{t:this.instance_8,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_7,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_6,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_5,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_19,p:{x:101,y:217.5}},{t:this.instance_18,p:{x:80.3,y:211.1}},{t:this.instance_17,p:{x:61,y:200.8}},{t:this.instance_16,p:{x:44.9,y:186}},{t:this.instance_15,p:{x:32.4,y:168.2}},{t:this.instance_14,p:{x:22.2,y:148.8,rotation:180}},{t:this.instance_13,p:{x:19.5,y:125,rotation:180}},{t:this.instance_12,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_11,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_10,p:{x:39,y:62.2,rotation:180}},{t:this.instance_9,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_8,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_7,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_6,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_20,p:{x:101,y:217.5}},{t:this.instance_19,p:{x:80.3,y:211.1}},{t:this.instance_18,p:{x:61,y:200.8}},{t:this.instance_17,p:{x:44.9,y:186}},{t:this.instance_16,p:{x:32.4,y:168.2}},{t:this.instance_15,p:{x:22.2,y:148.8}},{t:this.instance_14,p:{x:19.5,y:125,rotation:180}},{t:this.instance_13,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_12,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_11,p:{x:39,y:62.2,rotation:180}},{t:this.instance_10,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_9,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_8,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_7,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_21,p:{x:101,y:217.5}},{t:this.instance_20,p:{x:80.3,y:211.1}},{t:this.instance_19,p:{x:61,y:200.8}},{t:this.instance_18,p:{x:44.9,y:186}},{t:this.instance_17,p:{x:32.4,y:168.2}},{t:this.instance_16,p:{x:22.2,y:148.8}},{t:this.instance_15,p:{x:19.5,y:125}},{t:this.instance_14,p:{x:20.8,y:102.8,rotation:180}},{t:this.instance_13,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_12,p:{x:39,y:62.2,rotation:180}},{t:this.instance_11,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_10,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_9,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_8,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_22,p:{x:101,y:217.5}},{t:this.instance_21,p:{x:80.3,y:211.1}},{t:this.instance_20,p:{x:61,y:200.8}},{t:this.instance_19,p:{x:44.9,y:186}},{t:this.instance_18,p:{x:32.4,y:168.2}},{t:this.instance_17,p:{x:22.2,y:148.8}},{t:this.instance_16,p:{x:19.5,y:125}},{t:this.instance_15,p:{x:20.8,y:102.8}},{t:this.instance_14,p:{x:27.2,y:80.7,rotation:180}},{t:this.instance_13,p:{x:39,y:62.2,rotation:180}},{t:this.instance_12,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_11,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_10,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_9,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_23,p:{x:101,y:217.5}},{t:this.instance_22,p:{x:80.3,y:211.1}},{t:this.instance_21,p:{x:61,y:200.8}},{t:this.instance_20,p:{x:44.9,y:186}},{t:this.instance_19,p:{x:32.4,y:168.2}},{t:this.instance_18,p:{x:22.2,y:148.8}},{t:this.instance_17,p:{x:19.5,y:125}},{t:this.instance_16,p:{x:20.8,y:102.8}},{t:this.instance_15,p:{x:27.2,y:80.7}},{t:this.instance_14,p:{x:39,y:62.2,rotation:180}},{t:this.instance_13,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_12,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_11,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_10,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_24,p:{x:101,y:217.5}},{t:this.instance_23,p:{x:80.3,y:211.1}},{t:this.instance_22,p:{x:61,y:200.8}},{t:this.instance_21,p:{x:44.9,y:186}},{t:this.instance_20,p:{x:32.4,y:168.2}},{t:this.instance_19,p:{x:22.2,y:148.8}},{t:this.instance_18,p:{x:19.5,y:125}},{t:this.instance_17,p:{x:20.8,y:102.8}},{t:this.instance_16,p:{x:27.2,y:80.7}},{t:this.instance_15,p:{x:39,y:62.2}},{t:this.instance_14,p:{x:54.9,y:44.6,rotation:180}},{t:this.instance_13,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_12,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_11,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_25,p:{x:101,y:217.5}},{t:this.instance_24,p:{x:80.3,y:211.1}},{t:this.instance_23,p:{x:61,y:200.8}},{t:this.instance_22,p:{x:44.9,y:186}},{t:this.instance_21,p:{x:32.4,y:168.2}},{t:this.instance_20,p:{x:22.2,y:148.8}},{t:this.instance_19,p:{x:19.5,y:125}},{t:this.instance_18,p:{x:20.8,y:102.8}},{t:this.instance_17,p:{x:27.2,y:80.7}},{t:this.instance_16,p:{x:39,y:62.2}},{t:this.instance_15,p:{x:54.9,y:44.6}},{t:this.instance_14,p:{x:74.7,y:31.3,rotation:180}},{t:this.instance_13,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_12,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_26,p:{x:101,y:217.5}},{t:this.instance_25,p:{x:80.3,y:211.1}},{t:this.instance_24,p:{x:61,y:200.8}},{t:this.instance_23,p:{x:44.9,y:186}},{t:this.instance_22,p:{x:32.4,y:168.2}},{t:this.instance_21,p:{x:22.2,y:148.8}},{t:this.instance_20,p:{x:19.5,y:125}},{t:this.instance_19,p:{x:20.8,y:102.8}},{t:this.instance_18,p:{x:27.2,y:80.7}},{t:this.instance_17,p:{x:39,y:62.2}},{t:this.instance_16,p:{x:54.9,y:44.6}},{t:this.instance_15,p:{x:74.7,y:31.3}},{t:this.instance_14,p:{x:96.9,y:21.9,rotation:180}},{t:this.instance_13,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_27},{t:this.instance_26,p:{x:80.3,y:211.1}},{t:this.instance_25,p:{x:61,y:200.8}},{t:this.instance_24,p:{x:44.9,y:186}},{t:this.instance_23,p:{x:32.4,y:168.2}},{t:this.instance_22,p:{x:22.2,y:148.8}},{t:this.instance_21,p:{x:19.5,y:125}},{t:this.instance_20,p:{x:20.8,y:102.8}},{t:this.instance_19,p:{x:27.2,y:80.7}},{t:this.instance_18,p:{x:39,y:62.2}},{t:this.instance_17,p:{x:54.9,y:44.6}},{t:this.instance_16,p:{x:74.7,y:31.3}},{t:this.instance_15,p:{x:96.9,y:21.9}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_26,p:{x:101,y:217.5}},{t:this.instance_25,p:{x:80.3,y:211.1}},{t:this.instance_24,p:{x:61,y:200.8}},{t:this.instance_23,p:{x:44.9,y:186}},{t:this.instance_22,p:{x:32.4,y:168.2}},{t:this.instance_21,p:{x:22.2,y:148.8}},{t:this.instance_20,p:{x:19.5,y:125}},{t:this.instance_19,p:{x:20.8,y:102.8}},{t:this.instance_18,p:{x:27.2,y:80.7}},{t:this.instance_17,p:{x:39,y:62.2}},{t:this.instance_16,p:{x:54.9,y:44.6}},{t:this.instance_15,p:{x:74.7,y:31.3}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_25,p:{x:101,y:217.5}},{t:this.instance_24,p:{x:80.3,y:211.1}},{t:this.instance_23,p:{x:61,y:200.8}},{t:this.instance_22,p:{x:44.9,y:186}},{t:this.instance_21,p:{x:32.4,y:168.2}},{t:this.instance_20,p:{x:22.2,y:148.8}},{t:this.instance_19,p:{x:19.5,y:125}},{t:this.instance_18,p:{x:20.8,y:102.8}},{t:this.instance_17,p:{x:27.2,y:80.7}},{t:this.instance_16,p:{x:39,y:62.2}},{t:this.instance_15,p:{x:54.9,y:44.6}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_24,p:{x:101,y:217.5}},{t:this.instance_23,p:{x:80.3,y:211.1}},{t:this.instance_22,p:{x:61,y:200.8}},{t:this.instance_21,p:{x:44.9,y:186}},{t:this.instance_20,p:{x:32.4,y:168.2}},{t:this.instance_19,p:{x:22.2,y:148.8}},{t:this.instance_18,p:{x:19.5,y:125}},{t:this.instance_17,p:{x:20.8,y:102.8}},{t:this.instance_16,p:{x:27.2,y:80.7}},{t:this.instance_15,p:{x:39,y:62.2}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_23,p:{x:101,y:217.5}},{t:this.instance_22,p:{x:80.3,y:211.1}},{t:this.instance_21,p:{x:61,y:200.8}},{t:this.instance_20,p:{x:44.9,y:186}},{t:this.instance_19,p:{x:32.4,y:168.2}},{t:this.instance_18,p:{x:22.2,y:148.8}},{t:this.instance_17,p:{x:19.5,y:125}},{t:this.instance_16,p:{x:20.8,y:102.8}},{t:this.instance_15,p:{x:27.2,y:80.7}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_22,p:{x:101,y:217.5}},{t:this.instance_21,p:{x:80.3,y:211.1}},{t:this.instance_20,p:{x:61,y:200.8}},{t:this.instance_19,p:{x:44.9,y:186}},{t:this.instance_18,p:{x:32.4,y:168.2}},{t:this.instance_17,p:{x:22.2,y:148.8}},{t:this.instance_16,p:{x:19.5,y:125}},{t:this.instance_15,p:{x:20.8,y:102.8}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_21,p:{x:101,y:217.5}},{t:this.instance_20,p:{x:80.3,y:211.1}},{t:this.instance_19,p:{x:61,y:200.8}},{t:this.instance_18,p:{x:44.9,y:186}},{t:this.instance_17,p:{x:32.4,y:168.2}},{t:this.instance_16,p:{x:22.2,y:148.8}},{t:this.instance_15,p:{x:19.5,y:125}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_20,p:{x:101,y:217.5}},{t:this.instance_19,p:{x:80.3,y:211.1}},{t:this.instance_18,p:{x:61,y:200.8}},{t:this.instance_17,p:{x:44.9,y:186}},{t:this.instance_16,p:{x:32.4,y:168.2}},{t:this.instance_15,p:{x:22.2,y:148.8}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_19,p:{x:101,y:217.5}},{t:this.instance_18,p:{x:80.3,y:211.1}},{t:this.instance_17,p:{x:61,y:200.8}},{t:this.instance_16,p:{x:44.9,y:186}},{t:this.instance_15,p:{x:32.4,y:168.2}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_18,p:{x:101,y:217.5}},{t:this.instance_17,p:{x:80.3,y:211.1}},{t:this.instance_16,p:{x:61,y:200.8}},{t:this.instance_15,p:{x:44.9,y:186}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_17,p:{x:101,y:217.5}},{t:this.instance_16,p:{x:80.3,y:211.1}},{t:this.instance_15,p:{x:61,y:200.8}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_16,p:{x:101,y:217.5}},{t:this.instance_15,p:{x:80.3,y:211.1}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_15,p:{x:101,y:217.5}},{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_14,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_13,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_12,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_11,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_10,p:{x:197.6,y:58,rotation:0}},{t:this.instance_9,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_8,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_7,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_6,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_5,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_4,p:{x:198.5,y:181,rotation:0}},{t:this.instance_3,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_2,p:{x:165.1,y:208.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:144.8,y:217}},{t:this.instance,p:{x:123.2,y:219.6}}]},2).to({state:[{t:this.instance_13,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_12,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_11,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_10,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_9,p:{x:197.6,y:58,rotation:0}},{t:this.instance_8,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_7,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_6,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_5,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_4,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_3,p:{x:198.5,y:181,rotation:0}},{t:this.instance_2,p:{x:183.2,y:196.6,rotation:0}},{t:this.instance_1,p:{rotation:0,x:165.1,y:208.8}},{t:this.instance,p:{x:144.8,y:217}}]},2).to({state:[{t:this.instance_12,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_11,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_10,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_9,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_8,p:{x:197.6,y:58,rotation:0}},{t:this.instance_7,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_6,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_5,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_4,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_3,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_2,p:{x:198.5,y:181,rotation:0}},{t:this.instance_1,p:{rotation:0,x:183.2,y:196.6}},{t:this.instance,p:{x:165.1,y:208.8}}]},2).to({state:[{t:this.instance_11,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_10,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_9,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_8,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_7,p:{x:197.6,y:58,rotation:0}},{t:this.instance_6,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_5,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_4,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_3,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_2,p:{x:210.7,y:162.7,rotation:0}},{t:this.instance_1,p:{rotation:0,x:198.5,y:181}},{t:this.instance,p:{x:183.2,y:196.6}}]},2).to({state:[{t:this.instance_10,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_9,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_8,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_7,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_6,p:{x:197.6,y:58,rotation:0}},{t:this.instance_5,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_4,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_3,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_2,p:{x:217.7,y:141.9,rotation:0}},{t:this.instance_1,p:{rotation:0,x:210.7,y:162.7}},{t:this.instance,p:{x:198.5,y:181}}]},2).to({state:[{t:this.instance_9,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_8,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_7,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_6,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_5,p:{x:197.6,y:58,rotation:0}},{t:this.instance_4,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_3,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_2,p:{x:220.3,y:119.3,rotation:0}},{t:this.instance_1,p:{rotation:0,x:217.7,y:141.9}},{t:this.instance,p:{x:210.7,y:162.7}}]},2).to({state:[{t:this.instance_8,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_7,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_6,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_5,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_4,p:{x:197.6,y:58,rotation:0}},{t:this.instance_3,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_2,p:{x:217.7,y:96.8,rotation:0}},{t:this.instance_1,p:{rotation:0,x:220.3,y:119.3}},{t:this.instance,p:{x:217.7,y:141.9}}]},2).to({state:[{t:this.instance_7,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_6,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_5,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_4,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_3,p:{x:197.6,y:58,rotation:0}},{t:this.instance_2,p:{x:209.7,y:76.2,rotation:0}},{t:this.instance_1,p:{rotation:0,x:217.7,y:96.8}},{t:this.instance,p:{x:220.3,y:119.3}}]},2).to({state:[{t:this.instance_6,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_5,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_4,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_3,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_2,p:{x:197.6,y:58,rotation:0}},{t:this.instance_1,p:{rotation:0,x:209.7,y:76.2}},{t:this.instance,p:{x:217.7,y:96.8}}]},2).to({state:[{t:this.instance_5,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_4,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_3,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_2,p:{x:182.5,y:41.9,rotation:0}},{t:this.instance_1,p:{rotation:0,x:197.6,y:58}},{t:this.instance,p:{x:209.7,y:76.2}}]},2).to({state:[{t:this.instance_4,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_3,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_2,p:{x:163.8,y:29.9,rotation:0}},{t:this.instance_1,p:{rotation:0,x:182.5,y:41.9}},{t:this.instance,p:{x:197.6,y:58}}]},2).to({state:[{t:this.instance_3,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_2,p:{x:143.1,y:22.1,rotation:0}},{t:this.instance_1,p:{rotation:0,x:163.8,y:29.9}},{t:this.instance,p:{x:182.5,y:41.9}}]},2).to({state:[{t:this.instance_2,p:{x:121.2,y:19.7,rotation:0}},{t:this.instance_1,p:{rotation:0,x:143.1,y:22.1}},{t:this.instance,p:{x:163.8,y:29.9}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:121.2,y:19.7}},{t:this.instance,p:{x:143.1,y:22.1}}]},2).to({state:[{t:this.instance,p:{x:121.2,y:19.7}}]},2).wait(2));

	// Layer 3 copy
	this.instance_28 = new lib.Symbol2copy();
	this.instance_28.parent = this;
	this.instance_28.setTransform(120,120,1,1,0,0,0,80,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:79.8,regY:79.9,rotation:179},28).to({regX:79.9,regY:79.8,rotation:181,y:120.1},1).to({regX:80.2,regY:80.2,rotation:360,x:120.1},27).to({regX:80,scaleX:1,scaleY:1,rotation:361,x:120,y:120.2},1).to({regY:80,scaleX:1,scaleY:1,rotation:539,y:120},27).to({regY:79.9,rotation:541,x:120.1,y:120.1},1).to({regX:80.2,regY:80.2,rotation:719,y:120},26).wait(1));

	// Layer 3
	this.instance_29 = new lib.Symbol2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(120,120,1,1,0,0,0,80,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regX:79.8,regY:79.9,rotation:179},28).to({regY:79.8,rotation:181,x:120.1,y:120.1},1).to({regX:80.1,regY:80.1,rotation:359,x:120,y:120},27).to({regY:80.2,scaleX:1,scaleY:1,rotation:361,y:120.1},1).to({regX:80,regY:80,scaleX:1,scaleY:1,rotation:539,y:120},27).to({regY:79.9,rotation:541,x:120.1,y:120.1},1).to({regX:80.2,regY:80.2,rotation:719,x:120,y:120},26).wait(1));

	// Layer 2
	this.instance_30 = new lib.Symbol1copy();
	this.instance_30.parent = this;
	this.instance_30.setTransform(120,120,1,1,0,0,0,119,119);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({rotation:179},56).to({regX:118.8,regY:118.7,rotation:181,y:120.1},1).to({regX:119.2,regY:119,rotation:359,x:120.1,y:120},54).wait(1));

	// Layer 1
	this.instance_31 = new lib.Symbol1copy2();
	this.instance_31.parent = this;
	this.instance_31.setTransform(120,120,0.996,0.996,0,0,0,119.5,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({regY:119.7,rotation:179,x:120.2,y:120.1},56).to({scaleX:1,scaleY:1,rotation:181},1).to({regY:119.5,scaleX:1,scaleY:1,rotation:359,x:120,y:120},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,121,239,239);
// library properties:
lib.properties = {
	width: 240,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;