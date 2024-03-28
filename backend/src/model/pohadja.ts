import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Pohadja = new Schema({
    username : {
        type: String
    },
    naziv: {
        type: String
    },
    grupa: {
        type: String
    }
})

export default mongoose.model('Pohadja',Pohadja,'pohadja');