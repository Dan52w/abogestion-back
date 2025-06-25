import { Request, Response } from "express";
import ServiceFindAllCaso from "../service/ServiceFindAllCaso";

class ControllerFindAllCaso extends ServiceFindAllCaso{
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllCaso.findAll(res);
    }
}

const controllerFindAllCaso = new ControllerFindAllCaso();
export default controllerFindAllCaso;