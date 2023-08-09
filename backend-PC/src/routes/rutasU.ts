import { Router, Request, Response } from "express";
import path from "path";

const router: Router = Router();

//ruta de registro de los usuarios
router.get('/user/registro', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'registerU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

//ruta de registro de los administradores
router.get('/admin/registro', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'admin.Login.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

//ruta de registro de los motoristas
router.get('/driver/registro', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'Login_M.html'); // Ajusta la ruta
    res.sendFile(filePath);
});



export default router;

