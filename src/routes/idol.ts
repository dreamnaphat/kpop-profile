import express from 'express';
import IdolController from '../controller/IdolController';

const router = express.Router()

router.get('/', IdolController.getAllIdols)
router.put('/:idolId', IdolController.updateIdol)

export {
    router as idolRouter
}