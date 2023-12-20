import Noticia from "../../noticias/domain/noticia";

export default interface Periodista {
    id?:string;
    name: string;
    birthday: string;
    noticias?: Array<Noticia>;
}