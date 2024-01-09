import NoticiasRepository from "../../noticias/domain/noticiaRepository";
import PeriodistasRepository from "../domain/periostaRepository";

export class PeriodistaUseCases{

    private periodistaRepository : PeriodistasRepository;
    private noticiasRepository: NoticiasRepository;

    constructor(periodistaRepository : PeriodistasRepository, noticiasRepository: NoticiasRepository){
        this.periodistaRepository = periodistaRepository;
        this.noticiasRepository = noticiasRepository;
    }

    async getAllPeriodistas(){
        return this.periodistaRepository.getAllPeriodistas();
    }

    async getPeriodistabyID(id: number){

        try{
            let noticias = await this.noticiasRepository.getNoticiasDePeriodista(id);
            const periodista = await this.periodistaRepository.getPeriodistabyID(id);
            if(noticias){
                if(periodista){
                    periodista.noticias = noticias;
                }
            }
            return periodista;
        } catch (error){
            throw error;
        }
    }

    async createPeriodista(periodista: any){
        return this.periodistaRepository.createPeriodista(periodista);
    }

    async  updatePeriodista(id: number, name: string, birthday: string){
        return this.periodistaRepository.updatePeriodista(id,name,birthday);
    }

    async deletePeriodista(id: string){
        return this.periodistaRepository.deletePeriodista(id);
    }



}