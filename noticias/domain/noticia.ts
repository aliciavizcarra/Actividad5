import Periodista from "../../periodistas/domain/periodista";
import Recurso from "./recurso";

export default interface Noticia {
    id?: string;
    titulo: string;
    texto: string;
    periodista?: Array<Periodista>;
    recursos?: Array<Recurso>
}