// =======================================
//Main.js Calling Class
// =======================================
(function() {
	'use strict'
	//Annoynumous Function
	console.log("Main.js Class Called");


	// =======================================
	// Node Creation
	// =======================================
	var node1 = new Node();
	node1.SetData(10);
	var node2 = new Node();
	node2.SetData(20);
	var node3 = new Node();
	node3.SetData(30);
	var node4 = new Node();
	node4.SetData(40);
	// =======================================
	// Obj Instantiation
	// =======================================
	var obj = new DoublyLinkList();

	obj.AddNodeAtEnd(node1);
	obj.AddNodeAtEnd(node2);
	obj.AddNodeAtEnd(node3);
	obj.AddNodeAtEnd(node4);

	// =======================================
	// Methods Invoking:
	// =======================================
	console.log("TotalNodes:" + obj.GetTotalNumberOfNodes());

	console.log("================================");
	console.log("Sequential Order Printing");
	obj.PrintHeadToTailSequentialPrinting();
	console.log("================================");
	console.log("Reverse Order Printing");
	obj.PrintTailToHeadReverseOrderPrinting();
	console.log("================================");
	console.log("Node Deleted From End");
	obj.DeleteFromEnd();
	console.log("================================");
	console.log("Sequential Order Printing");
	obj.PrintHeadToTailSequentialPrinting();
	console.log("================================");
	console.log("Node Deleted From Front");
	obj.DeleteFromFront();
	console.log("================================");
	console.log("Sequential Order Printing");
	obj.PrintHeadToTailSequentialPrinting();
	console.log("================================");
	console.log("TotalNodes:" + obj.GetTotalNumberOfNodes());
	// =======================================
	// =======================================
}());