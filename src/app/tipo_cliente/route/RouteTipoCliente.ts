import { Router } from "express";
import controllerFindAllTipoCliente from "../controller/ControllerFindAllTipoCliente";
import controllerAddTipoCliente from "../controller/ControllerAddTipoCliente";
import controllerFindIdTipoCliente from "../controller/ControllerFindIdTipoCliente";
import controllerUpdateTipoCliente from "../controller/ControllerUpdateTipoCliente";

class RouteTipoCliente {
    public routeTipoClienteApi: Router;

    constructor() {
        this.routeTipoClienteApi = Router();
    
        this.routeTipoClienteApi.get("/getall", controllerFindAllTipoCliente.callFindAll);
        this.routeTipoClienteApi.get("/getid/:id", controllerFindIdTipoCliente.callFindId);
    
        this.routeTipoClienteApi.post("/add", controllerAddTipoCliente.callAddTipoCliente);
        this.routeTipoClienteApi.put("/update", controllerUpdateTipoCliente.callUpdateTipoCliente);
    }
}

const routeTipoCliente = new RouteTipoCliente();
export default routeTipoCliente.routeTipoClienteApi;