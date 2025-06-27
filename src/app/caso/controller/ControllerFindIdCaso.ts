import { Request, Response } from "express";
import ServiceFindIdCaso from "../service/ServiceFindIdCaso";

class ControllerFindIdCaso extends ServiceFindIdCaso {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdCaso.findId(id, res);
    }
}

const controllerFindIdCaso = new ControllerFindIdCaso();
export default controllerFindIdCaso;