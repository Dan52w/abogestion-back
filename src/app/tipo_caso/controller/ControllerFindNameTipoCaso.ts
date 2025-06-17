import { Request, Response } from "express";
import ServiceFindNameTipoCaso from "../service/SeviceFindNameTipoCaso";

class ControllerFindNameTipoCaso extends ServiceFindNameTipoCaso {
    public findName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameTipoCaso.findName(name, res);
    }
}

const controllerFindNameTipoCaso = new ControllerFindNameTipoCaso();
export default controllerFindNameTipoCaso;