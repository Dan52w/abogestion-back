import { Request, Response } from "express";
import ServiceFindAllTipoCaso from "../service/ServiceFindAllTipoCaso";

class ControllerFindAllTipoCaso extends ServiceFindAllTipoCaso {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllTipoCaso.findAll(res);
    }
}

const controllerFindAllTipoCaso = new ControllerFindAllTipoCaso();
export default controllerFindAllTipoCaso;