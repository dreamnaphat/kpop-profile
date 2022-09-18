import { Response, Request } from 'express';
import { Idol } from '../db/entity/Idol';

class IdolController {

    async getAllIdols(req: Request, res: Response) {
        const idols = await Idol.find()
        res.status(200).json(idols)
    }

    async updateIdol(req: Request, res: Response) {
        const { idolId } = req.params
        const idol = await Idol.findOne({
            where: {
                id: parseInt(idolId)
            }
        })
        if(idol) {
            Idol.save({...idol, ...req.body})
            res.json(idol)
        }
        else {
            res.status(400).json({messages: "idol not found."})
        }
    }
}

export = new IdolController();