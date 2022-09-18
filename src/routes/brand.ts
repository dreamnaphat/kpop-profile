import express from 'express';
import BrandController from '../controller/BrandController';

const router = express.Router()

router.get('/', BrandController.getAllBrands)
router.post('/', BrandController.createBrand)
router.post('/:brandId/idol', BrandController.createIdol)

export {
    router as brandRouter
}