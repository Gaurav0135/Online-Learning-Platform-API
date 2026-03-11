import mongoose from "mongoose";

const studentProfileSchema = new mongoose.Schema({

    address : {
        type : String
    },

    phone : {
        type : Number
    },

    student : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : true,
        unique : true
    }
},
    {timeStamp : true}
)

export default mongoose.model("StudentProfile", studentProfileSchema);