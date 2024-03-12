import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Obavestenja = new Schema({
    naziv : {
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
    autor:{
        type: String
    },
    naslov: {
        type: String
    },
    fajl: {
        type: String
    }
})

export default mongoose.model('Obavestenja',Obavestenja,'obavestenja');