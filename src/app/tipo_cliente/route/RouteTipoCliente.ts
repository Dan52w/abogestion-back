import { Router } from "express";
import controllerFindAllTipoCliente from "../controller/ControllerFindAllTipoCliente";
import controllerAddTipoCliente from "../controller/ControllerAddTipoCliente";

class RouteTipoCliente {
    public routeTipoClienteApi: Router;

    constructor() {
        this.routeTipoClienteApi = Router();
    
        this.routeTipoClienteApi.get("/getall", controllerFindAllTipoCliente.callFindAll);
    
        this.routeTipoClienteApi.post("/add", controllerAddTipoCliente.callAddTipoCliente);
    }
}

const routeTipoCliente = new RouteTipoCliente();
export default routeTipoCliente.routeTipoClienteApi;