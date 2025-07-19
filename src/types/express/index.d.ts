import { InfoToken } from "../../app/login/model/InfoToken";


declare global {
    namespace Express {
        interface Request {
            user?: InfoToken & {
                id?: number;
                nombre?: string;
                apellido?: string;
                rol?: string;
                correo?: string;
                password?: string;
            };
        }
    }
}
