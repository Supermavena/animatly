function ShapeCollection(){
	this._length = 0;
	this._maxLength = 4;
	this.shapes = Array.apply(null,{length:this._maxLength});
};

ShapeCollection.prototype.addShape = function(shapeData){
	if(this._length === this._maxLength){
		this.shapes = this.shapes.concat(Array.apply(null,{length:this._maxLength}));
		this._maxLength *= 2;
	}
	this.shapes[this._length] = shapeData;
	this._length += 1;
};

ShapeCollection.prototype.releaseShapes = function(){
	var i;
	for(i = 0; i < this._length; i += 1) {
		shape_pool.release(this.shapes[i]);
	}
	this._length = 0;
};