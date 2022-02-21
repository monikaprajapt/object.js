var a=[2,3,4,-2,-1,0,7,6]
for(i=0; i<a; i++){
    var swapped=0
    for(j=0; j<a-i; j++){
        if(a[j]>a[j+1]){
            swap=(a[j],a[j+1])
            swapped=swapped+1
        }
    }
    if(swapped==0){
        break;
    }

}
