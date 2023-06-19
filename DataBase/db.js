import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseurl = process.env.DATABASE;
mongoose.set("strictQuery", false);
mongoose.connect(databaseurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log("data base connect succesfully");
    }
).catch(
    (error) => {
        console.log(error.message);
    }
);
