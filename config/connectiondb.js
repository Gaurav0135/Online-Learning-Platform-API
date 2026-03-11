import mongoose from "mongoose";

const connectionDb = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/myapp');
        console.log("mongoDB connected");
    }
    catch(err){
        console.log(err);
    }
};
    
    
export default connectionDb;

