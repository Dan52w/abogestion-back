import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "./src/external_files/pdf");
    },
    filename: (_req, file, cb) => {
        const extension = path.extname(file.originalname);
        let nombreBase = path.basename(file.originalname, extension);
    // Reemplazar espacios por guiones
        nombreBase = nombreBase.replace(/\s+/g, "-");
    
        const fechaISO = new Date().toISOString();
        const fechaFormateada = fechaISO.replace(/[:.]/g, "-"); // "2025-05-12T05-15-05-000Z"
    
        const nombreFinal = `${nombreBase}-${fechaFormateada}${extension}`;
        cb(null, nombreFinal);
    },
});

const upload = multer({ storage });

export default upload;