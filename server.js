import app from "./app.js";
import connectToDatabase from "./config/db.js";

const port = process.env.PORT || 5050;

app.listen(port,async()=>{
    await connectToDatabase();
    console.log(`server is running at http://localhost:${port}`);
})