import { Request, Response } from "express";
import ServiceLogin from "../service/ServiceLogin";

class ControllerLogin extends ServiceLogin {
    public callLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        ServiceLogin.login(email, password, res);
    }
}

const controllerLogin = new ControllerLogin();
export default controllerLogin;