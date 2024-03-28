import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Predavanja = new Schema({
    naziv : {
        type: String
    },
    naslov: {
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

export default mongoose.model('Predavanja',Predavanja,'predavanja');