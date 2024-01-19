// This is a print statement
console.log('Hello')
console.log(27)

// This is an Object
console.log([1, 27, 22, 14])

// This is an Object in json format
console.log({Name : "Shahul", Age : 22})

// This is a Table
console.table({Name : "Shahul", Age : 22, Address : "Chengalpattu"})

// Array
console.table([{Name : "Shahul", Age : 22, Address : "Chengalpattu"}, 
{Name : "Rahul", Age : 26, Address : "Theni"}])

// Warning --> Yellow color
console.warn("This is a Warning Message")

// Error --> Red color
console.error("This is an Error message")

// Assertion
limit = 10
msg = "This isn't an even number."
for(i=1; i<=10; i++)
{
    console.assert(i%2==0,{i,msg})
    
}

// Count
function MyFunction()
{
    console.count()
}
MyFunction()
MyFunction()
MyFunction()
console.countReset()
MyFunction()

function MyName()
{
    console.count('Shahul')
}
MyName()
MyName()
console.countReset
MyName()



// Group , Sub Group, Group End and Group collapse
console.group('Group 1')
console.log("Shahul")
    console.group("MFU")
        console.log("Rahul")
        console.log("Sunder")
        console.log('Gourab')
   console.groupEnd("MFU")
console.groupEnd('Group 1')

console.groupCollapsed('Group 2')
    console.log('Mohammed')
    console.log('Shahul')
    console.log('Hameed')
console.groupEnd



// Time
console.time('Time 1')
for (i=1; i<=7; i++)
{
    console.log(i)
}
console.timeEnd('Time 1')



// Clear
console.clear()



// This is an alert
alert("Hi, Welcome to Javascript")



// Prompt 
// let name = prompt('What is your name ?')
// console.log(name)

let tickets = prompt('How many tickets you want ?')
// console.log("You should pay RS " , tickets*120) --> This also work
console.log("typeof tickets is ", typeof(tickets))
console.log("You should pay RS " , Number(tickets)*120)
