function createWallet(){
    let balance=0;
    return{
        addMoney:function(amount){
            balance+=amount;
        },
        checkBalance: function(){
            return balance;
        }
    };
}

let myWallet=createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet.checkBalance());