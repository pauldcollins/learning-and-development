(function() {

	const tree1 = document.getElementById('dom1');
	const tree2 = document.getElementById('dom2');
	const node1 = document.getElementById('node1');

	function buildTree(childNode, baseParentNode, tree) {
		tree = tree || [];

		if (childNode !== baseParentNode) {
			let myParentNode = childNode.parentNode;

			if (myParentNode) {
				let childNodesArray = Array.prototype.slice.call(myParentNode.childNodes);				
				let index = childNodesArray.indexOf(childNode);
				tree.push(index);

				return buildTree(myParentNode, baseParentNode, tree);
			}
		}

		return tree;
	}

	function getChildNodeFromParentTree(newTree, oldTree) {
		let index = oldTree.pop();
		let childNode = newTree.childNodes[index];

		if (oldTree.length > 0) {
			return getChildNodeFromParentTree(childNode, oldTree);
		} else {
			return childNode;
		}
	}

	let otherNode = getChildNodeFromParentTree(tree2, buildTree(node1, tree1));
	console.log(otherNode);

})();


// //
// merge 2 arrays

// let array1 = [1,2,3];
// let array2 = [4,5,6];

// // These all do the same thing!
// array1.push(4);
// Array.prototype.push.call(array1, 5);
// Array.prototype.push.apply(array1, [6]);


// Array.prototype.push.apply(array1, array2); 

// // Which has the same effect as...
// array1 = array1.concat(array2);
