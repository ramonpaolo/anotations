import mongoose from 'mongoose';

const ToDoSchema = new mongoose.Schema({
    idUser: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
    },
    subtitle: {
        type: String,
        minlength: 0,
        maxlength: 255,
        required: true,
    },
    text: {
        type: String,
        minlength: 1,
        maxlength: 3000,
        required: true,
    },
    color: {
        type: String,
        length: 6,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const ToDoModel = mongoose.model('ToDo', ToDoSchema);

export default ToDoModel;
