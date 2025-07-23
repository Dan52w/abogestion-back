import { Request, Response } from "express";
import ServiceFindFiltersCaso from "../service/ServiceFindFilterCaso";

class ControllerFindFilterCaso extends ServiceFindFiltersCaso{
    public callFindFilter(req: Request, res: Response): void {
        const firma = Number(req.body.firma);
        const titulo = req.body.titulo as string || null;
        const estado = req.body.estado as string || null;
        const subtipo = req.body.subtipo as string || null;
        const fechaInicio = req.body.fechaInicio as string || null;
        const fechaFin = req.body.fechaFin as string || null;

        ServiceFindFiltersCaso.findFilter(firma, titulo, estado, subtipo,
            fechaInicio,fechaFin, res);
    }
}

const controllerFindFilterCaso = new ControllerFindFilterCaso();
export default controllerFindFilterCaso;