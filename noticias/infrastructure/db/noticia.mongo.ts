import { ObjectId } from "mongodb";
import { collections } from "../../../context/mongoConnection";
import Noticia from "../../domain/noticia";
import NoticiasRepository from "../../domain/noticiaRepository";

export default class NoticiaRepositoryMongoDB implements NoticiasRepository{
    
    async getAllNoticias(): Promise<Noticia[] | undefined> {
        
        const noticiasFromDB = await collections.noticias.find().toArray();
        if(!noticiasFromDB) return undefined;

        const noticias: Noticia[] = noticiasFromDB.map((noticiaFromDB)=>{
            const noticia: Noticia = {

                id: String(noticiaFromDB._id),
                titulo: String(noticiaFromDB.titulo),
                texto:String(noticiaFromDB.texto),
                periodista:Array(noticiaFromDB.periodistas),
                recursos:Array(noticiaFromDB.recursos)
            }

            return noticia;

        });

        return noticias;

    }


    async getNoticiabyID(id: string): Promise<Noticia | undefined> {
        
        const noticiaID = new ObjectId(id);
        const noticiaFromDB = await collections.noticias.findOne({_id: noticiaID});
        if(!noticiaFromDB) return undefined;
        const noticia: Noticia = {
            id: String(noticiaFromDB._id),
            titulo: noticiaFromDB.titulo,
            texto: noticiaFromDB.texto,
            periodista: noticiaFromDB.periodistas,
            recursos: noticiaFromDB.recursos
        }

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