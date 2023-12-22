import PeriodistasRepository from "../domain/periostaRepository";

export class PeriodistaUseCases{

    private periodistaRepository : PeriodistasRepository;

    constructor(periodistaRepository : PeriodistasRepository){
        this.periodistaRepository = periodistaRepository;
    }

    async getAllPeriodistas(){
        return this.periodistaRepository.getAllPeriodistas();
    }

    async getPeriodistabyID(id: string){
        const periodista = this.periodistaRepository.getPeriodistabyID(id);
        //const noticias = this.noticiasRepository.getNoticias(periodista) AQUI CREO UN METODO QUE ME TRAIGA TODAS LAS NOTICIAS QUE TENGAN EL ID DEL PERIODISTA BUSCADO
        
    }

    async createPeriodista(periodista: any){
        return this.periodistaRepository.createPeriodista(periodista);
    }

    async  updatePeriodista(id: string, name: string, birthday: string){
        return this.periodistaRepository.updatePeriodista(id,name,birthday);
    }

    async deletePeriodista(id: string){
        return this.periodistaRepository.deletePeriodista(id);
    }



}