import { Request, Response } from "express";
import ServiceFindAllHistCambio from "../service/ServiceFindAllHistCambio";

class ControllerFindAllHistCambio extends ServiceFindAllHistCambio { 
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllHistCambio.findAll(res);
    }
}

const controllerFindAllHistCambio = new ControllerFindAllHistCambio();
export default controllerFindAllHistCambio;