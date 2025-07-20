import { Router } from "express";
import controllerFindAllCaso from "../controller/ControllerFindAllCaso";
import controllerAddCaso from "../controller/ControllerAddCaso";
import controllerUpdateCaso from "../controller/ControllerUpdateCaso";
import controllerDeleteCaso from "../controller/ControllerDeleteCaso";
import controllerFindIdCaso from "../controller/ControllerFindIdCaso";
import controllerFindTituloCaso from "../controller/ControllerFindTituloCaso";
import controllerFindSubTipoCaso from "../controller/ControllerFindSubTipoCaso";
import controllerFindTipoCaso from "../controller/ControllerFindTipoCaso ";
import controllerFindEstadoCaso from "../controller/ControllerFindEstadoCaso";
import controllerFindCasoPadreCaso from "../controller/ControllerFindCasoPadreCaso";

class RouteCaso {
    public routeCasoApi : Router;

    constructor() {
        this.routeCasoApi = Router();
    
        this.routeCasoApi.get("/getall", controllerFindAllCaso.callFindAll);
        this.routeCasoApi.get("/getid/:id", controllerFindIdCaso.callFindId);
        this.routeCasoApi.get("/gettitle/:title", controllerFindTituloCaso.callFindTitulo);
        this.routeCasoApi.get("/getsubtype/:subTipo", controllerFindSubTipoCaso.callFindSubTipo);
        this.routeCasoApi.get("/gettype/:type", controllerFindTipoCaso.callFindTipo);
        this.routeCasoApi.get("/getestado/:estado", controllerFindEstadoCaso.callFindEstado);
        this.routeCasoApi.get("/getpadre/:casoPadre", controllerFindCasoPadreCaso.callFindCasoPadre);
    
        this.routeCasoApi.post("/add", controllerAddCaso.callAddCaso);
        this.routeCasoApi.put("/update", controllerUpdateCaso.callUpdateCaso);
        this.routeCasoApi.delete("/delete/:id", controllerDeleteCaso.callDeleteUpdate);
    }
}

const routeCaso = new RouteCaso();
export default routeCaso.routeCasoApi;