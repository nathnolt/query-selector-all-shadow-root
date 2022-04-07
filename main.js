// Traverses the dom depth first
function domTraverser(rootNode, callback, onlyElements=false) {

	// 1A. call the callback on the root node (if it's not an element)
	// because it's not an element node, we don't care for it's children
	const nodeIsElement = rootNode.nodeType === Node.ELEMENT_NODE
	if (!nodeIsElement) {
		if(onlyElements) { return }
		callback(rootNode)
		return
	}
	
	// 1B. call the callback on the root node (if it's an element)
	callback(rootNode)
	
	// 2. loop through the childNodes of the rootNode
	const children = rootNode.childNodes
	if (children.length) {
		for (var i = 0; i < children.length; i++) {
			domTraverser(children[i], callback, onlyElements)
		}
	}
	
	// 3. check for shadow DOM, and loop through it's children
	const shadowRoot = rootNode.shadowRoot
	if (shadowRoot) {
		const shadowChildren = shadowRoot.childNodes
		for (var i = 0; i < shadowChildren.length; i++) {
			domTraverser(shadowChildren[i], callback, onlyElements)
		}
	}
}

// querySelectorAll method
function shadowSelectorAll(selector, rootNode=document.body) {
	const arr = []
	domTraverser(rootNode, function(node) {
		if (node.matches(selector)) {
			arr.push(node)
		}
	}, true)
	return arr
}

// querySelector method
function shadowSelector(selector, rootNode=document.body) {
	const arr = shadowSelectorAll(selector, rootNode)
	return arr[0]
}
