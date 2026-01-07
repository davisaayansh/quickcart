import mongoose from "mongoose";
<<<<<<< HEAD
// import { unique } from "next/dist/build/utils";
=======

>>>>>>> 96f911fd5c24045dc5dc85df5484f84efd7b5902

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    cartItems: { type: Object, default: {} }
}, {minimize: false})

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User
