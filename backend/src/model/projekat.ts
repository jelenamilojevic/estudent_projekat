import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Projekat = new Schema({
    naziv : {
        type: String
    },
    naslov: {
        type: String
    },
    tekst: {
        type: String
    },
    fajl: {
        type: String
    },
    id: {
        type: String
    },
    autor:{
        type: String
    },
    datum: {
        type: Date
    }
})

export default mongoose.model('Projekat',Projekat,'projekat');