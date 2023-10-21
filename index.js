// import express
import express from "express";// import express from "express";
//basic route
import Router from "./routes/routes.js";
// init express
const app = express();
          
          
//use router 
app.use(Router);


// listen on port
app.listen(1000 ,() => {console.log('Server running at https://localhost:1000')})