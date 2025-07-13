import { Router } from "express";
import controllerRegister from "../controller/ControllerRegister";

class RouteRegister {
    public routeRegisterApi: Router;

    constructor() {
        this.routeRegisterApi = Router();

        this.routeRegisterApi.post("/", controllerRegister.callRegister);
    }
}

const routeRegister = new RouteRegister();
export default routeRegister.routeRegisterApi;