import TransactionShema from '../shemas/Transaction.js'

async function create(data){
return TransactionShema.create(data);
}

export default {
    create
}