import { Router } from 'express';
import { guardarRespuestas } from '../controllers/encuestaController.js';

const router = Router();


router.post('/encuestas', guardarRespuestas);


export default router;
