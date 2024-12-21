import mongoose, {Schema, model} from "mongoose";

mongoose.connect('mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/todo-nextjs')

const userSchema = new Schema({
    username: String,
    password: String,
    todos: [{type:mongoose.Types.ObjectId, ref:'Todo'}]
})

const todoSchema = new Schema({
    title: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User'}
})

export const userModel = model('user', userSchema)
export const todoModel = model('todo', todoSchema)
