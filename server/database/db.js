import mongoose from 'mongoose';
 
const Connection = async (username, password) => {
    const  URL = `mongodb://${username}:${password}@ac-jtzfvtf-shard-00-00.yrv7hfz.mongodb.net:27017,ac-jtzfvtf-shard-00-01.yrv7hfz.mongodb.net:27017,ac-jtzfvtf-shard-00-02.yrv7hfz.mongodb.net:27017/REACT-LOGIN?ssl=true&replicaSet=atlas-rf7dfg-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
         await mongoose.connect(URL, {useNewUrlParser: true });
         console.log('Database connected successfully');
    }catch (error){
          console.log('Error while connecting ', error);
    }
}

export default Connection;