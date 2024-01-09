import Noticia from "../../noticias/domain/noticia";

export default interface Periodista {
    id?:number;
    name: string;
    birthday: string;
    noticias: Array<Noticia>;
}