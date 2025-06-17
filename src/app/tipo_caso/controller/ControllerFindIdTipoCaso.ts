import { Request, Response } from "express";
import ServiceFindIdTipoCaso from "../service/ServiceFindIdTipoCaso";

class ControllerFindIdTipoCaso extends ServiceFindIdTipoCaso {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdTipoCaso.findId(id, res);
    }
}

const controllerFindIdTipoCaso = new ControllerFindIdTipoCaso();
export default controllerFindIdTipoCaso; 