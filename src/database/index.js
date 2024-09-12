
import  mongoose  from "mongoose";

const connectToDB = async () => {

    const connectionUrl = 
    "mongodb+srv://hvitalis59:TPjpcT01CTOJO7zx@cluster0.aclis.mongodb.net/";

    mongoose.connect(connectionUrl)
    .then(() => console.log("blog database connection is successful"))
    .catch(error => console.log(error));
}

export default connectToDB;