/*
Assertion
*/

limit = 10
msg = "This isn't an even number."
for(i=1; i<=10; i++)
{
    console.assert(i%2==0,{i,msg})
    
}
