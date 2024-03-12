import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Labvezbe = new Schema({
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
    tip: {
        type: String
    },
    datum: {
        type: Date
    },
    velicina: {
        type: String
    }
})

export default mongoose.model('Labvezbe',Labvezbe,'labvezbe');