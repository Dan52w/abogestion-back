import { Request, Response } from "express";
import ServiceFindAllDocEti from "../service/ServiceFindAllDocEti";

class ControllerFindAllDocEti extends ServiceFindAllDocEti {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllDocEti.findAll(res);
    }
}

const controllerFindAllDocEti = new ControllerFindAllDocEti();
export default controllerFindAllDocEti;