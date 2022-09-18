import express from 'express';
require('dotenv').config();
import "reflect-metadata"
import { SERVER } from './util/config'
import { dbConnection } from './db/connect'

/* routes import */
import { companyRouter } from './routes/company';
import { brandRouter } from './routes/brand'
import { idolRouter } from './routes/idol'

const app = express();
app.use(express.json())

const apiPath = '/api/v1/'
app.use(apiPath+'company', companyRouter)
app.use(apiPath+'brand', brandRouter)
app.use(apiPath+'idol', idolRouter)

const main = async () => {
    
    /* database conection */
    dbConnection()
    
    /* server start */
    app.listen(SERVER.PORT, () => {
        console.log('server is running on port '+ SERVER.PORT)
    });
        
}
main()


