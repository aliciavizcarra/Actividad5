import express, {Request, Response} from "express";
import { NoticiasUseCases } from "../../application/noticiasUseCases";
import NoticiaRepositoryMongoDB from "../db/noticia.mongo";

const router = express.Router();
const noticiaUseCases: NoticiasUseCases = new NoticiasUseCases(new NoticiaRepositoryMongoDB());

router.post("/", async (req, res)=>{
    try{
        const newNoticia = req.body;        
        const noticiaCReada = await noticiaUseCases.createNoticia(newNoticia);
        res.status(201).json(noticiaCReada);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.get("/:id", async (req,res)=>{
    try{
        const noticiaID = req.params.id;
        const noticia = await noticiaUseCases.getNoticiabyID(noticiaID);
        if(noticia){
            res.json(noticia)
        }else{
            res.status(404).json({error: "Noticia no encontrada"});
        }
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

export {router as routerNoticias};