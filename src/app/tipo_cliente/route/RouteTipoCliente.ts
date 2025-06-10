import { Router } from "express";
import controllerFindAllTipoCliente from "../controller/ControllerFindAllTipoCliente";

class RouteTipoCliente {
    public routeTipoClienteApi: Router;

    constructor() {
        this.routeTipoClienteApi = Router();
    
        this.routeTipoClienteApi.get("/getall", controllerFindAllTipoCliente.callFindAll);
    }
}

const routeTipoCliente = new RouteTipoCliente();
export default routeTipoCliente.routeTipoClienteApi;