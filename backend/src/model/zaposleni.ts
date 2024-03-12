import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Zaposleni = new Schema({
    username : {
        type: String
    },
    password: {
        type: String
    },
    ime: {
        type: String
    },
    prezime: {
        type: String
    },
    adresa: {
        type: String
    },
    telefon: {
        type: String
    },
    vebsajt: {
        type: String
    },
    podaci: {
        type: String
    },
    zvanje: {
        type: String
    },
    kabinet: {
        type: String
    },
    status: {
        type: String
    },
    slika: {
        type: String
    }
})

export default mongoose.model('Zaposleni',Zaposleni,'zaposleni');