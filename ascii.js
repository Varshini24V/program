const ps=require("prompt-sync");
const prompt=ps();
const string=prompt("Enter a Character ");
const result=string.charCodeAt(0);
console.log("The ASCII is "+ result);