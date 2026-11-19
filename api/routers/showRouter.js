import { Router } from 'express';
const showController = require('../controllers/showController.js');

const router = Router();

router.get('/', showController.index);
router.get('/:name', showController.show);
router.post('/', showController.addShow);
router.delete('/:id', showController.destroy);

export default router;