import mongoose from "mongoose";

const cartSchema= new mongoose.Schema({
    cart:{type:mongoose.Schema.Types.ObjectId, ref:'Cart'},
    quantity: {type: Number, default: 1},
}, {_id: false})

const userSchema = new mongoose.Schema({
    first_name: { type: String ,  required: true},
    last_name: { type: String , required: true},
    email: { type: String , unique: true, required: true},
    age: {type: Number, required: true},
    password: { type: String , required: true},
    role: { type: String , default: 'usuario' , enum : ['usuario', 'seller', 'admin']},
    provider: String,
    cart: {type:[cartSchema], default : []}
}, {timestamps:true})


export default mongoose.model('User', userSchema)
