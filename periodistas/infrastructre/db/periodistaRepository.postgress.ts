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

        const periodista : Periodista = {
            id:"",
            name:"",
            birthday:""
        }


        const consulta = `SELECT * FROM public.periodistas where id='${id}'`;

        const periodistaFromDB: any[] = await executeQuery(consulta);
        if(periodistaFromDB.length>0){

            const item = periodistaFromDB[0];
            periodista.id = item.id,
            periodista.name = item.name;
            periodista.birthday = item.birthday;
        }

        return periodista;

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