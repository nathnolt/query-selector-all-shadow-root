# query-selector-all-shadow-root
a simple querySelectorAll method for shadow dom

## Usage

```js
var matchingElements = $$$('.my-selector')
```

From a different starting node:

```js
var myElement = $$$('#element')[0]
var buttons = $$$('button', myElement)
```

## Note

The way this script works, is that it will traverse all the elements from the rootNode. This is of course slower than some of the alternative options, but this is simpler to use, and fast enough, for if you are using it sparingly. Basically, you will probably use it sparingly, because if you're using it in your own project, you will probably have access to the elements using the application framework itself.
