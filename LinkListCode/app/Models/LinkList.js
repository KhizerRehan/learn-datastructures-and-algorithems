// =======================================
// =======================================
function LinkList() {
	'use strict';
	this._head = null;
	this._tail = null;
}


// =======================================
// AddNodeAtEnd
// =======================================

LinkList.prototype.addNodeAtEnd = function(nodeParam) {
	// body...

	if (this._head === null && this._tail === null) {
		// console.log("IF-Part:Head:" + this._head + " " + "Tail:" + this._tail);
		// Head=Tail Must be Pointing To=SameNode
		this._head = nodeParam;
		this._tail = nodeParam;
	} else {
		//NextTime
		// console.log("Else-Part:Head:" + this._head + " " + "Tail:" + this._tail);
		//Set NextPtr of Tail
		this._tail.setNextPtr(nodeParam);
		//Update Current Tail
		this._tail = nodeParam;
	}
}


// =======================================
// AddNodeAtFront
// =======================================

LinkList.prototype.addNodeAtFront = function(nodeParam) {
	// body...

	if (this._head === null && this._tail === null) {
		// console.log("IF-Part:Head:" + this._head + " " + "Tail:" + this._tail);
		// Head=Tail Must be Pointing To=SameNode
		this._head = nodeParam;
		this._tail = nodeParam;
	} else {
		//NextTime
		// console.log("Else-Part:Head:" + this._head + " " + "Tail:" + this._tail);
		//Set Current Head to New Node
		nodeParam.setNextPtr(this._head);
		//Updating Head to Current/New Node
		this._head = nodeParam;

		//No Change In Tail
	}
}



// =======================================
// DeleteNodeFromFront
// =======================================

LinkList.prototype.deleteFromFront = function() {
	if (this._head) {
		//InCaseOfSingleNode
		if (this._head === this._tail) {
			console.log("List Is Empty Cannot Be Delete");
			this._head = this._tail = null;
		} else {
			var tempHead = this._head;
			this._head = this._head.getNextPtr();
			tempHead.setNextPtr(null);
		}
	}
}


// =======================================
// DeleteFromEnd
// =======================================

LinkList.prototype.deleteFromEnd = function() {
	// body...
	if (this._head) {
		//InCaseOfSingleNode
		if (this._head === this._tail) {
			console.log("List Is Empty Cannot Be Delete");
			this._head = this._tail = null;
		} else {
			var tempHead = this._head;

			while (tempHead.getNextPtr().getNextPtr() !== null) {
				tempHead = tempHead.getNextPtr();
			}
			tempHead.setNextPtr(null);
		}
	}
}



// =======================================
// PrintCurrentList
// =======================================

LinkList.prototype.printCurrentList = function() {
	// body...

	if (this._head === null && this._tail === null) {
		console.log("LinkList is Empty");
	} else {

		var tempParam = this._head;
		console.log("Printing LinkList Array");
		while (tempParam !== null) {
			console.log(tempParam.getData());
			tempParam = tempParam.getNextPtr();
			// console.log("CurrentPtr:" + tempParam);
		}
	}
}

// =======================================
// Clear LinkList
// =======================================

LinkList.prototype.clearLinkList = function() {
	// body...
	console.log("Head:" + this._head + " " + "Tail:" + this._tail);
	this._head = null;
	this._tail = null;
}
