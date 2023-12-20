import executeQuery from "../../../context/postgresConnection";
import Periodista from "../../domain/periodista";
import PeriodistasRepository from "../../domain/periostaRepository";


export default class PeriodistasRepositoryPostgres implements PeriodistasRepository{

    async getAllPeriodistas(): Promise<Periodista[] | undefined> {
       
        
        try{
            const periodistas: Periodista[] = [];
            const consulta = `SELECT * FROM public.periodistas`;
            const periodistasFromDB: any [] = await executeQuery(consulta);
            for (const item of periodistasFromDB){
                const periodista: Periodista = {
                    id:item.id,
                    name: item.name,
                    birthday: item.birthday
                }
                periodistas.push(periodista);
            }
        
            return periodistas;
        }catch (error){
            console.log('No se pueden sacar los periodistas:', error);
            return undefined;
        }
    }


    async getPeriodistabyID(id: string): Promise<Periodista | undefined> {

        try{
            const consulta = `SELECT * FROM public.periodistas where id='${id}'`;
            const periodistaFromDB: any[] = await executeQuery(consulta);

            if(periodistaFromDB.length>0){

                const item = periodistaFromDB[0];

                const periodista : Periodista = {
                    id:item.id,
                    name:item.name,
                    birthday:item.birthday
                    
                };

                return periodista;
            }else{
                return undefined;
            }
            
        }catch(error){
            console.error("Error al obtener el periodista por ID:", error);
        }
    }
    
    createPeriodista(periodista: any): Promise<Periodista | undefined> {
        throw new Error("Method not implemented.");
    }
    updatePeriodista(id: string): Promise<Periodista | undefined> {
        throw new Error("Method not implemented.");
    }
    deletePeriodista(id: string) {
        throw new Error("Method not implemented.");
    }

}