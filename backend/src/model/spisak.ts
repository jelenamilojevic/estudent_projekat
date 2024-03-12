import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Spisak = new Schema({
    naziv : {
        type: String
    },
    id: {
        type: Number
    },
    termin: {
        type: Date
    },
    mesto: {
        type: String
    },
    limit:{
        type: Number

    },
    status: {
        type: String
    },
    pred: {
        type: String
    }
})

export default mongoose.model('Spisak',Spisak,'spiskovi');