import e from "cors";
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
                    birthday: item.birthday,
                    noticias: item.noticias
                }
                periodistas.push(periodista);
            }
        
            return periodistas;
        }catch (error){
            console.log('No se pueden sacar los periodistas:', error);
            return undefined;
        }
    }


    async getPeriodistabyID(id: number): Promise<Periodista | undefined> {

        try{
            const consulta = `SELECT * FROM public.periodistas where id='${id}'`;
            const periodistaFromDB: any[] = await executeQuery(consulta);
            if(!periodistaFromDB) return undefined;
            if(periodistaFromDB.length>0){

                const item = periodistaFromDB[0];

                const periodista : Periodista = {
                    id:item.id,
                    name:item.name,
                    birthday:item.birthday,
                    noticias: item.noticias
                };
                return periodista;
            }
        }catch(error){
            console.error("Error al obtener el periodista por ID:", error);
        }
    }
    
    async createPeriodista(periodista: any): Promise<Periodista | undefined> {
        
        try{
            if(periodista.id){
                const consulta = await executeQuery(`INSERT INTO public.periodistas(id, name, birthday) VALUES (${periodista.id},'${periodista.name}', '${periodista.birthday}');`)
            }   
        }catch (error){
            console.error(error);
        }
        return periodista;
    }


    async updatePeriodista(id: number, name: string, birthday: string): Promise<Periodista | undefined> {
        try{

            if(id){
                const consulta = await executeQuery(
                    `UPDATE public.periodistas
                    SET name='${name}', birthday='${birthday}'
                    WHERE id=${id};`);
            }  

        }catch (error){
            console.error(error);
        }

        const periodista = await this.getPeriodistabyID(id);
        return periodista;
    }


    async deletePeriodista(id: string) {
        try{

            if(id){
                const consulta = await executeQuery(
                    `DELETE FROM public.periodistas
                    WHERE id=${id};`
                )
            }
        }catch(error){
            console.error(error);
        }

        const periodistas = await this.getAllPeriodistas();
        return periodistas;

    }
}