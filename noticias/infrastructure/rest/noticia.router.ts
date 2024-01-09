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
        res.status(500).json({error: "Internal Server Error"} );
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

router.get("/",async(req,res)=>{
    try{
        const noticias = await noticiaUseCases.getAllNoticias();
        res.json(noticias);
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})



router.delete("/:id", async (req,res)=>{
    try{

        const noticiaID = req.params.id;
        const noticiaBorrada = await noticiaUseCases.deleteNoticia(noticiaID);
        if(noticiaBorrada){
            res.json("Noticia eliminada con exito")
        }else{
            res.status(404).json({error: "Noticia no encontrada"});
        } 
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})


router.get("/periodista/:id", async(req,res)=>{

    try{
        const idPeriodista = parseInt(req.params.id);
        const noticiasPeriodista = await  noticiaUseCases.getNoticiasDePeriodista(idPeriodista);
        console.log(noticiasPeriodista)
        res.json(noticiasPeriodista);

    }catch(error){
        console.error(error);
    }
})


export {router as routerNoticias};