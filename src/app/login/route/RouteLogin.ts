import { Router } from "express";
import controllerLogin from "../controller/ControllerLogin";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerMe from "../controller/ControllerMe";
import controllerLogout from "../controller/ControllerLogout";

class RouteLogin {
    public routeLoginApi: Router;

    constructor() {
        this.routeLoginApi = Router();

        this.routeLoginApi.post("", controllerLogin.callLogin);
        this.routeLoginApi.get("/me", verificarToken, controllerMe.callMe);
        this.routeLoginApi.post("/logout", controllerLogout.callLogout);
    }
}

const routeLogin = new RouteLogin();
export default routeLogin.routeLoginApi;