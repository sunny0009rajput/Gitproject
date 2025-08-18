import {connect} from 'mongoose';

const MONGO_URI ='mongodb://localhost:27017/paymentIntegration';  

const connectToMongo = async () => {
    try {
        await connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

};
export default connectToMongo;

  