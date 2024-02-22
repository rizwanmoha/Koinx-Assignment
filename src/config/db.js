import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL);
        console.log('connection established');
    }
    catch (error) {
        console.log('Error occured');
    }

}
