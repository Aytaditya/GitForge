    import mongoose from 'mongoose';

    export default async function connectDB() {
        try {
            await mongoose.connect(process.env.MONGO_URI)
            console.log("Connected to Mongodb")
            
        } catch (error) {
            console.log("Error connecting to Mongodb:",error.message)
        }
    }