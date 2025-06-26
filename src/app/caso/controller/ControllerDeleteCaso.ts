import { Request, Response } from "express";
import ServiceDeleteCaso from "../service/ServiceDeleteCaso";

class ControllerDeleteCaso extends ServiceDeleteCaso {
    public callDeleteUpdate(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteCaso.deleteCaso(id, res);
    }
}

const controllerDeleteCaso = new ControllerDeleteCaso();
export default controllerDeleteCaso;