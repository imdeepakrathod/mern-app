import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "Mern",
    })
    .then(()=>{
        console.log("Connected to database  succesfully!");
    }).catch(err=>{
        console.log(`Some error occured while connecting to database! ${err}`);
    })
};

