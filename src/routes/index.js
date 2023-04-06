import {Router} from 'express';
import MedicosRouter from './medicos.router'

const router = Router();

router.use('/medicos', MedicosRouter)

export default router;