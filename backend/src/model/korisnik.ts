import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Korisnik = new Schema({
    username : {
        type: String
    },
    password: {
        type: String
    },
    tip: {
        type: String
    },
    prvi: {
        type: String
    }
})

export default mongoose.model('Korisnik',Korisnik,'korisnik');