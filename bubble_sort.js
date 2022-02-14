const ps =require("prompt-sync");
const prompt=ps();
function bblSort(arr)
{
    for(var i = 0; i < n; i++)
    {
    for(var j = 0; j < n; j++)
    {
        if(arr[j] > arr[j+1])
        {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
        }
    }
    }
    console.log(arr);
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
n=arr.length;
bblSort(arr);