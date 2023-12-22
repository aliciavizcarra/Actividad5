import Periodista from "./periodista"

export default interface PeriodistasRepository{

    getAllPeriodistas(): Promise<Periodista[] | undefined>;
    getPeriodistabyID(id: string): Promise<Periodista | undefined>;
    createPeriodista(periodista: any): Promise <Periodista | undefined>;
    updatePeriodista(id: string, name: string, birthday: string): Promise <Periodista |undefined>;
    deletePeriodista(id: string): any;
    
}