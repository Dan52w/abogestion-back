import { Router } from "express";
import controllerFindAllEstado from "../controller/ControllerFindAllEstado";
import controllerAddEstado from "../controller/ControllerAddEstado";
import controllerUpdateEstado from "../controller/ControllerUpdateEstado";
import controllerDeleteEstado from "../controller/ControllerDeleteEstado";
import controllerFindIdEstado from "../controller/ControllerFindIdEstado";

class RouteEstado {
    public routeEstadoApi: Router;

    constructor() {
        this.routeEstadoApi = Router();
    
        this.routeEstadoApi.get("/getall", controllerFindAllEstado.callFindAll);
        this.routeEstadoApi.get("/getid/:id", controllerFindIdEstado.callFindId);
    
        this.routeEstadoApi.post("/add", controllerAddEstado.callAddEstado);
        this.routeEstadoApi.put("/update", controllerUpdateEstado.callUpdateEstado);
        this.routeEstadoApi.delete("/delete/:id", controllerDeleteEstado.callDeleteEstado);
    }
}

const routeEstado = new RouteEstado();
export default routeEstado.routeEstadoApi;