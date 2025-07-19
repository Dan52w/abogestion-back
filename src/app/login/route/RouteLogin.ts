import { Router } from "express";
import controllerLogin from "../controller/ControllerLogin";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerMe from "../controller/ControllerMe";

class RouteLogin {
    public routeLoginApi: Router;

    constructor() {
        this.routeLoginApi = Router();

        this.routeLoginApi.post("", controllerLogin.callLogin);
        this.routeLoginApi.get("/me", verificarToken, controllerMe.callMe);
    }
}

const routeLogin = new RouteLogin();
export default routeLogin.routeLoginApi;