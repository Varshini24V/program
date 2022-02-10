const ps=require("prompt-sync");
const prompt=ps();
function Palindrome()
	{
		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("Palindrome");
		}
		else
		{
			console.log("Not palindrome");
		}
    }
var rem, temp, final = 0;
var number = prompt("Enter the number");
Palindrome(number);