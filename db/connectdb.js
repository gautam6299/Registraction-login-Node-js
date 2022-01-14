import mongoose from "mongoose"

const connectdb= async (url)=>{
    try {
        const option={
            dbname:'login'
        }
        await mongoose.connect(url,option,option);
        console.log("Connected");
    } catch (error) {
        console.log(error)
    }
   
}

export default connectdb;