import { Request, Response } from "express";
import ServiceFindIdSubTipoCaso from "../service/ServiceFindIdSubTipoCaso";

class ControllerFindIdSubTipoCaso extends ServiceFindIdSubTipoCaso {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdSubTipoCaso.findId(id, res);
    }
}

const controllerFindIdSubTipoCaso = new ControllerFindIdSubTipoCaso();
export default controllerFindIdSubTipoCaso;