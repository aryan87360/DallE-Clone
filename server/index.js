import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connedtDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 8080;


const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

const startServer = async () =>{

    try{
        connedtDB(process.env.MONGODB_URL);
        app.listen(PORT, () =>{
            console.log(`Server is running on  http://localhost:${PORT}`);  
        })
    }
    catch(err){
        console.log(err);
    }

}

startServer();