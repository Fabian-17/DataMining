import { Router } from 'express';
import { obtenerEncuestas, crearEncuesta } from '../controllers/encuestaController.js';

const router = Router();

router.get('/encuestas', obtenerEncuestas);
router.post('/encuestas', crearEncuesta);


export default router;
