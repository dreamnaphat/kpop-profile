import { DataSource } from 'typeorm'
import { DB } from '../util/config'

export const connection = new DataSource({
	type: 'mysql',
	host: DB.HOST,
	port: 3306,
	username: DB.USER,
	password: DB.PWD,
	database: DB.NAME,
	entities: ["src/db/entity/*.ts"],
	synchronize: true
})

export function dbConnection() {
	connection
	.initialize()
	.then(() => {
		console.log('database is conected.')
	})
	.catch((error) => {
		console.error(error)
	})
}