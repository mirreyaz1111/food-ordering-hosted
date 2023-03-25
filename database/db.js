const mongoose=require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://restaurant-user:project123@foodordermanagementapp.9tlsg.mongodb.net/?retryWrites=true&w=majority')
        console.log("Db connection successful");
    }
    catch{
        console.log("Db connection error");
    }
}
module.exports = connectDB;