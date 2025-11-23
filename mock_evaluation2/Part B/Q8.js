let nums = [10, 3, 7, 20, 13, 2];

// Using map
let squares=nums.map(num=> num*num);

// Using filter
function isPrime(n){
    if (n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++)
    {
        if(n%i==0) return false;
    }
        return true;
    }
    let primes=nums.filter(isPrime);

// Using reduce

let sum=nums.reduce((acc,cur)=>acc+cur,0);

// Using sort
let desc=[...nums].sort((a,b)=>b-a);
