function createBankAccount(startingBalance=0){
    let balance = startingBalance;
    let history = [];

    function deposite (amount){
        if(amount<=0){
            return "deposite should be greater than zero"
        }
        balance+=amount;
        history.push({type:"Deposit - ", amount});
        return `Deposited Rs ${amount}`;
    }

    function withdraw(amount){
        if(amount<=0){
            return "Withdraw amount should be atleast one"
        }
        if(amount>balance){
            return "Insufficient funds"
        }
        balance-=amount;
        history.push({type:"Withdraw- ",amount});
        return `Withdrawed rs ${amount}`
    }
    function getBalance(){
        return balance;
    }
    function getHistory(){
        return history;
    }
    return {
        deposite,
        withdraw,getBalance, getHistory
    };
}

const account = createBankAccount(1000);
console.log(account.balance)
console.log(account.getBalance())
console.log(account.withdraw(5000))
console.log(account.getHistory())
