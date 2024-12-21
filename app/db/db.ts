import mongoose, {Schema, model, models} from "mongoose";

mongoose.connect('mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/todo-nextjs')

const userSchema = new Schema({
    username: String,
    password: String,
    todos: [{type:mongoose.Types.ObjectId, ref:'Todo'}]
})

const todoSchema = new Schema({
    title: String,
    description: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User'}
})

export const userModel = models.user || model('user', userSchema);
export const todoModel = models.todo || model('todo', todoSchema);