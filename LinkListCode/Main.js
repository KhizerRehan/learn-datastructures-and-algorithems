(function() {
	'use strict'
	//Annoynumous Function

	// =======================================
	// Creation Of Nodes
	// =======================================

	var node1 = new Node();
	node1.setData(1);

	var node2 = new Node();
	node2.setData(2);

	var node3 = new Node();
	node3.setData(3);
	// =======================================
	// Adding Nodes At End
	// =======================================

	var lObj = new LinkList();
	lObj.addNodeAtEnd(node1);
	lObj.addNodeAtEnd(node2);
	lObj.addNodeAtEnd(node3);

	//Printing Nodes
	lObj.printCurrentList();


	console.log("****************************");

	// =======================================
	// AddNodeToFront
	// =======================================


	var node4 = new Node();
	node4.setData(4);

	var node5 = new Node();
	node5.setData(5);

	var node6 = new Node();
	node6.setData(6);

	lObj.addNodeAtFront(node4);


	//Printing Nodes
	lObj.printCurrentList();


	console.log("****************************");

	// =======================================
	// DeleteFromFront
	// =======================================

	lObj.deleteFromFront();

	lObj.deleteFromFront();

	lObj.deleteFromFront();

	lObj.deleteFromFront();

	//Printing Nodes
	lObj.printCurrentList();

	console.log("****************************");

	// =======================================
	// AddNodeToEnd + AddNodeToFront + DeleteFromEnd
	// =======================================

	var node7 = new Node();
	node7.setData(10);

	var node8 = new Node();
	node8.setData(9);

	lObj.addNodeAtEnd(node8);

	lObj.addNodeAtFront(node7);

	lObj.deleteFromEnd();

	lObj.printCurrentList();


	console.log("****************************");

	// =======================================
	// =======================================


}());