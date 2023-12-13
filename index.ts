import express from "express";
import dotenv from "dotenv";
import createMongoConnection from "./context/mongoConnection";
import {routerPeriodistas} from "./periodistas/infrastructre/rest/periodista.router";
import { routerNoticias } from "./noticias/infrastructure/rest/noticia.router";

createMongoConnection();

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use("/periodistas/", routerPeriodistas);
app.use("/noticias/",routerNoticias)

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});

