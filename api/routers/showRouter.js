import { Router } from 'express';
import showController from '../controllers/showController.js';

const router = Router();

router.get('/', showController.index);
router.get('/:name', showController.show);
router.post('/', showController.addShow);
router.delete('/:id', showController.destroy);

export default router;