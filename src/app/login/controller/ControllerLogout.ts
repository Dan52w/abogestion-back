import { Request, Response } from "express";

class ControllerLogout {
    public callLogout(req: Request, res: Response) {
    res.setHeader("Set-Cookie",
        "Authorization=; HttpOnly; Path=/login; Max-Age=0; SameSite=None; Secure");
    res.status(200).json({ message: "Sesión cerrada" });
}
}

const controllerLogout = new ControllerLogout();
export default controllerLogout;