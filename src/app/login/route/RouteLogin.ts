import { Router } from "express";
import controllerLogin from "../controller/ControllerLogin";

class RouteLogin {
    public routeLoginApi: Router;

    constructor() {
        this.routeLoginApi = Router();
    
        this.routeLoginApi.post("", controllerLogin.callLogin);
    }
}

const routeLogin = new RouteLogin();
export default routeLogin.routeLoginApi;