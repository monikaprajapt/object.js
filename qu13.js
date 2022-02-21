var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
var a=[]
for(i in my_dict){
    max=0
    for(j in my_dict){
        if(max<my_dict[j]){
            max=my_dict[j]
            c=j
        }
    }
    a.push(c)
    // my_dict.pop(c)

}
// my_dict.pop(c)
console.log(a)