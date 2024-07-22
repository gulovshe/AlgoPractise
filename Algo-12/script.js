let num=4
let table= ''
function vurmacedveli(num){
for(let i=1;i<=10;i++){
    table+=`${num} x ${i}=${num*i}\n`
}
 return table
}
console.log(vurmacedveli(num))

