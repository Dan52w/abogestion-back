import { Request, Response } from "express";
import ServiceFindCasoPadreCaso from "../service/ServiceFindCasoPadreCaso";

class ControllerFindCasoPadreCaso extends ServiceFindCasoPadreCaso {
    public callFindCasoPadre(req: Request, res: Response) {
        const casoPadre = Number(req.params.casoPadre);
        ServiceFindCasoPadreCaso.findCasoPadre(casoPadre, res);
    }
}

const controllerFindCasoPadreCaso = new ControllerFindCasoPadreCaso();
export default controllerFindCasoPadreCaso;