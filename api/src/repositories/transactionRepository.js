import TransactionShema from '../shemas/Transaction.js'

async function create(data){
return TransactionShema.create(data);
}

async function findAllByUser(id){
    return TransactionShema.find({userId: id});
}
export default {
    create,
    findAllByUser
}