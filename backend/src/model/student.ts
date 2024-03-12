import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Student = new Schema({
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
    indeks: {
        type: String
    },
    tip: {
        type: String
    },
    status: {
        type: String
    }
})

export default mongoose.model('Student',Student,'studenti');