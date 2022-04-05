function sign (a){
    if(a<0){
        return -1
    }
    if(a>0){
        return 1
    }
    else{
        return 0
    }
}
function sameSign (b,c){
    if(b>0 & c>0){
        return true
    }
    if(b<0 & c<0){
        return true
    }
    else{
        return false
    }
}