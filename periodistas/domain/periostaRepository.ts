import Periodista from "./periodista"

export default interface PeriodistasRepository{

    getAllPeriodistas(): Promise<Periodista[] | undefined>;
    getPeriodistabyID(id: number): Promise<Periodista | undefined>;
    createPeriodista(periodista: any): Promise <Periodista | undefined>;
    updatePeriodista(id: number, name: string, birthday: string): Promise <Periodista |undefined>;
    deletePeriodista(id: number): any;
    
}