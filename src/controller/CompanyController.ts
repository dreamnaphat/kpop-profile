import { Response, Request } from 'express'
import { Company } from '../db/entity/Company'
import { Brand } from '../db/entity/Brand'


class CompanyController {

    async getAllCompanys(req: Request, res: Response) {
        const companies = await Company.find()
        res.status(200).json(companies)
    }

    async createCompany(req: Request, res: Response) {
        const company = await Company.create(req.body)
        company.save()
        res.status(201).json(company)
    }

    async createBrand(req: Request, res: Response) {
        const { companyId } = req.params
        const company = await Company.findOne({
            where: {
                id: parseInt(companyId)
            }
        })
        if(company) {
            const brand = await Brand.create({ ...req.body, company})
            brand.save()
            res.status(201).json(brand)
        }
        else {
            res.status(400).json({messages: "company not found."})
        }
        
    }

}

export = new CompanyController()