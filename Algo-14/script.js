let a=[23,12,9,18]
let b=3
function trueorfalse(){
    for(let i=0;i<=a.length;i++)
        if (a[i]%b!==0){
           console.log(false)
            break
        }
         else {
         console.log(true)
    }      
}  
trueorfalse()