import { Request, Response } from "express";
import ServiceFindGeneralVinculaciones from "../service/ServiceFindGeneralVinculacion";

class ControllerFindGeneralVinculaciones extends ServiceFindGeneralVinculaciones {
    public callFindGeneral(req: Request, res: Response): void {
        const firma = Number(req.body.firma);
        const titulo = req.body.titulo as string || null;
        const estado = req.body.estado as string || null;
        const subtipo = req.body.subtipo as string || null;
        const fechaInicio = req.body.fechaInicio as string || null;
        const fechaFin = req.body.fechaFin as string || null;

        ServiceFindGeneralVinculaciones.findGeneral(firma, titulo, estado, subtipo,
            fechaInicio,fechaFin, res);
    }
}

const controllerFindGeneralVinculaciones = new ControllerFindGeneralVinculaciones();
export default controllerFindGeneralVinculaciones;