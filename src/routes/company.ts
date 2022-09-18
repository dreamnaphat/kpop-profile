import express, {Response, Request} from 'express';
import CompanyController from '../controller/CompanyController';

const router = express.Router()

router.get('/', CompanyController.getAllCompanys)
router.post('/', CompanyController.createCompany)
router.post('/:companyId/brand', CompanyController.createBrand)

export {
    router as companyRouter
}