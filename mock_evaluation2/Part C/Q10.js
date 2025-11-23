function counter(){
    let count=0;
    return function(){
        count +=1;
        return count;
    };
}

const c=counter();
console.log(c());
console.log(c());
console.log(c());