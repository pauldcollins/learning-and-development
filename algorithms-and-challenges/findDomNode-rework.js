(function() {

	const tree1 = document.getElementById('dom1');
	const tree2 = document.getElementById('dom2');
	const node1 = document.getElementById('node1');

	// recursive function that goes up the old tree and logs the index of the childNode

	// pass in child node and old tree
	function getIndexOfExistingNode(childNode, parentBaseNode, treeArray) {
		treeArray = treeArray || [];

		if (childNode !== parentBaseNode) {
			let myParentNode = childNode.parentNode;		

			if (myParentNode) {
				let childNodesArray = Array.prototype.slice.call(myParentNode.childNodes);
				let index = childNodesArray.indexOf(childNode);
				treeArray.push(index);

				return getIndexOfExistingNode(myParentNode, parentBaseNode, treeArray);
			} 
		}

		return treeArray;
	}	

	// function that goes down the new tree, based on the index of the previous function
	function findNodeInNewDom(newDomTree, oldTreeArray) {
		let oldIndex = oldTreeArray.pop();
		let currentPosition = newDomTree.childNodes[oldIndex];

		// get new childnode, unless old index is empty
		if (oldTreeArray.length > 0) {
			return findNodeInNewDom(currentPosition, oldTreeArray);			
		} else {
			return currentPosition;
		}
	}

	let oldNodePosition = getIndexOfExistingNode(node1, tree1);
	let newNodeValue = findNodeInNewDom(tree2, oldNodePosition);
	console.log(newNodeValue);


// 	const text = node1.innerText;
// 	let treeToSearch = tree2;

// 	function findValueInTree(textToSearchFor, currentNode) {
// 		getParentNode = textToSearchFor.parentNode;
// 		console.log(getParentNode);

// 		console.log(currentNode.children.length);
// 		console.log(currentNode.childNodes.length);

// 		// check if text to search for is not equal to currentNode
// 		if (currentNode !== textToSearchFor) {
// 			// if not search current node childNodes for text to search
// 			let test = [].slice.call(getParentNode.childNodes);
// 			console.log(currentNode.children.indexOf(test));
// 		}
// 	}

// 	findValueInTree(text, treeToSearch);
})();
