let a=[3,8,1,2,7,5]
function maxnumber(a){
    let max=a[0]
    for(let i=1;i<=a.length;i++){
         if(a[i]>max){
             max=a[i]
         }
    }
     return max
}
console.log((maxnumber(a)))





