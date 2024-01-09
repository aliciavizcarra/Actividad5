import { ObjectId } from "mongodb";
import { collections } from "../../../context/mongoConnection";
import Noticia from "../../domain/noticia";
import NoticiasRepository from "../../domain/noticiaRepository";

export default class NoticiaRepositoryMongoDB implements NoticiasRepository{


    async getNoticiasDePeriodista(id: number): Promise<Noticia[] | undefined> {
        console.log(id);
        
        try{
            const noticias = await this.getAllNoticias();
            const noticiasPeriodista : Noticia[] = [];
            if(!noticias) return undefined;
            for(let noticia of noticias){
                console.log(noticia);
                               
                for(let periodista of noticia.periodistas){
                    console.log(periodista);
                    
                    if(periodista.id === id){
                        console.log("entro");
                        
                        const noticiaNueva = {
                            id:noticia.id,
                            titulo: noticia.titulo,
                            texto: noticia.texto,
                            periodistas: noticia.periodistas,
                            recursos : noticia.recursos
                        }
                        noticiasPeriodista.push(noticiaNueva)
                    }
                }
            }
            return noticiasPeriodista;
        }catch (error){
            console.error(error)
        }
    }

    async getAllNoticias(): Promise<Noticia[] | undefined> {

        const noticiasFromDB = await collections.noticias.find().toArray();
        if(!noticiasFromDB) return undefined;

        const noticias: Noticia[] = noticiasFromDB.map((noticiaFromDB)=>{
            const noticia: Noticia = {

                id: String(noticiaFromDB._id),
                titulo: String(noticiaFromDB.titulo),
                texto:String(noticiaFromDB.texto),
                periodistas:noticiaFromDB.periodistas,
                recursos:Array(noticiaFromDB.recursos)
            }

            return noticia;

        });

        return noticias;

    }

    async getNoticiabyID(id: string): Promise<Noticia | undefined> {

        const noticiaID = new ObjectId(id);
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


    async createNoticia(noticia: any): Promise<Noticia | undefined> {
        
        const result = await collections.noticias.insertOne(noticia);
        const id = String(result.insertedId);
        return await this.getNoticiabyID(id);
    }

    async deleteNoticia(id: string) {
        
        const noticiaID = new ObjectId(id);
        const noticiaFromDB = await collections.noticias.deleteOne({_id:noticiaID});

        if(!noticiaFromDB){
            return undefined
        } else{
            return "Noticia eliminada"
        }

    }

}