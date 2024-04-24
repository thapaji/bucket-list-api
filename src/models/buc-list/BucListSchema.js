import mongoose from 'mongoose';

const bucListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    cost: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
})

export default mongoose.model('buc-list-items', bucListSchema)