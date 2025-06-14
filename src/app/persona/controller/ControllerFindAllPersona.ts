import { Request, Response } from "express";
import ServiceFindAllPersona from "../service/ServiceFindAllPersona";

class ControllerFindAllPersona extends ServiceFindAllPersona{
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllPersona.findAll(res);
    }
}

const controllerFindAllPersona = new ControllerFindAllPersona();
export default controllerFindAllPersona;
