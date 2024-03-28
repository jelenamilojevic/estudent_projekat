import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let Drzi = new Schema({
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

export default mongoose.model('Drzi',Drzi,'drzi');