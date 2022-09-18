import { Response, Request } from 'express';
import { Brand } from '../db/entity/Brand';
import { Idol } from '../db/entity/Idol';

class BrandController {

    async getAllBrands() {}

    async createBrand() {}

    async createIdol(req: Request, res: Response) {
        const { brandId } = req.params
        const brand = await Brand.findOne({
            where: {
                id: parseInt(brandId)
            }
        })
        if(brand) {
            const idol = await Idol.create({ ...req.body, brand})
            idol.save()
            res.status(201).json(idol)
        }
        else {
            res.status(400).json({messages: "brand not found."})
        }
        
    }
}

export = new BrandController();