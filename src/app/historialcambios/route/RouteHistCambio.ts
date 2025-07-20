import { Router } from "express";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerFindAllHistCambio from "../controller/ControllerFindAllHistCambio";

class RouteHistCambio {
    public routeHistCambioApi: Router;

    constructor() {
        this.routeHistCambioApi = Router();
    
        this.routeHistCambioApi.get("/getall", controllerFindAllHistCambio.callFindAll);
    }
}

const routeHistCambio = new RouteHistCambio();
export default routeHistCambio.routeHistCambioApi;