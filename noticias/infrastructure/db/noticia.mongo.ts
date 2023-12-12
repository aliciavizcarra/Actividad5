import { collections } from "../../../context/mongoConnection";
import Noticia from "../../domain/noticia";
import NoticiasRepository from "../../domain/noticiaRepository";

export default class NoticiaRepositoryMongoDB implements NoticiasRepository{
    
    async getAllNoticias(): Promise<Noticia[] | undefined> {
        const noticiasFromDB = await collections.noticias.find().toArray();
        if(!noticiasFromDB) return undefined;
    }

    async getNoticiabyID(id: String): Promise<Noticia | undefined> {

        const noticiaID = new Object(id);
        const noticiaFRomBD = await collections.noticias.findOne({_id: noticiaID});
      
        if(!noticiaFRomBD) return undefined;

        const noticia: Noticia = {
            id: String(noticiaFRomBD._id),
            titulo: noticiaFRomBD.titulo,
            texto: noticiaFRomBD.texto,
            periodistas: noticiaFRomBD.periodistas,
            recursos: noticiaFRomBD.recursos
        };

        return noticia;
    }

    getDatosdelaNoticiabyPeriodista(id: string): Promise<Noticia | undefined> {
        throw new Error("Method not implemented.");
    }

    async createNoticia(noticia: any): Promise<Noticia | undefined> {
        
        const result = await collections.noticias.insertOne(noticia);
        const id = String(result.insertedId);
        return await this.getNoticiabyID(id);
    }

    deleteNoticia(id: string) {
        throw new Error("Method not implemented.");
    }

}