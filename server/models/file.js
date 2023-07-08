import mongoose from 'mongoose';

const fileSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadContent: {
        type: Number,
        default: 0,
        required: true
    }
});

const File = mongoose.model('File',fileSchema);

export default File;