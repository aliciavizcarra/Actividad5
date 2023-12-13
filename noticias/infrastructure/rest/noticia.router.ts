import express from "express";
import { NoticiasUseCases } from "../../application/noticiasUseCases";
import NoticiaRepositoryMongoDB from "../db/noticia.mongo";
import { collections } from "../../../context/mongoConnection";


const router = express.Router();
const noticiasUseCases: NoticiasUseCases = new NoticiasUseCases(new NoticiaRepositoryMongoDB);

router.post("/", async(req,res)=>{

    try{
        const noticia = req.body;
        const noticiaCreada = await noticiasUseCases.createNoticia(noticia);
        res.status(201).json(noticiaCreada);
    }catch{
        res.status(500).json({error: "Internal Server Error"})
    }

})

router.get("/",async(req,res)=>{
    try{
        const noticias = await noticiasUseCases.getAllNoticias();
        res.json(noticias);
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/:id", async(req,res)=>{
    try{
        const noticiaID = req.params.id; //Asi se cogen datos de la ruta
        const noticia = await noticiasUseCases.getNoticiabyID(noticiaID);
        if(noticia){
            res.json(noticia) //asi hacemos que nos saque en formato json la noticia
        }else{
            res.status(404).json({error: "Noticia no encontrada"});
        }
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

export {router as routerNoticias}