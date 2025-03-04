import express from "express";
import dotenv from "dotenv";
import blog from "./routes/blog.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/blog', blog);


app.get('/', (req, res)=>{
    res.send("API is running");
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT: ${PORT}`);
})