const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// Expected output: 8

new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, argN, functionBody)
