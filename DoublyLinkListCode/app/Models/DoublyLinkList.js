// =======================================
// DoublyLinkList Constructor
// =======================================
function DoublyLinkList() {
	'use strict'
	this._head = null;
	this._tail = null;
	this._totalNodes = 0;
};

// =======================================
// DoublyLinkList:AddNodeAtEnd
// =======================================
DoublyLinkList.prototype.AddNodeAtEnd = function(nodeParam) {
	if (this._head === null && this._tail === null) {
		this._head = this._tail = nodeParam;
	} else {
		this._tail.SetNextPtr(nodeParam);
		nodeParam.SetPrevPtr(this._tail);
		this._tail = nodeParam;
	}
	this._totalNodes++;
}


// =======================================
// DoublyLinkList:DeleteFromEnd
// =======================================
DoublyLinkList.prototype.DeleteFromEnd = function() {
	// body...

	if (this._head === this._tail) {
		console.log("List Is Empty Cannot Be Deleted");
		this._head = this._tail = null;
	} else {
		var tempHead = this._head;

		while (tempHead.GetNextPtr().GetNextPtr() !== null) {
			tempHead = tempHead.GetNextPtr();
		}
		//Set Last Node PrevPtr==Null
		let delNode = tempHead.GetNextPtr();
		//Before Setting PrevPtr to Null Update Tail Positon
		//Update Tail
		this._tail = delNode.GetPrevPtr();

		//Set PrevPtr Value to null
		delNode.SetPrevPtr(null);

		//SecondLast Node taht will be => Set:CurrentNode->Next==Null
		tempHead.SetNextPtr(null);

		//Delete Node
		delete delNode;

		// Subtart One Node From Total Nodes
		this._totalNodes--;
	}
}

// =======================================
// DoublyLinkList:PrintHeadToTailSequentialPrinting
// =======================================

DoublyLinkList.prototype.PrintHeadToTailSequentialPrinting = function() {
	// Block Scope Variable ECMA2016
	let _tempHead = this._head;
	while (_tempHead !== null) {
		//Print Current Node Data
		console.log(_tempHead.GetData());
		// Increment to New Node
		_tempHead = _tempHead.GetNextPtr();
	}

}

// =======================================
// DoublyLinkList:PrintTailToHeadReverseOrderPrinting
// =======================================
DoublyLinkList.prototype.PrintTailToHeadReverseOrderPrinting = function() {
	// body...
	// Block Scope Variable ECMA2016
	let _tempHead = this._head;
	while (_tempHead.GetNextPtr() !== null) {
		// Increment to New Node
		_tempHead = _tempHead.GetNextPtr();
	}

	//Thus You have reached LastNod Traverse From BackSide:
	while (_tempHead !== null) {
		//Print Current Node Data
		console.log(_tempHead.GetData());
		// Increment to New Node
		_tempHead = _tempHead.GetPrevPtr();
	}
}

// =======================================
// DoublyLinkList:DeleteFromFront
// =======================================
DoublyLinkList.prototype.DeleteFromFront = function() {
	// body...
	if (this._head === this._tail) {
		console.log("List Is Empty Cannot Be Deleted");
		this._head = this._tail = null;
	} else {
		let tempHead = this._head;

		// Set Next Node PrevPtr to Null
		let _nextTempNode = tempHead.GetNextPtr();
		_nextTempNode.SetPrevPtr(null);

		//Change NextPtr of FirstNode OR HeadPtr
		tempHead.SetNextPtr(null);

		//Update New Head 
		this._head = _nextTempNode;

		//Delete Previous Head
		delete tempHead;

		// Subtart One Node From Total Nodes
		this._totalNodes--;

	}
}

// =======================================
// DoublyLinkList:GetTotalNumberOfNodes
// =======================================

DoublyLinkList.prototype.GetTotalNumberOfNodes = function() {
	return this._totalNodes;
}

// =======================================
// ./DoublyLinkList
// =======================================