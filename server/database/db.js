import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONODB_URI = `mongodb://admin:admin@ac-5rfpjgn-shard-00-00.j99w9ml.mongodb.net:27017,ac-5rfpjgn-shard-00-01.j99w9ml.mongodb.net:27017,ac-5rfpjgn-shard-00-02.j99w9ml.mongodb.net:27017/?ssl=true&replicaSet=atlas-xrwta6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI, {useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with database: ',error.message);
    }
}

export default DBConnection;