import express, {Request, Response} from "express";
import { NoticiasUseCases } from "../../application/noticiasUseCases";
import NoticiaRepositoryMongoDB from "../db/noticia.mongo";

const router = express.Router();
const noticiaUseCases: NoticiasUseCases = new NoticiasUseCases(new NoticiaRepositoryMongoDB());

router.get("/",async(req,res)=>{
    try{
        const noticias = await noticiaUseCases.getAllNoticias();
        res.render("noticias", {noticias})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/:periodista", async(req,res)=>{
    try{
        const idPeriodista = parseInt(req.params.periodista)
        const noticias = await noticiaUseCases.getNoticiasDePeriodista(idPeriodista);
        res.render("noticiasPeriodista", {noticias, idPeriodista})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})



export {router as routerNoticiasRender};