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
        return this.periodistaRepository.getPeriodistabyID(id);
    }

    async createPeriodista(periodista: any){
        return this.periodistaRepository.createPeriodista(periodista);
    }

    async  updatePeriodista(id: string){
        return this.periodistaRepository.updatePeriodista(id);
    }

    async deletePeriodista(id: string){
        return this.periodistaRepository.deletePeriodista(id);
    }



}