import express, { Request, Response } from "express";
import PeriodistasRepository from "../../domain/periostaRepository";
import PeriodistasRepositoryPostgres from "../db/periodistaRepository.postgress";
const router = express.Router();

const periodistaRepository: PeriodistasRepository = new PeriodistasRepositoryPostgres();



router.get("/", async (req: Request, res: Response)=>{

    try{
        const periodistas = await periodistaRepository.getAllPeriodistas();
        res.json(periodistas);
    }catch(error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export {router as routerPeriodistas};

