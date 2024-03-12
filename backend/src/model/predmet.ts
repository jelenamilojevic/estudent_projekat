import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Predmet = new Schema({
    naziv : {
        type: String
    },
    tip: {
        type: String
    },
    sifra: {
        type: String
    },
    fond: {
        type: Number
    },
    espb: {
        type: Number
    },
    cilj: {
        type: String
    },
    ishod: {
        type: String
    },
    predavanja:{
        type: String
    },
    vezbe: {
        type: String
    },
    labvezbe: {
        type: String
    },
    komentar: {
        type: String
    }
})

export default mongoose.model('Predmet',Predmet,'predmeti');