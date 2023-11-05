import mongoose from "mongoose";


const schema=new mongoose.Schema({
    user:{type:String,
    required:[true,"Username is required"],
    unique:[true,"username already exist"]
    },
    password:{type:String,
        required:[true,"Password is required"],
        unique:[true,"Password already exist"]
    },
    name:{type:String,
        required:[true,"Username is required"],
        unique:[true,"username already exist"]
        },

})



export default mongoose.model.users||mongoose.model("user",schema);