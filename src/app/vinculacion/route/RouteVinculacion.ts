import { Router } from "express";
import controllerFindAllVinculacion from "../controller/ControllerFindAllVinculacion";
import controllerAddVinculacion from "../controller/ControllerAddVinculacion";
import controllerUpdateVinculacion from "../controller/ControllerUpdateVinculacion";
import controllerDeleteVinculacion from "../controller/ControllerDeleteVinculacion";
import controllerFindTitleVinculacion from "../controller/ControllerFindTitleVinculacion";
import controllerFindSubTVinculacion from "../controller/ControllerFindSubTVinculacion";
import controllerFindPersonaVinculacion from "../controller/ControllerFindPersonaVinculacion";
import { verificarToken } from "../../../middlewar/verificarToken";
import controllerManyCasActVinculacion from "../controller/ControllerManyCasActVinculacion";
import controllerManyCasAsigVinculacion from "../controller/ControllerManyCasAsigVinculacion";
import controllerManyCasFinVinculacion from "../controller/ControllerManyCasFinVinculacion";

class RouteVinculacion {
    public routeVinculacionApi: Router;

    constructor() {
        this.routeVinculacionApi = Router();
    
        this.routeVinculacionApi.get("/getall", controllerFindAllVinculacion.callFindAll);
        this.routeVinculacionApi.get("/gettitle", controllerFindTitleVinculacion.callFindTitle);
        this.routeVinculacionApi.get("/getsubt", controllerFindSubTVinculacion.callFindSubT);
        this.routeVinculacionApi.get("/getpersona/:codPersona/:codClienteConsultant", verificarToken, controllerFindPersonaVinculacion.callFindPersona);
        this.routeVinculacionApi.get("/manycasact/:codPersona", controllerManyCasActVinculacion.callManyCasAct);
        this.routeVinculacionApi.get("/manycasasig/:codPersona", controllerManyCasAsigVinculacion.callManyCasAsig);
        this.routeVinculacionApi.get("/manycasfin/:codPersona", controllerManyCasFinVinculacion.callManyCasFin);
    
        this.routeVinculacionApi.post("/add", controllerAddVinculacion.callAddVinculacion);
        this.routeVinculacionApi.put("/update", controllerUpdateVinculacion.callUpdateVinculacion);
        this.routeVinculacionApi.delete("/delete", controllerDeleteVinculacion.callDeleteVinculacion);
    }
}

const routeVinculacion = new RouteVinculacion();
export default routeVinculacion.routeVinculacionApi;