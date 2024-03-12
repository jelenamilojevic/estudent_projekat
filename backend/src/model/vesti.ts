import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Vesti = new Schema({
    naslov : {
        type: String
    },
    tekst: {
        type: String
    },
    datum: {
        type: Date
    },
    id: {
        type: Number
    },
    kategorija:{
        type: String
    }
})

export default mongoose.model('Vesti',Vesti,'vesti');