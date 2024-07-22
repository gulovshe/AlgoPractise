function sadeeded(a){
    let sum=0
    let count=0

    for(let i=0;i<=a.length;i++){
        let num=a[i]
        count=0
        for (let j = 1; j <= num; j++) {
        if (num%j==0){
           count++

        }
        }
        if(count==2){
            sum+=num
        
         }
     
        
    }
    return sum

}
let a=[36,3,5,9,15,20]
console.log(sadeeded(a))