# query-selector-all-shadow-root
a simple querySelector / querySelectorAll method / shadow dom traverser.

## Usage

```js
var matchingElements = shadowSelectorAll('.my-selector') // this will traverse from document.body
```

From a different starting node:

```js
var firstMatchingElement = shadowSelector('#some-element ul')
var matchingElements = shadowSelector('button', firstMatchingElement)
```

## Note

The way this script works, is that it will traverse all the elements from the rootNode, regardless of whether you use shadowSelector or shadowSelectorAll.
This will therefore not be very quick, but it will definitely work. So keep this in mind.

The traverse method is also available, which is used like this.

```js
var allBodyNodes = []
domTraverser(document.body, function appendNodeToArr(node) { allBodyNodes.push(node) })
```
