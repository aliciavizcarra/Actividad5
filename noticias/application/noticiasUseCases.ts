import NoticiasRepository from "../domain/noticiaRepository";

export class NoticiasUseCases{

    private noticiasRepository: NoticiasRepository;

    constructor(noticiasRepository: NoticiasRepository){
        this.noticiasRepository = noticiasRepository;
    }

    async getAllNoticias(){
        return this.noticiasRepository.getAllNoticias();
    }

    async getNoticiabyID(id: string){
        return this.noticiasRepository.getNoticiabyID(id);
    }

    async getDatosdelaNoticiabyPeriodista(id:string){
        return this.noticiasRepository.getDatosdelaNoticiabyPeriodista(id);
    }

    createNoticia(noticia: any){
        return this.noticiasRepository.createNoticia(noticia);
    } 

    deleteNoticia(id: string){
        return this.noticiasRepository.deleteNoticia(id);
    }


}