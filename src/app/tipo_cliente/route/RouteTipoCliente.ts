import { Router } from "express";
import controllerFindAllTipoCliente from "../controller/ControllerFindAllTipoCliente";
import controllerAddTipoCliente from "../controller/ControllerAddTipoCliente";
import controllerFindIdTipoCliente from "../controller/ControllerFindIdTipoCliente";
import controllerUpdateTipoCliente from "../controller/ControllerUpdateTipoCliente";
import controllerDeleteTipoCliente from "../controller/ControllerDeleteTipoCliente";
import controllerFindNameTipoCliente from "../controller/ContorllerFindNameTipoCliente";

class RouteTipoCliente {
    public routeTipoClienteApi: Router;

    constructor() {
        this.routeTipoClienteApi = Router();
    
        this.routeTipoClienteApi.get("/getall", controllerFindAllTipoCliente.callFindAll);
        this.routeTipoClienteApi.get("/getid/:id", controllerFindIdTipoCliente.callFindId);
        this.routeTipoClienteApi.get("/getname/:name", controllerFindNameTipoCliente.callFindName);
    
        this.routeTipoClienteApi.post("/add", controllerAddTipoCliente.callAddTipoCliente);
        this.routeTipoClienteApi.put("/update", controllerUpdateTipoCliente.callUpdateTipoCliente);
        this.routeTipoClienteApi.delete("/delete/:id", controllerDeleteTipoCliente.callDeleteTipoCliente);
    }
}

const routeTipoCliente = new RouteTipoCliente();
export default routeTipoCliente.routeTipoClienteApi;