import Noticia from "./noticia";

export default interface NoticiasRepository{

    getAllNoticias(): Promise<Noticia[] | undefined>;

    getNoticiabyID(id: string): Promise<Noticia | undefined>;

    createNoticia(noticia: any): Promise <Noticia | undefined>;

    deleteNoticia(id: string): any;

    getNoticiasDePeriodista(id: string): Promise<Noticia[] | undefined>;
    
}