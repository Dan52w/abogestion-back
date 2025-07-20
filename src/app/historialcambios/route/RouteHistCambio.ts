import { Router } from "express";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerFindAllHistCambio from "../controller/ControllerFindAllHistCambio";
import controllerFindCodCasoHistCambio from "../controller/ControllerFindCodCasoHistCambio";

class RouteHistCambio {
    public routeHistCambioApi: Router;

    constructor() {
        this.routeHistCambioApi = Router();
    
        this.routeHistCambioApi.get("/getall", verificarToken, controllerFindAllHistCambio.callFindAll);
        this.routeHistCambioApi.get("/getcodcaso/:codCaso", verificarToken, controllerFindCodCasoHistCambio.callFindCodCaso);
    }
}

const routeHistCambio = new RouteHistCambio();
export default routeHistCambio.routeHistCambioApi;