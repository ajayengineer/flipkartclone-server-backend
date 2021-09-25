import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecomflipkart.trlpr.mongodb.net/CLONFLIPKART?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database Connected Successfully Created by: Ajay Rai');
    }catch(error) {
        console.log('Error:', error.message);
    }
}

export default Connection;