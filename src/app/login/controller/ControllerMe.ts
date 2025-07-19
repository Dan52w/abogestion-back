import { Request, Response } from "express";
import ServiceMe from "../service/ServiceMe";

class ControllerMe extends ServiceMe {
    public callMe(req: Request, res: Response) {
        const id = Number(req.user?.id);
        ServiceMe.me(id, res);
    }
}

const controllerMe = new ControllerMe();
export default controllerMe;