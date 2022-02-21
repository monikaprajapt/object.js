var a=[1,2,3,4,5,6,4,3,2,2,1,1,2,3,4]
var b=[]
for(i in a){
    var y=a.count(i)
    b.push({i:Math.floor(y/2)})
}
console.log(b)








const a=[{'m':33,'s':12},{'m':34,'s':10},{'m':35,'s':11}]
var c=require("readline-sync")
var num=c.question("enter the subj")
var b=[]
for(i of a){
    for (k in i ){
      b.push(i[num])    
}
}
console.log(b)


 


for(i=1; i<=10; i++){
    for(a=1; a<=10;a++){
        

        console.log(i,"*",a,"=",a*i)   
    }   
}





var object={'a':20,'b':40,'c':{'1':11,'2':12,'3':{'5':6}}}
var sum=0
for(i in object){
    if(typeof(i)==object){
        for(j in i){
            if(typeof(j)==object){

            }else{
                sum=sum+j
            }
        }
        // console.log(i)

    }else{
        sum=sum+i
    }

    console.log(i)
}
console.log(sum)