import executeQuery from "../../../context/postgresConnection";
import Periodista from "../../domain/periodista";
import PeriodistasRepository from "../../domain/periostaRepository";


export default class PeriodistasRepositoryPostgres implements PeriodistasRepository{

    async getAllPeriodistas(): Promise<Periodista[] | undefined> {
       
        try{
            const consulta = await executeQuery(`SELECT * FROM public.periodistas;`);

            const periodistas: Periodista [] = consulta.rows.map((row:any)=>{
                return{
                    id: row.id,
                    name: row.name,
                    birthday: row.birthday
                };
            });
            console.log(periodistas);
            return periodistas;
        }catch (error){
            console.log('No se pueden sacar los periodistas:', error);
            return undefined;
        }
    }


    getPeriodistabyID(id: string): Promise<Periodista | undefined> {
        throw new Error("Method not implemented.");
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