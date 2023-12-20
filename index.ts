import express from "express";
import dotenv from "dotenv";
import {routerPeriodistas} from "./periodistas/infrastructre/rest/periodista.router";
import { routerNoticias } from "./noticias/infrastructure/rest/noticia.router";
import createMongoConnection from "./context/mongoConnection";

createMongoConnection();

dotenv.config();

const app = express();
const port = process.env.PORT
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', './views');


app.use("/periodistas/", routerPeriodistas);

app.use("/noticias", routerNoticias);

app.listen(port, () => {
  console.log(`Application started on port ${port}`);
});

