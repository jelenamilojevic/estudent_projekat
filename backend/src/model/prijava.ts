import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Prijava = new Schema({
    username : {
        type: String
    },
    idspiska: {
        type: Number
    },
    idprijave: {
        type: Number
    },
    fajl: {
        type: String
    }
})

export default mongoose.model('Prijava',Prijava,'prijave');