// =======================================
//Node Constructor
// =======================================

function Node() {
	this._data = 0;
	this._nextPtr = null;
}

//GetData
Node.prototype.getData = function() {
	// body...
	return this._data;
}

//SetData 
Node.prototype.setData = function(valParam) {
	// body...
	this._data = valParam;
}

//GetPointer 
Node.prototype.getNextPtr = function() {
	// body...
	return this._nextPtr;
}

//SetPointer
Node.prototype.setNextPtr = function(nextPtrParam) {
	// body...
	this._nextPtr = nextPtrParam;
}

// =======================================
// =======================================