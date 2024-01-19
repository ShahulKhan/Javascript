/*
Group, SubGroup, GroupEnd and GroupCollapse
Group shows the content in the group
Group will be open without GroupEnd. It should be closed
GroupCollapse doesn't show the content in the group
*/

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