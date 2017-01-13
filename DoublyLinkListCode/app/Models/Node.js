// =======================================
//DoublyLinkList:Node Constructor
// =======================================

function Node() {
	console.log("Node Object Instantiated");

	this._data = 0;
	this._nextPtr = null;
	this._prevPtr = null;
};

//GetDate
Node.prototype.GetData = function() {
	return this._data;
}

//SetData
Node.prototype.SetData = function(valParam) {
	this._data = valParam;
}

//SetNextPtr
Node.prototype.SetNextPtr = function(nextPtrParam) {
	this._nextPtr = nextPtrParam
}

//GetNextPtr
Node.prototype.GetNextPtr = function() {
	return this._nextPtr;
}

//SetPrevPtr
Node.prototype.SetPrevPtr = function(prevPtrParam) {
	this._prevPtr = prevPtrParam
}

//GetPrevPtr
Node.prototype.GetPrevPtr = function() {
	return this._prevPtr
}

// =======================================
// ./Node
// =======================================