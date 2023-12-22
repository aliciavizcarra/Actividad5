import express, { Request, Response } from "express";
import PeriodistasRepository from "../../domain/periostaRepository";
import PeriodistasRepositoryPostgres from "../db/periodistaRepository.postgress";
import Periodista from "../../domain/periodista";
import { PeriodistaUseCases } from "../../application/periodistaUseCases";


const router = express.Router();

const periodistaUseCases: PeriodistaUseCases = new PeriodistaUseCases(new PeriodistasRepositoryPostgres());



router.get("/", async (req: Request, res: Response)=>{

    try{
        const periodistas = await periodistaUseCases.getAllPeriodistas();
        res.json(periodistas);
    }catch(error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/:id", async (req: Request, res: Response)=>{

    try{
        const periodistaID = req.params.id;
        const periodistaBuscado = await periodistaUseCases.getPeriodistabyID(periodistaID);
        res.json(periodistaBuscado);
    }catch(error){
        res.status(500).json({ error: "Internal Server Error" });
    }
    
})

router.post("/api/",async (req: Request, res: Response)=>{
    try{
        const periodistaNueva: Periodista = req.body;
        const periodista = await periodistaUseCases.createPeriodista(periodistaNueva);
        res.json(periodista);
    }catch (error){
     res.status(500).send(error);
    }
});

router.put("/api/:id",async (req: Request, res: Response)=>{
    try{
        const idPeriodista = req.params.id;
        const periodistaBuscado = req.body;
        const periodistaActualizado = await periodistaUseCases.updatePeriodista(idPeriodista,periodistaBuscado.name, periodistaBuscado.birthday);

        res.status(201).json(periodistaActualizado);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"} );
    } 
});




export {router as  routerPeriodistas};

