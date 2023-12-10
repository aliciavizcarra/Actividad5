import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createMongoConnection from "./context/mongoConnection";

createMongoConnection();

dotenv.config();

const app = express();
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');

const port = process.env.PORT;
const allowedOrigins = ["*"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

import {routerPeriodistas} from "./periodistas/infrastructre/rest/periodista.router";
app.use("/periodistas/", routerPeriodistas);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});

