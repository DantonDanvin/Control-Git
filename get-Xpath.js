// Your XPath
var xpathExpression = "//*[@id='header']/div[2]/div[2]/a[1]";

// Evaluate the XPath and retrieve the first matching element
var xpathResult = document.evaluate(
  xpathExpression,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null
);

// Log the resulting element
var element = xpathResult.singleNodeValue; // This gets the first node matching the XPath
console.log(element);

if (element) {
    console.log("Element found:", element);
    // Example: Access the element's text content
    console.log("Text content:", element.textContent);
  } else {
    console.log("No element found for the given XPath.");
  }
  