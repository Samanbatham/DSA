function print1toN(n){
    if(n==0){
        return 0
    }else{
        print1toN(n-1)
        console.log(n)
    }
}
print1toN(5)