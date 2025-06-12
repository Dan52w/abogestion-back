import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import routeRolApi from "../../app/rol/route/RouteRol";
import routeTipoClienteApi from "../../app/tipo_cliente/route/RouteTipoCliente";
import routeClienteApi from "../../app/cliente/route/RouteCliente";

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
    
        this.app.set("PORT", 3311); //Solo un set para el puerto
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit: '100Mb'}));
        this.app.use(express.urlencoded({extended: true}));
    
        this.app.use("/api/v1/rol", routeRolApi);
        this.app.use("/api/v1/tipocliente", routeTipoClienteApi);
        this.app.use("/api/v1/cliente", routeClienteApi);
    }

    public encender(): void{
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Listo el backend en el puerto: ", this.app.get("PORT"));
        });
    }
}

export default Server;