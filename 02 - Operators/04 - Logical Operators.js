/*
Logical Operators    :  &&  ||  !
*/

let num = 100

/*
---&&---
f f = f
f t = f
t f = f
t t = t
*/

// f f = f
console.log(num > 100 && num%10==7)
console.log(false && false)
console.log()

// f t = f
console.log(num > 100 && num%10==0)
console.log(false && true)
console.log()

// t f = f
console.log(num > 99 && num%10==7)
console.log(true && false)
console.log()

// t t = t
console.log(num > 99 && num%10==0)
console.log(true && true)
console.log()
console.log("--------------------------------------------------------------")



/*
---||---
f f = f
f t = t
t f = t
t t = t
*/

// f f = f
console.log(num > 100 || num%10==7)
console.log(false && false)
console.log()

// f t = t
console.log(num > 100 || num%10==0)
console.log(false || true)
console.log()

// t f = t
console.log(num > 99 || num%10==7)
console.log(true || false)
console.log()

// t t = t
console.log(num > 99 || num%10==0)
console.log(true || true)
console.log()
console.log("--------------------------------------------------------------")



/*
----!----
f = t
t = f
*/

// f = t
console.log(!true)
console.log()

// t = f
console.log(!false)
console.log()
console.log("--------------------------------------------------------------")