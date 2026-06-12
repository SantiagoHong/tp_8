import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
import logHelper from './../helpers/log-helper.js'
const { Client, Pool } = pkg;

export default class ProvinceRepository {
	getAllAsync = async () => {
		let returnArray = null;
		const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `SELECT * FROM provincias`;
			const result = await client.query(sql);
			await client.end();
			returnArray = result.rows;
			await logHelper.log(`Se consiguió exitosamente ${returnArray.length} provinces`)
		} catch (error) {
			await logHelper.log(new Error(error))
			try {
				await client.end()
			} catch (e) {
				await logHelper.log(new Error(e))
			}
		}
		return returnArray;
	}

    getByIdAsync = async (id) => {
		let returnObject = null;
		const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `SELECT * FROM provincias WHERE id=$1`;
			const values = [id];
			const result = await client.query(sql, values);
			if (result.rows.length > 0){
				returnObject = result.rows[0];
				await logHelper.log(`Se consiguió exitosamente province con id=${id}`)
			}
		} catch (error) {
			await logHelper.log(new Error(error))
			try { 
				await client.end() 
			} catch (e) {
				await logHelper.log(new Error(e))
			}
		}
		return returnObject;
	}

	createAsync = async (entity) => { 
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `INSERT INTO provincias (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5)`;
			const values = [entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order];
            const result = await client.query(sql, values);
            await client.end();
			await logHelper.log(`Se creó exitosamente province con id=${created.id}`)
		
		} catch (error) {
			await logHelper.log(new Error(error))
			try { 
				await client.end() 
			} catch (e) { 
				await logHelper.log(new Error(e)) 
			}
		}
		return error;
    }

	updateAsync = async (entity) => {
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `UPDATE provincias SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6`;
			const values = [entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order, entity.id];
            const result = await client.query(sql, values);
            await client.end();
			await logHelper.log(`Se actualizó exitosamente province con id=${updated.id}`)
		} catch (error) {
			await logHelper.log(new Error(error))
			try { 
				await client.end() 
			} catch (e) {
				await logHelper.log(new Error(e))
			}
		}
		return error;
    }

	deleteByIdAsync = async (id) => {
        let error = null;
        const client = new Client(DBConfig);
		try {
			await client.connect();
			const sql = `DELETE FROM provincias WHERE id = $1`;
			const values = [id];
            const result = await client.query(sql, values);
            await client.end();
			await logHelper.log(`Se eliminó exitosamente province con id=${id}`)
		} catch (error) {
			await logHelper.log(new Error(error))
			try { 
				await client.end() 
			} catch (e) {
				await logHelper.log(new Error(e))
			}
		}
		return error;
    }
}

