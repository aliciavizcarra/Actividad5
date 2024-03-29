import Periodista from "../../periodistas/domain/periodista";
import Recurso from "./recurso";

export default interface Noticia {
    id: string;
    titulo: string;
    texto: string;
    periodistas: Array<any>;
    recursos?: Array<Recurso>
}