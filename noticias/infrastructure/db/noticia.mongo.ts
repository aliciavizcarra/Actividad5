import Noticia from "../../domain/noticia";
import NoticiasRepository from "../../domain/noticiaRepository";

export default class NoticiaRepositoryMongoDB implements NoticiasRepository{
    
    getAllNoticias(): Promise<Noticia[] | undefined> {
        throw new Error("Method not implemented.");
    }
    getNoticiabyID(id: string): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    getDatosdelaNoticiabyPeriodista(id: string): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    createNoticia(noticia: any): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }
    deleteNoticia(id: string) {
        throw new Error("Method not implemented.");
    }

}