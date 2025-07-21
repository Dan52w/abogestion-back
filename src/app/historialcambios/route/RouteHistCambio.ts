import { Router } from "express";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerFindAllHistCambio from "../controller/ControllerFindAllHistCambio";
import controllerFindCodCasoHistCambio from "../controller/ControllerFindCodCasoHistCambio";
import controllerAddHistCambio from "../controller/ControllerAddHistCambio";

class RouteHistCambio {
    public routeHistCambioApi: Router;

    constructor() {
        this.routeHistCambioApi = Router();
    
        this.routeHistCambioApi.get("/getall", verificarToken, controllerFindAllHistCambio.callFindAll);
        this.routeHistCambioApi.get("/getcodcaso/:codCaso", verificarToken, controllerFindCodCasoHistCambio.callFindCodCaso);

        this.routeHistCambioApi.post("/add", verificarToken, controllerAddHistCambio.callAddHistCambio);
    }
}

const routeHistCambio = new RouteHistCambio();
export default routeHistCambio.routeHistCambioApi;