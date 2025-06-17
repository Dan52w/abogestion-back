import { Request, Response } from "express";
import ServiceAddTipoCaso from "../service/ServiceAddTipoCaso";

class ControllerAddTipoCaso extends ServiceAddTipoCaso {
    public callAddTipoCaso(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddTipoCaso.addTipoCaso(name, res);
    }
}

const controllerAddTipoCaso = new ControllerAddTipoCaso();
export default controllerAddTipoCaso;