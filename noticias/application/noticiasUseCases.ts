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

    createNoticia(noticia: any){
        return this.noticiasRepository.createNoticia(noticia);
    } 

    async deleteNoticia(id: string){
        try{
            let noticiaBuscada = await this.getNoticiabyID(id);
            if(noticiaBuscada){
                if(noticiaBuscada.recursos){
                    noticiaBuscada.recursos.forEach(element => {
                        this.noticiasRepository.deleteRecurso(element.id)
                    });
                }
            } 
        }catch(error){
            console.error(error);
        }
        return this.noticiasRepository.deleteNoticia(id);
    }

    async getNoticiasDePeriodista(id: number){
        return this.noticiasRepository.getNoticiasDePeriodista(id);
    }


}