import express from "express";
import dotenv from "dotenv";
import createMongoConnection from "./context/mongoConnection";
import {routerPeriodistas} from "./periodistas/infrastructre/rest/periodista.router";
import { routerNoticias } from "./noticias/infrastructure/rest/noticia.router";

createMongoConnection();

dotenv.config();

const app = express();
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './src/views');

const port = process.env.PORT;
const allowedOrigins = ["*"];



app.use("/periodistas/", routerPeriodistas);

app.use("/noticias/",routerNoticias)

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});

