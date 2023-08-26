import { Router, Request, Response } from "express";
import path from "path";

const router: Router = Router();

//ruta de los usuarios
router.get('/user/landing', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'landingU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

router.get('/user/login', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'loginU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

router.get('/user/registro', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'registerU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

//ruta de los administradores
router.get('/admin/login', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'admin.Login.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

router.get('/admin/landing', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'adminU.html'); // Ajusta la ruta
    res.sendFile(filePath);
});


//ruta de los motoristas
router.get('/driver/register', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'Login_M.html'); // Ajusta la ruta
    res.sendFile(filePath);
});

router.get('/driver', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, '../../../public', 'inicio.html'); // Ajusta la ruta
    res.sendFile(filePath);
});





export default router;

